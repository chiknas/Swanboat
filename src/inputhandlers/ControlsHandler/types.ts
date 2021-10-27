import { Message } from '../../types';

export class Controls implements Message {
  readonly type: 'controls';
  readonly throttle: number;
  readonly brake: number;
  readonly steering: number;
  readonly turbo: boolean;
}
