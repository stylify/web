import rss from '@astrojs/rss';
import { getLangFromUrl, getStaticPathsForSupportedLanguages, useTranslations } from '@serverHelpers';
import { queryStaticContent } from '@content'

export const getStaticPaths = () => getStaticPathsForSupportedLanguages();

export async function get(context) {
	const lang = getLangFromUrl(context.url);
	const t = useTranslations(lang);
	const posts = await queryStaticContent({
		lang,
		postsType: 'blog',
		sortBy: 'blogPostNewest'
	});

	return rss({
		title: t('Stylify CSS Blog'),
		description: t('Stylify CSS News and Blog posts RSS feed'),
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.createdAt,
			description: post.data.annotation,
			link: `/${post.slug}`,
		})),
		customData: `<language>${lang}</language>`,
	});
}
