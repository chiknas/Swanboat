// Create WebSocket connection.
export const socket = new WebSocket('ws://localhost:3000');

// Connection opened
socket.addEventListener('open', function () {
  socket.send('"Hello server"');
});

// Listen for messages
socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
});
