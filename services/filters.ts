class Filters {
	public webalize(content: string): string {
		const charlist = [
			['Á','A'], ['Ä','A'], ['Č','C'], ['Ç','C'], ['Ď','D'], ['É','E'], ['Ě','E'],
			['Ë','E'], ['Í','I'], ['Ň','N'], ['Ó','O'], ['Ö','O'], ['Ř','R'], ['Š','S'],
			['Ť','T'], ['Ú','U'], ['Ů','U'], ['Ü','U'], ['Ý','Y'], ['Ž','Z'], ['á','a'],
			['ä','a'], ['č','c'], ['ç','c'], ['ď','d'], ['é','e'], ['ě','e'], ['ë','e'],
			['í','i'], ['ň','n'], ['ó','o'], ['ö','o'], ['ř','r'], ['š','s'], ['ť','t'],
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
}

export const filters = new Filters();
