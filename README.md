 Secure Authentication Framework for Financial Trading Platforms

This project implements a **secure authentication framework** for financial trading platforms using **FOB keys** and **One-Time Passwords (OTPs)**. The system combines hardware-based authentication (RFID FOB keys) with dynamically generated OTPs to ensure secure access to sensitive financial data.

---

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Hardware Requirements](#hardware-requirements)
4. [Software Requirements](#software-requirements)
5. [Setup Instructions](#setup-instructions)


---

## Overview
The system consists of:
- **Arduino Uno**: Handles RFID scanning and OTP generation.
- **RFID Reader (MFRC522)**: Reads the FOB key's unique identifier (UID).
- **LCD Display (I2C)**: Displays the generated OTP.
- **Node.js Backend**: Validates the OTP and serves a web interface for OTP entry.
- **Web Dashboard**: Displays financial portfolio information after successful authentication.

---

## Features
- **Two-Factor Authentication (2FA)**: Combines FOB keys (something you have) and OTPs (something you know).
- **Time-Bound OTPs**: OTPs are valid for **30 seconds**, reducing the risk of replay attacks.
- **Real-Time Communication**: Serial communication between Arduino and Node.js ensures fast and reliable data transfer.
- **User-Friendly Interface**: Intuitive web interface for OTP entry and dashboard access.

---

## Hardware Requirements
- **Arduino Uno**
- **RFID Reader (MFRC522)**
- **RFID FOB Key**
- **LCD Display (I2C)**
- **USB Cable**
- **Jumper Wires**
- **Breadboard**

---

## Software Requirements
- **Arduino IDE**: For uploading code to the Arduino.
- **Node.js**: For running the backend server.
- **Required Libraries**:
  - `MFRC522` (for RFID)
  - `LiquidCrystal_I2C` (for LCD)
  - `express`, `body-parser`, `cors`, `serialport` (for Node.js backend)

---

## Setup Instructions

### 1. Arduino Setup
1. Connect the hardware components:
   - RFID Reader to Arduino (SPI pins).
   - LCD Display to Arduino (I2C pins).
2. Install the required libraries in the Arduino IDE:
   - `MFRC522`
   - `LiquidCrystal_I2C`
3. Upload the Arduino code to the board.

### 2. Node.js Backend Setup
1. Install Node.js from [nodejs.org](https://nodejs.org/).
2. Clone this repository or download the code.
3. Navigate to the project directory and install dependencies:
   ```bash
   npm install express body-parser cors serialport
   ```
4. Start the server:
   ```bash
   node server.js
   ```

### 3. Web Interface
1. Open your browser and navigate to `http://localhost:3000`.
2. Use the web interface to enter the OTP and access the dashboard.

---

## Usage
1. **Scan FOB Key**:
   - Scan a valid RFID FOB key using the RFID reader.
   - The Arduino will generate a 6-digit OTP and display it on the LCD.

2. **Enter OTP**:
   - Enter the OTP on the web interface.
   - If the OTP is valid, you will be redirected to the dashboard.

3. **Dashboard**:
   - View your financial portfolio information on the dashbooard

## Acknowledgments
- **Arduino Community**: For providing excellent documentation and libraries.
- **Node.js Community**: For creating a robust and scalable backend framework.
