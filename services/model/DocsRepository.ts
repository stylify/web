import { $content } from "@nuxt/content";
import { contentFunc } from "@nuxt/content/types/content";
import { FetchReturn, QueryBuilder } from "@nuxt/content/types/query-builder";

export type SortByOptionsType = [string, 'asc' | 'desc'];

export interface QueryOptionalOptionsInterface {
	only?: string[],
	sortBy?: SortByOptionsType[],
}

export interface FindBySectionInterface extends QueryOptionalOptionsInterface {
	section: string
}

export class DocsRepository {

	private content: contentFunc;

	constructor(content: contentFunc) {
		this.content = content;
	}

	public findBySection(options: Record<string, any>):  Promise<FetchReturn | FetchReturn[]> {
		let queryBuilder = this.createQueryBuilder().where({ section: options.section});

		if ('only' in options) {
			queryBuilder.only(options.only)
		}

		const sortByOptions: SortByOptionsType[] = [
			['order', 'asc'],
			...options.sortBy || []
		];

		for (const sortByOption of sortByOptions) {
			queryBuilder.sortBy(...sortByOption);
		}

		return queryBuilder.fetch();
	}

	private createQueryBuilder(): QueryBuilder {
		return this.content('docs', {deep: true});
	}

}
