module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended'
	],
	rules: {
		"vue/html-indent": ["error", {type: "tab"}],
		indent: [4, "tab"],
		"no-tabs": ["error", { "allowIndentationTabs": true }]
	},
	'overrides': [
		{
		'files': ['*.vue'],
			'rules': {
				'indent': 'off'
			}
		}
	]
}
