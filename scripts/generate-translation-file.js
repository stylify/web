import { writeFileSync, readFileSync } from 'fs';
import translations from '../src/translations/es.js';

let newTranslationsFileContent = '';

const translatedFileContent = readFileSync('./tmp/translated.txt', 'utf-8');
const translatedFileToArray = translatedFileContent.split('\n');
const translationsKeys = Object.keys(translations);
const escapeQuote = (content) => content.replace(/'/g, "\\'");

for (let i = 0; i < translationsKeys.length; i++) {
	const translated = translatedFileToArray[i];
	const key = translationsKeys[i];
	newTranslationsFileContent += `\t'${escapeQuote(key)}': '${escapeQuote(translated)}',\n`
}

newTranslationsFileContent = `
export default {
	${newTranslationsFileContent}
}`.trim();

const selectedLang = '';

writeFileSync(`./src/translations/${selectedLang}.js`, newTranslationsFileContent);
