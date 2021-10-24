import { PS4 } from './gamepads/PS4';

let gamepad: Gamepad;

const updateStatus = (controller: Gamepad): void => {
  const buttons = controller.buttons;
  const axis = controller.axes;

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    switch (PS4.buttons[i]) {
      case 'X':
        document.getElementById('X').innerHTML = `X: ${button.pressed}`;
      case 'O':
        document.getElementById('O').innerHTML = `O: ${button.pressed}`;
      case 'L2':
        document.getElementById('L2').innerHTML = `Freno: ${button.value}`;
      case 'R2':
        document.getElementById('R2').innerHTML = `Gazi: ${button.value}`;
    }

    const axi = axis[i];
    switch (PS4.axis[i]) {
      case 'LH':
        document.getElementById('LH').innerHTML = `LH: ${axi.toPrecision()}`;
      case 'LV':
        document.getElementById('LV').innerHTML = `LV: ${axi.toPrecision()}`;
    }
  }
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
