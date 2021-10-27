import { BoatStatus } from "outputhandlers/boatstatus/types";

export const renderStatus = (boatStatus: BoatStatus) => {
  const chassisTemp = document.getElementById('chassis-temp');
  chassisTemp.innerHTML = `${boatStatus.chassisTemp}℃`;
}