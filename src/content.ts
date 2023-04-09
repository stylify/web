import { getLangFromSlug, removeLangFromSlug } from 'src/serverHelpers';
import { getCollection } from 'astro:content';
import { defaultLang } from '@projectConfig';

export const getStaticContent = async () => await getCollection('static');

export const isBlogPage = (slug: string) => slug.startsWith('blog');
export const isDocsPage = (slug: string) => slug.startsWith('docs');
export const isSnippetsPage = (slug: string) => slug.startsWith('snippets');

export const sortPostsByOrder = (pages) => pages.sort((a, b) => b - a);

export const queryStaticContent = async (options: {
	lang?: string,
	postsType?: 'blog' | 'snippets' | 'docs',
	limit?: number,
	sortBy?: 'blogPostNewest' | 'docsOrder',
	filter?: CallableFunction
} = {}) => {
	const { lang = defaultLang, postsType = null, limit = null, sortBy = null, filter = null} = options;
	const staticContent = await getStaticContent();

	let content = staticContent.filter((page) => {
		if (lang && getLangFromSlug(page.slug) !== lang
			|| postsType && !removeLangFromSlug(page.slug).startsWith(postsType)
		) {
			return false;
		}

		return filter ? filter(page) : true;
	});

	if (sortBy) {
		if (sortBy === 'blogPostNewest') {
			content = content.sort((a, b) => new Date(b.data.createdAt) - new Date(a.data.createdAt));
		} else if (sortBy === 'docsOrder') {
			content = content.sort((a, b) => b.data.order - a.data.order)
		}
	}

	if (limit) {
		content = content.splice(0, limit);
	}

	return content;
}
