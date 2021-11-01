import { Controls } from './types';
import { limitInputs } from './utils/ControlsParser';

export const handleControls = (controls: Controls): void => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const limitedControls = limitInputs(controls);

  // process.stdout.clearLine(0);
  // process.stdout.cursorTo(0, 0);
  // process.stdout.write(`controls: ${JSON.stringify(limitedControls)}`);
};
