import { Message } from "types";
import { handleControls } from "./ControlsHandler/ControlsHandler";
import { Controls } from "./ControlsHandler/types";

export const handleMessage = (message: Message): void => {
    switch (message.type) {
        case 'controls':
        handleControls(message as Controls);
        break;
    }
};