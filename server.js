const express = require("express");
const socket = require("socket.io");

// App setup
const app = express();
const server = app.listen(8000, function () {
  console.log("Available at http://localhost:8000");
});

// Static files
app.use(express.static("static"));

// Socket setup & pass server
const io = socket(server);
io.on("connection", (socket) => {
  console.log(`Connection Established with ID: ${socket.id}`);

  // Handle chat event
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });

  // Handle typing event
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});
