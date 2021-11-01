import { handleMessage } from './socketapi/inputhandlers/InputHandler';
import { WebSocketServer } from 'ws';
import { Message } from './types';
import express from 'express';
import path from 'path';
import { VideoStream } from './services/videostream/VideoStream';
import { outputHandlers } from './socketapi/outputhandlers/OutputHandler';
import { networkInterfaces } from 'os';

// Websocket for the main communication channel
const wss = new WebSocketServer({ port: 3000 });
wss.on('connection', (ws) => {

  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data.toString()) as Message;
      handleMessage(message);
    } catch (e) {
      console.log(e);
    }
  });

  // init stream to the client
  const initOutputStream = () => {
    outputHandlers.forEach(output => {
      setTimeout(() => {
        ws.send(JSON.stringify(output.callback()));
        output.callback();
      }, output.interval);
    });
    
  }
  initOutputStream();
});

// http server to serve the main page + the video stream
const serverPort = 80;
const app = express();
app.use(express.static(path.join(__dirname, '../dist/static')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/static/index.html'));
});

VideoStream.acceptConnections(app, {
  width: 1280,
  height: 720,
  fps: 16,
  encoding: 'JPEG',
  quality: 7 //lower is faster
}, '/stream.mjpg', false);

const clientIp = Object.values(networkInterfaces())
        .flat()
        .filter((item) => !item.internal && item.family === "IPv4")
        .find(Boolean).address;
app.listen(serverPort, () => {
  console.log(`Http server started on http://${clientIp}:${serverPort}`);
});
