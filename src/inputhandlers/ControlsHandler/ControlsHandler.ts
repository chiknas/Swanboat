import { Controls } from './types';
import { limitInputs } from './utils/ControlsParser';

export const handleControls = (controls: Controls): void => {
  const limitedControls = limitInputs(controls);
  console.log('controls: ' + limitedControls.steering);
};
