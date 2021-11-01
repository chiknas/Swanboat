import fs from 'fs';
import { BoatStatus } from './types';

export const getBoatStatus = (): BoatStatus => {
  const celcius = parseInt(fs.readFileSync("/sys/class/thermal/thermal_zone0/temp").toString()) / 1000;
  return new BoatStatus(parseInt(celcius.toFixed()));
}