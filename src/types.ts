export type MessageTypes = 'controls' | 'boatstatus';

export interface Message {
  readonly type: MessageTypes;
}
