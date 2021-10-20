import { handleControls } from './inputhandlers/ControlsHandler/ControlsHandler';
import { WebSocketServer } from 'ws';
import { Message } from './types';
import { Controls } from './inputhandlers/ControlsHandler/types';

const wss = new WebSocketServer({ port: 3000 });

const handleMessage = (message: Message): void => {
  switch (message.type) {
    case 'controls':
      handleControls(message as Controls);
      break;
  }
};

wss.on('connection', (ws) => {
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
