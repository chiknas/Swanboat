// Type definitions for raspberrypi_node_camera_web_streamer 1.1
// Project: https://www.npmjs.com/package/raspberrypi-node-camera-web-streamer
// Definitions by: Nikos Kyknas <https://github.com/chiknas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Buffer } from 'node:buffer';
import { Express } from 'express-serve-static-core';

export interface CameraOptions {
    width: number;
    height: number;
    fps: number;
    encoding: string;
    quality: number;
}

export interface Stream {
    /**
     * Creates an API endpoint that serves an .mjpg (or the specified type) Raspberry Pi Camera stream.
     * @param expressApp the express app object to be used to create a new endpoint.
     * @param cameraOptions Raspberry Pi Camera settings.
     * @param resourcePath the api path to access the stream. defaults to /stream.mjpg.
     * @param isVerbose excess loggin on the console of the frames being delivered to the client.
     */
    acceptConnections(
        expressApp: Express,
        cameraOptions?: CameraOptions,
        resourcePath?: string,
        isVerbose?: boolean,
    ): void;
}
