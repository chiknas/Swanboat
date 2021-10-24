import { Controls } from 'inputhandlers/ControlsHandler/types';
import { PS4 } from './gamepads/PS4';
import { renderControls } from './ui/RenderControls';
import { socket } from './wscontrollers/WebsocketClient';

let gamepad: Gamepad;
export let gamepadInputState: Controls = {
  type: 'controls',
  throttle: 0,
  brake: 0,
  steering: 0,
  turbo: false,
};

const updateStatus = (controller: Gamepad): void => {
  gamepadInputState = PS4.setControls(controller);
  renderControls(gamepadInputState);
  socket.send(JSON.stringify(gamepadInputState));
};

const gameLoop = () => {
  if (gamepad && navigator && navigator.getGamepads()) {
    // find the connected gamepad
    gamepad = Array.from(navigator.getGamepads()).find(
      (pad) => pad.id === gamepad.id
    );
    if (gamepad) {
      updateStatus(gamepad);
    }
    requestAnimationFrame(gameLoop);
  }
};
setInterval(gameLoop, 500);

window.addEventListener('gamepadconnected', (e: GamepadEvent) => {
  console.log('nikolas');
  if (!gamepad) {
    gamepad = e.gamepad;
  }
});
