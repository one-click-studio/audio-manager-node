/// <reference types="node" />

declare interface AudioDevice {
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

export declare function getAllDevices(): { inputs: AudioDevice['name'][], outputs: AudioDevice['name'][] };
export declare function getDevice(name: AudioDevice['name']): AudioDevice;
export declare function start(name: AudioDevice['name'], path: string|null, callback: (err: Error, data: AudioFeedback[]) => void, gain?: number): SharedState;
export declare function stop(state: SharedState): void;
