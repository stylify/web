const { spawn } = require("child_process");
const fs = require('fs-extra');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const stylifyPackagesDir = path.join(rootDir, '..', '/stylify/packages');
const stylifyPackageDir = path.join(stylifyPackagesDir, 'stylify');
const bundlerPackageDir = path.join(stylifyPackagesDir, 'bundler');
const astroPackageDir = path.join(stylifyPackagesDir, 'astro');

const nodeModulesDir =  path.join(rootDir, 'node_modules/@stylify');
const bundlerNodeModuleDir = path.join(nodeModulesDir, 'bundler');
const astroNodeModuleDir = path.join(nodeModulesDir, 'astro');
const stylifyNodeModuleDir = path.join(nodeModulesDir, 'stylify');


console.log("Copying build files");
fs.copySync(path.join(stylifyPackageDir, 'lib'), path.join(stylifyNodeModuleDir, 'lib'));
fs.copySync(path.join(stylifyPackageDir, 'esm'), path.join(stylifyNodeModuleDir, 'esm'));

fs.copySync(path.join(bundlerPackageDir, 'lib'), path.join(bundlerNodeModuleDir, 'lib'));
fs.copySync(path.join(bundlerPackageDir, 'esm'), path.join(bundlerNodeModuleDir, 'esm'));

fs.copySync(path.join(astroPackageDir, 'lib'), path.join(astroNodeModuleDir, 'lib'));
fs.copySync(path.join(astroPackageDir, 'esm'), path.join(astroNodeModuleDir, 'esm'));
