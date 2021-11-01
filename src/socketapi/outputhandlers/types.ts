import { Message } from "types";

export interface OutputHandler {
    // a function that returns a message object for a client
    callback: () => Message,
    // how many ms should pass before each call
    interval: number,
}