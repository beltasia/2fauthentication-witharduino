const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Store the OTP and its generation time
let generatedOTP = '';
let otpGeneratedTime = 0;

// Set up Serial communication with Arduino
const arduinoPort = new SerialPort({ path: 'COM15', baudRate: 9600 }); 
const parser = arduinoPort.pipe(new ReadlineParser({ delimiter: '\n' }));

// Read OTP from Arduino
parser.on('data', (data) => {
  if (data.startsWith('SEND_OTP:')) {
    generatedOTP = data.split(':')[1].trim(); // Extract the OTP
    otpGeneratedTime = Date.now(); // Record the time
    console.log(`OTP received from Arduino: ${generatedOTP}`);
  }
});

// Serve the OTP entry page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Verify the OTP
app.post('/verify-otp', (req, res) => {
  const { otp } = req.body;
  const currentTime = Date.now();

  // Check if OTP is valid and not expired (30 seconds)
  if (otp === generatedOTP && (currentTime - otpGeneratedTime <= 30000)) {
    res.json({ success: true, message: 'Welcome!' });
  } else {
    res.json({ success: false, message: 'Invalid/Expired OTP' });
  }
});

// Serve the dashboard page
app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/dashboard.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});