import { $content } from "@nuxt/content";
import { contentFunc } from "@nuxt/content/types/content";
import { FetchReturn, QueryBuilder } from "@nuxt/content/types/query-builder";

export class BlogRepository {

	private content: contentFunc;

	constructor(content: contentFunc) {
		this.content = content;
	}

	public findAll(): Promise<FetchReturn | FetchReturn[]> {
		return this.createQueryBuilder().fetch();
	};

	public async findOneBySlug(slug: string): Promise<Record<string, any> | null> {
		const post: FetchReturn | FetchReturn[] = await this.createQueryBuilder().where({ slug: slug}).fetch();

		if (post) {
			return Array.isArray(post) ? post[0] : post;
		}

		return null;
	}

	public createQueryBuilder(): QueryBuilder {
		return this.content('blog', {deep: true});
	}

}
