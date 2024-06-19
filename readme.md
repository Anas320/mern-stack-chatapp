# Chat Application

This is a chat application built with React for the frontend and Node.js with Express for the backend. It uses Socket.IO for real-time communication and connects to an Astra DB (Cassandra) database for storing users and messages.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)
- [Services](#services)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- Real-time messaging with Socket.IO
- Protected routes using JWT
- Responsive design with Tailwind CSS
- Persistent storage with Astra DB

## Prerequisites

- Node.js and npm installed
- Astra DB account and application token
- `axios` for HTTP requests
- `socket.io-client` for Socket.IO communication

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Anas320/mern-stack-chatapp
   cd mern-stack-chatapp
   ```

2. **Install dependencies:**

   ```bash
   # For backend
   cd server
   npm install

   # For frontend
   cd ../client
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `server` directory with the following content:

   ```env
   PORT=5000
   ASTRA_DB_APPLICATION_TOKEN=your_astra_db_application_token
   ```

## Usage

1. **Backend and Frontend Servers Start Concurrently:**

   ```bash
   npm start
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```
