// Create WebSocket connection.
const port = 3000
const hostname = window.location?.hostname ?? '127.0.0.1';
export const socket = new WebSocket(`ws://${hostname}:${port}`);

// Connection opened
socket.addEventListener('open', function () {
  socket.send('"Hello server"');
});

// Listen for messages
socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
});
