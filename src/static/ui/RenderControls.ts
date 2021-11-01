import { Controls } from '../../socketapi/inputhandlers/ControlsHandler/types';

export const renderControls = (controls: Controls): void => {
  document.getElementById(
    'throttle'
  ).style.background = `linear-gradient(to bottom, black ${
    100 - controls.throttle
  }%, green ${100 - controls.throttle}%)`;

  document.getElementById(
    'brake'
  ).style.background = `linear-gradient(to bottom, black ${
    100 - controls.brake
  }%, red ${100 - controls.brake}%)`;

  const nitra = document.getElementById('nitra');
  nitra.style.filter = controls.turbo
    ? 'brightness(0) saturate(100%) invert(39%) sepia(76%) saturate(1270%) hue-rotate(203deg) brightness(99%) contrast(98%)'
    : '';

  const steeringWheel = document.getElementById('steering-wheel');
  const steeringLock = controls.steering * 0.9;
  steeringWheel.style.transform = `rotate(${steeringLock}deg)`;
};
