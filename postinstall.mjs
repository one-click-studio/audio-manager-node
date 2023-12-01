import { renameSync } from 'fs';
import { platform as _platform } from 'os';

// get current pwd
const pwd = process.chdir(__dirname);
console.log(`Current working directory: ${pwd}`);

const platform = _platform();
const binaries = {
    "linux": "index-linux.node",
    "darwin": {
        x64: "index-macos-x64.node",
        arm64: "index-macos-arm64.node"
    },
    "win32": "index-win.node"
};

const binaryName = binaries[platform];
if (binaryName && typeof binaryName === 'string') {
    renameSync(`./build/${binaryName}`, `./build/index.node`);
} else if (binaryName && typeof binaryName === 'object') {
    const arch = process.arch;
    const binaryNameArch = binaryName[arch];
    if (binaryNameArch) {
        renameSync(`./build/${binaryNameArch}`, `./build/index.node`);
    } else {
        console.error(`Unsupported architecture: ${arch}`);
        process.exit(1);
    }
} else {
    console.error(`Unsupported platform: ${platform}`);
    process.exit(1);
}