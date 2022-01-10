const fs = require('fs-extra');
const path = require('path');
const fastGlob = require('fast-glob');

const stylifyPackagesCopyDir = path.join(__dirname, '..', 'stylify-packages');
const stylifyPackagesLocalDevDir = path.join(__dirname, '..', '..', 'stylify', 'packages');

console.log('Removing "stylify-packages" dir.');
fs.removeSync(stylifyPackagesCopyDir);

console.log('Creating Stylify copy');
fs.copySync(stylifyPackagesLocalDevDir, stylifyPackagesCopyDir);

console.log('Rewriting package.json in new copy');
fastGlob.sync([path.join(__dirname, '..', 'stylify-packages', '*', 'package.json')]).forEach((packageJsonPath) => {
	const transformedContent = fs.readFileSync(packageJsonPath)
		.toString()
		.replace(/"@stylify\/(\S+)": "[^"]+"/g, (fullMatch, packageName) => {
			return `"@stylify/${packageName}": "file:../${packageName}"`;
		});
	fs.writeFileSync(packageJsonPath, transformedContent);
	console.log(`Package.json "${packageJsonPath}" rewritten.`);
});
