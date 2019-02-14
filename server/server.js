const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const { generateMessage, generateLocationMessage } = require("./utils/message");
const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 3000;
var app = express();
const server = http.createServer(app);
var io = socketIO(server);

io.on("connection", socket => {
  console.log("New user connected");

  socket.emit("newMessage", generateMessage("Admin", "Welcome to the chat room"));

  socket.broadcast.emit(
    "newMessage",
    generateMessage("Admin", "New user has joined the room")
  );

  socket.on("createMessage", (message, callback) => {
    console.log("createMessage ", message);
    io.emit("newMessage", generateMessage(message.from, message.text));
    callback()
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  })

  socket.on("disconnect", () => {
    console.log("User was disconnected");
  });
});

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
