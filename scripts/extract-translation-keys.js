import { writeFileSync } from 'fs';
import translations from '../src/translations/es.js';

const keysFileContent = Object.keys(translations).join('\n');

writeFileSync('./tmp/keys.txt', keysFileContent);
