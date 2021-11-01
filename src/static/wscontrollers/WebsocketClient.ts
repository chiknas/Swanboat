import { BoatStatus } from "../../socketapi/outputhandlers/boatstatus/types";
import { renderStatus } from "../ui/RenderStatus";
import { Message } from "types";

// Create WebSocket connection.
const port = 3000
const hostname = window.location?.hostname ?? '127.0.0.1';
export const socket = new WebSocket(`ws://${hostname}:${port}`);

const handleMessage = (message: Message) => {
  switch(message.type){
    case('boatstatus'):
      renderStatus(message as BoatStatus);
  }

}

// Listen for messages
socket.addEventListener('message', function (event) {
  try {
    const message = JSON.parse(event.data.toString()) as Message;
    handleMessage(message);
  } catch (e) {
    console.error(e);
  }
});
