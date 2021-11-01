import { Message } from "../../../types";

export class BoatStatus implements Message {
  readonly type: 'boatstatus' = 'boatstatus';
  readonly chassisTemp: number;

  public constructor(chassisTemp: number) {
    this.chassisTemp = chassisTemp;
  }
}