import { getBoatStatus } from "./boatstatus/BoatStatus";
import { OutputHandler } from "./types";

export const outputHandlers: OutputHandler[] = [
    {
        callback: getBoatStatus,
        interval: 1000,
    }
];