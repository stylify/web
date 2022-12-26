const { Console } = require('console');
const { spawn } = require("child_process");
const fs = require('fs-extra');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const nodeModulesDir = path.join(rootDir, 'node_modules');

console.log("Removing node modules");
fs.rmdirSync(nodeModulesDir, { recursive: true, force: true });

console.log("Installing packages");
const installation = spawn("yarn", ["install"]);

installation.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

installation.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
});

installation.on('exit', (code) => {
  console.log(`child process exited with code ${code}`);
});
