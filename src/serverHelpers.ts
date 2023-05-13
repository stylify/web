import { defaultLang, supportedLanguages } from './config';
import type { CollectionEntry } from 'astro:content';
import spanishTranslations from './translations/es.js';
import chineseTranslations from './translations/zh.js';
import { resolve } from 'path';
import fs from 'fs';
import { Compiler } from '@stylify/stylify';

const translations = {
	'es': spanishTranslations,
	'zh': chineseTranslations
}

export const webalize = (content: string): string => {
	const charlist = [
		['Á','A'], ['Ä','A'], ['Č','C'], ['Ç','C'], ['Ď','D'], ['É','E'], ['Ě','E'],
		['Ë','E'], ['Í','I'], ['Ň','N'], ['Ó','O'], ['Ö','O'], ['Ř','R'], ['Š','S'],
		['Ť','T'], ['Ú','U'], ['Ů','U'], ['Ü','U'], ['Ý','Y'], ['Ž','Z'], ['á','a'],
		['ä','a'], ['č','c'], ['ç','c'], ['ď','d'], ['é','e'], ['ě','e'], ['ë','e'],
		['í','i'], ['ň','n'], ['Ň','N'], ['ó','o'], ['ö','o'], ['ř','r'], ['š','s'], ['ť','t'],
		['ú','u'], ['ů','u'], ['ü','u'], ['ý','y'], ['ž','z']
	];

	for (const i in charlist) {
		var re = new RegExp(charlist[i][0],'g');
		content = content.replace(re, charlist[i][1]);
	}

	content = content.replace(/[^a-z0-9]/ig, '-');
	content = content.replace(/\-+/g, '-');

	if (content[0] == '-') {
		content = content.substring(1, content.length);
	}

	if (content[content.length - 1] == '-') {
		content = content.substring(0, content.length - 1);
	}

	return content.toLowerCase();
}

let componentsPreviewIframeCss = '';
const snippetsDir = resolve('./src/snippets');

export const getComponentPreviewData = async (previewUrl: string, importOnly = false) => {
	const snippetsUrlPart = snippetsDir;
	const fileContent = fs.readFileSync(`${snippetsUrlPart}/${previewUrl}`, 'utf-8');

	/* stylify-ignore */
	const additionalCss = fileContent.match(/<style>([\S\s\n]+)<\/style>/) ?? null;
	const previewHtml = fileContent.replace(/^[\S\s\n]+<div class="content-wrapper">/g, '')
		.replace(/<\/div><\/div><\/body><\/html>/g, '').trim();
	let previewCss = '';
	/* /stylify-ignore */

	if (!importOnly) {
		if (componentsPreviewIframeCss === '') {
			componentsPreviewIframeCss =fs.readFileSync(`${snippetsUrlPart}/components/iframe.css`, 'utf-8');
		}

		previewCss = new Compiler().compile(previewHtml).generateCss();
	}

	return {
		previewHtml,
		srdoc: importOnly ? '' : `
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<style>${componentsPreviewIframeCss}</style>
					<style>${additionalCss ? additionalCss[1] : ''}</style>
					<style>${previewCss}</style>
				</head>
				<body><div class="content"><div class="content-wrapper">${previewHtml}</div></div></body>
			</html>
		`.trim()
	}
}

export const getStaticPathsForSupportedLanguages = () => Object.keys(supportedLanguages).map((lang) => ({params: { lang } }))

export function formatDateTime(dateString: string, lang = 'cs'): string {
	const localizedDate = new Date(dateString).toLocaleString(lang, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	});

	return localizedDate;
}

export const removeLangFromSlug = (slug: string) => {
	const startsWithSlash = slug.startsWith('/');
	return slug.replace(
		new RegExp(`^${startsWithSlash ? '/' : ''}(?:${Object.keys(supportedLanguages).join('|')})${startsWithSlash ? '' : '/'}`), ''
	);
}

export const getLangFromSlug = (slug: CollectionEntry<'static'>['slug']) => {
	const lang = slug.replace(/^\/+/, '').split('/')[0];
	return Object.keys(supportedLanguages).includes(lang) ? lang : defaultLang;
};

export const getLangFromUrl = (url: URL) => getLangFromSlug(url.pathname);

export const getLocalizedRoute = (slug: string, lang) => {
	const startsWithSlash = slug.startsWith('/');

	if (slug === '/' && lang === 'en') {
		return slug;
	}

	slug = removeLangFromSlug(slug);
	slug = slug.replace(/^\//, '');

	const generatedSlug = `${startsWithSlash ? '/' : ''}${lang}/${slug}`.replace(/\/+$/, '');
	return generatedSlug;
};

export const useTranslations = (lang) => {
	return function t (text, data = {}) {

		let translated = lang === defaultLang ? text : translations[lang][text] ?? null;

		if (translated === null) {
			throw new Error(`Missing translation "${text}" for "${lang}".`)
		}

		for (const [key, replacement] of Object.entries(data)) {
			translated = translated.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), replacement);
		}

		return translated;
	}
}
