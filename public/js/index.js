var socket = io();

socket.on("connect", function() {
  console.log("Connected to server");

  socket.emit('createMessage', {from: 'Jack', text: 'djufhiewhvfgruqwh ewfewd teiuf dcivjoirhf '})
}); // end socket.on

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

socket.on("newMessage", function(message) {
  console.log("newMessage ", message);
});
