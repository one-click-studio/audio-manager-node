const os = require('os');

const getBinaryName = () => {
    const platform = os.platform();
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
        return `./build/${binaryName}`
    } else if (binaryName && typeof binaryName === 'object') {
        const arch = process.arch;
        const binaryNameArch = binaryName[arch];
        if (binaryNameArch) {
            return `./build/${binaryNameArch}`
        } else {
            console.error(`Unsupported architecture: ${arch}`);
            process.exit(1);
        }
    } else {
        console.error(`Unsupported platform: ${platform}`);
        process.exit(1);
    }
}

const binary = getBinaryName();
const nativeAddon = require(binary);

module.exports = nativeAddon;