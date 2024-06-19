const express = require("express");
const { Server } = require("socket.io");
const http = require("http");

const app = express();

/***socket connection */
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
});

io.on("connection", async (socket) => {
  console.log("connect User ", socket.id);
});

module.exports = {
  app,
  server,
  io,
};
