import { Controls } from '../../socketapi/inputhandlers/ControlsHandler/types';

export type InputMap<T> = {
  [key: number]: T;
};

export interface Controller<B, A> {
  buttons: InputMap<B>;
  axis: InputMap<A>;
  setControls: (gamepad: Gamepad) => Controls;
}
