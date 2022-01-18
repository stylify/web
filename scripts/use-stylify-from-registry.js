const { Console } = require('console');
const { spawn } = require("child_process");
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

console.log("Reading package.json");
const packageJsonDir = path.join(rootDir, 'package.json');
let projectPackageJsonContent = fs.readFileSync(packageJsonDir).toString();
console.log("Rewriting package.json");
projectPackageJsonContent = projectPackageJsonContent.replace(/"@stylify\/(\S+)": "[^"]+"/g, (fullMatch, packageName) => {
	return `"@stylify/${packageName}": "^0.0"`;
});
fs.writeFileSync(packageJsonDir, projectPackageJsonContent);

const yarnLockFilePath = path.join(rootDir, 'yarn.lock');
if (fs.existsSync(yarnLockFilePath)) {
	console.log("Removing yarn.lock");
	fs.unlinkSync(path.join(rootDir, 'yarn.lock'));
}

console.log("Removing node modules/@stylify");
fs.rmdirSync(path.join(rootDir, 'node_modules'), { recursive: true });

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
