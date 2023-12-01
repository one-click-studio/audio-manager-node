# audio-manager-node

## API Documentation
### Overview
This module provides an interface to manage audio devices and processes. It allows you to list audio devices, get detailed information about specific devices, start audio processing with event handling, and stop the processing.

### API Functions
*getAllDevices()*
- **Description:** Retrieves a list of all audio input and output devices.
- **Returns:** An object containing two arrays, inputs and outputs, each containing the names of the respective audio devices.

*getDevice(deviceName)*
- **Parameters:**
  - **deviceName (String):** The name of the device to retrieve information about.
- **Description:** Gets detailed information about a specific audio device.
- **Returns:** An object containing information about the specified device, such as name, input channels, and output channels. If no device is found, returns an object with an error message.

*start(deviceName, recordPath, callback)*
- **Parameters:**
  - **deviceName (String):** The name of the device to start processing.
  - **recordPath (String, optional):** Path to save the recording. If omitted, no recording is saved.
  - **callback (Function):** A callback function that is called with audio channel event data.
- **Description:** Starts audio processing on the specified device. If recordPath is provided, it starts recording the audio. The callback is called with updates about audio channel states.
- **Returns:** A reference to the shared state object, which can be used to stop the process later.

*stop(sharedState)*
- **Parameters:**
  - **sharedState (Object):** The shared state object returned by the start function.
- **Description:** Stops the audio processing and recording started by the start function.
- **Returns:** undefined.


### Usage
Here's an example of how to use the module:

```javascript
const audioModule = require('audio-manager-node');

// List all devices
audioModule.getAllDevices().then(devices => {
    console.log(devices);
});

// Get details about a specific device
audioModule.getDevice('Device Name').then(deviceInfo => {
    console.log(deviceInfo);
});

// Start processing
const sharedState = audioModule.start('Device Name', 'path/to/record', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

// Stop processing
audioModule.stop(sharedState);
```

### Notes
- Ensure that the device names used in getDevice and start match exactly with the names returned by getAllDevices.
- The callback provided to start will receive real-time updates about the audio channels.
