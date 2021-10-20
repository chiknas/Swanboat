import { parseControls } from './utils/ControlsParser';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const controls = parseControls(message.toString());
    ws.send(controls.throttle);
  });

  ws.send('I see you!');
});
