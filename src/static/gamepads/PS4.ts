import { Controls } from 'inputhandlers/ControlsHandler/types';
import { Controller } from './types';

export enum PS4Buttons {
  'X',
  'O',
  'SQ',
  'TR',
  'L1',
  'R1',
  'L2',
  'R2',
  'SELECT',
  'START',
  'L3',
  'R3',
  'UP',
  'DOWN',
  'LEFT',
  'RIGHT',
  'PS',
  'PAD',
}

export enum PS4Axis {
  'LH',
  'LV',
  'RH',
  'RV',
}

export const setControllerState = (controller: Gamepad): Controls => {
  const buttons = controller.buttons;
  const axis = controller.axes;
  return {
    type: 'controls',
    throttle: buttons[PS4Buttons.R2].value * 100,
    brake: buttons[PS4Buttons.L2].value * 100,
    steering: parseFloat(axis[PS4Axis.LH].toFixed(2)) * 100,
    turbo: buttons[PS4Buttons.X].pressed,
  };
};

export const PS4: Controller<PS4Buttons, PS4Axis> = {
  buttons: {
    0: PS4Buttons.X,
    1: PS4Buttons.O,
    2: PS4Buttons.SQ,
    3: PS4Buttons.TR,
    4: PS4Buttons.L1,
    5: PS4Buttons.R1,
    6: PS4Buttons.L2,
    7: PS4Buttons.R2,
    8: PS4Buttons.SELECT,
    9: PS4Buttons.START,
    10: PS4Buttons.L3,
    11: PS4Buttons.R3,
    12: PS4Buttons.UP,
    13: PS4Buttons.DOWN,
    14: PS4Buttons.LEFT,
    15: PS4Buttons.RIGHT,
    16: PS4Buttons.PS,
    17: PS4Buttons.PAD,
  },
  axis: {
    0: PS4Axis.LH,
    1: PS4Axis.LV,
    2: PS4Axis.RH,
    3: PS4Axis.RV,
  },
  setControls: (gamepad) => setControllerState(gamepad),
};
