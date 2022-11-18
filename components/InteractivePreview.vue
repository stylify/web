<!--
stylify-components
	'interactive-preview__button': 'margin-left:4px font-size:12px'
/stylify-components
-->
<template>
	<div>
		<div class="display:flex justify-content:space-between align-items:center margin-bottom:12px">
			<div class="color:#fff font-weight:bold">{{ title }}</div>
			<div class="display:flex align-items:center margin-left:-4px">
				<a role="button" @click="setTab('preview')" :class="`${selectedTab === 'preview' ? '' : 'btn--transparent'} btn interactive-preview__button`">Preview</a>
				<a role="button" v-for="codeType in codeTypes" v-if="hasCode(codeType)" @click="setTab(codeType.toLowerCase())" :class="`${selectedTab === codeType.toLowerCase() ? '' : 'btn--transparent'} btn interactive-preview__button`">
					{{codeType}}
				</a>
			</div>
		</div>
		<div v-if="description">{{ description }}</div>
		<div v-if="hasCode('html')">
			<iframe v-show="selectedTab === 'preview'" :src="`/content/snippets/${htmlSnippet}.html`" class="width:100% overflow:auto border-radius:4px" :style="`min-height:${minHeight}px`" frameBorder="0"></iframe>
			<div v-for="codeType in codeTypes" v-show="selectedTab === codeType.toLowerCase()" v-if="hasCode(codeType)">
				<example-code-editor readonly :defaultCode="codeSnippet" />
			</div>
		</div>
	</div>
</template>

<script>
import { Compiler, hooks } from '@stylify/stylify/esm/index.js';

export default {
	props: {
		htmlSnippet: null,
		minHeight: {
			type: String,
			default: '250',
		},
		title: String,
		description: String
	},
	data: () => ({
		selectedTab: 'preview',
		codeTypes: ['HTML', 'Vue', 'React'],
		scopeClass: '',
		previewCss: '',
		previewCode: '',
		primaryColor: '',
		secondaryColor: '',
		tertiaryColor: '',
		loadedCodeSnippets: {},
		codeSnippet: ''
	}),
	created() {
		this.scopeClass = `interactive-preview-${this._uid}`;

		if (typeof document === 'undefined') {
			return;
		}

		document.addEventListener('colorPicker:changed', (event) => {
			const { primary, secondary, tertiary } = event.detail;
			this.primaryColor = primary;
			this.secondaryColor = secondary
			this.tertiaryColor = tertiary;
		});
	},
	watch: {
		async selectedTab(codeType) {
			if (codeType === 'preview') {
				return;
			}
			if (codeType in this.loadedCodeSnippets) {
				this.codeSnippet = this.loadedCodeSnippets[codeType];
				return;
			}

			const snippetPath = this[`${codeType.toLowerCase()}Snippet`]
			const response = await fetch(`/content/snippets/${snippetPath}.html`);
			let snippetDocument = await response.text();
			const snippet = snippetDocument.match(/<body>([\s\S]+)<\/body>/)[1];
			this.codeSnippet = snippet;
			this.loadedCodeSnippets[codeType] = snippet;
		}
	},
	methods: {
		setupPreview(code) {
			this.previewCode = code;
			const compiler = new Compiler({
				variables: {
					color: this.color
				}
			});
			hooks.addListener('compilationResult:configureCssRecord', ({cssRecord}) => {
				cssRecord.scope = `.${this.scopeClass} `;
			});
			const css = compiler.compile(code).generateCss();
			this.previewCss = css;
		},
		setTab(name) {
			this.selectedTab = name.toLowerCase();
		},
		hasCode(codeType) {
			return typeof this[`${codeType.toLowerCase()}Snippet`] !== 'undefined';
		}
	},
}
</script>
