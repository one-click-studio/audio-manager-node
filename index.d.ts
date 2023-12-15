/// <reference types="node" />

// enum Host API for rust CPAL
export enum HostApi {
    ALSA = "ALSA",
    COREAUDIO = "CoreAudio",
    JACK = "JACK",
    PULSEAUDIO = "PulseAudio",
    ASIO = "ASIO",
    WASAPI = "WASAPI",
}

declare interface AudioDevice {
    name: string;
    inputChannels: number;
    outputChannels: number;
    host: HostApi;
    error?: string;
}

declare interface AudioFeedback {
    speakingProb: number;
    volume: number;
    channelId: number;
}

type SharedState = unknown;


export declare function getAllDevices(): AudioDevice[];
export declare function getDevice(name: AudioDevice['name'], host: HostApi|undefined): AudioDevice;
export declare function start(name: AudioDevice['name'], host: HostApi|undefined, path: string|null, callback: (err: Error, data: AudioFeedback[]) => void, gain?: number): SharedState;
export declare function stop(state: SharedState): void;
