import { Controls } from '../types';

const MAX_CONTROL_INPUT = 100;

const parseToPercentage = (input: number) => {
  return input > MAX_CONTROL_INPUT
    ? MAX_CONTROL_INPUT
    : input < -MAX_CONTROL_INPUT
    ? -MAX_CONTROL_INPUT
    : input;
};

export const limitInputs = (controls: Controls): Controls => {
  return {
    ...controls,
    throttle: parseToPercentage(controls.throttle),
    steering: parseToPercentage(controls.steering),
  };
};
