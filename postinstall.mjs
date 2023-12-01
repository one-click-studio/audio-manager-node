import { platform as _platform } from 'os';
import fs from 'node:fs'
import path from 'node:path'

// get current pwd
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(`Current working directory: ${__dirname}`);

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
    fs.renameSync(`./build/${binaryName}`, `./build/index.node`);
} else if (binaryName && typeof binaryName === 'object') {
    const arch = process.arch;
    const binaryNameArch = binaryName[arch];
    if (binaryNameArch) {
        fs.renameSync(`./build/${binaryNameArch}`, `./build/index.node`);
    } else {
        console.error(`Unsupported architecture: ${arch}`);
        process.exit(1);
    }
} else {
    console.error(`Unsupported platform: ${platform}`);
    process.exit(1);
}