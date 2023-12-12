/// <reference types="node" />

declare interface AudioDevice {
    name: string;
    inputChannels: number;
    outputChannels: number;
    host: string;
}

declare interface Device {
    name: string;
    inputChannels: number;
    outputChannels: number;
}

declare interface AudioFeedback {
    speakingProb: number;
    volume: number;
    channelId: number;
}

type SharedState = unknown;

export declare function getAllDevices(): AudioDevice[];
export declare function getDevice(name: AudioDevice['name']): Device;
export declare function start(name: AudioDevice['name'], path: string|null, callback: (err: Error, data: AudioFeedback[]) => void): SharedState;
export declare function stop(state: SharedState): void;
