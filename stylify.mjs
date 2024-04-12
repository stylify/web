import { Bundler } from '@stylify/bundler';
import path from 'path';

const isDev = process.argv[process.argv.length - 1] === '--w';

// http://stylifycss.com/docs/bundler#configuration
new Bundler({
	watchFiles: isDev,
	configFile: path.resolve('./stylify.config.mjs'),
	compiler: {
		mangleSelectors: !isDev,
	},
	verbose: true,
	bundles: [
		{
			files: ['./src/**/*.{astro,ts,js,tsx,mdx}'],
			outputFile: './src/assets/styles/stylify.css'
		}
	]
}).bundle();
