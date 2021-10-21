import { handleControls } from './inputhandlers/ControlsHandler/ControlsHandler';
import { WebSocketServer } from 'ws';
import { Message } from './types';
import { Controls } from './inputhandlers/ControlsHandler/types';
import express from 'express';
import path from 'path';

// Websocket for the main communication channel
const wss = new WebSocketServer({ port: 3000 });
wss.on('connection', (ws) => {
  const handleMessage = (message: Message): void => {
    switch (message.type) {
      case 'controls':
        handleControls(message as Controls);
        break;
    }
  };

  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data.toString()) as Message;
      handleMessage(message);
    } catch (e) {
      console.log(e);
      ws.send('What are you saying??');
    }
  });

  ws.send('I see you!');
});

// http server to serve the main page
const serverPort = 80;
const app = express();
app.use(express.static(path.join(__dirname, '../dist/static')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/static/index.html'));
});

app.listen(serverPort, () =>
  console.log(`Http server started on port ${serverPort}`)
);
