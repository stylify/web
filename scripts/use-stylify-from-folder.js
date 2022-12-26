const { spawn } = require("child_process");
const fs = require('fs-extra');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const stylifyPackagesDir = path.join(rootDir, '..', '/stylify/packages');
const stylifyPackageDir = path.join(stylifyPackagesDir, 'stylify');
const bundlerPackageDir = path.join(stylifyPackagesDir, 'bundler');
const nuxtPackageDir = path.join(stylifyPackagesDir, 'nuxt');

const nodeModulesDir =  path.join(rootDir, 'node_modules/@stylify');
const bundlerNodeModuleDir = path.join(nodeModulesDir, 'bundler');
const nuxtNodeModuleDir = path.join(nodeModulesDir, 'nuxt-module');
const stylifyNodeModuleDir = path.join(nodeModulesDir, 'stylify');


console.log("Copying build files");
fs.copySync(path.join(stylifyPackageDir, 'lib'), path.join(stylifyNodeModuleDir, 'lib'));
fs.copySync(path.join(stylifyPackageDir, 'lib'), path.join(stylifyNodeModuleDir, 'lib'));

fs.copySync(path.join(bundlerPackageDir, 'lib'), path.join(bundlerNodeModuleDir, 'lib'));
fs.copySync(path.join(bundlerPackageDir, 'esm'), path.join(bundlerNodeModuleDir, 'esm'));

fs.copySync(path.join(nuxtPackageDir, 'lib'), path.join(nuxtNodeModuleDir, 'lib'));
fs.copySync(path.join(nuxtPackageDir, 'esm'), path.join(nuxtNodeModuleDir, 'esm'));
