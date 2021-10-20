import { Controls } from '../types';

const MAX_CONTROL_INPUT = 100;

const defaultControls: Controls = {
  throttle: 0,
  steering: 0,
};

const parseToPercentage = (input: number) => {
  return input > MAX_CONTROL_INPUT
    ? MAX_CONTROL_INPUT
    : input < -MAX_CONTROL_INPUT
    ? -MAX_CONTROL_INPUT
    : input;
};

const limitInputs = (controls: Controls): Controls => {
  return Object.keys(controls).reduce(
    (parsedControls, key: keyof Controls) => ({
      ...parsedControls,
      ...{ [key]: parseToPercentage(controls[key]) },
    }),
    controls
  );
};

const isControl = (object: object): object is Controls => {
  return (object as Controls).throttle !== undefined;
};

export const parseControls = (value: string): Controls => {
  const messageObject = JSON.parse(value);
  return isControl(messageObject)
    ? limitInputs(messageObject)
    : defaultControls;
};
