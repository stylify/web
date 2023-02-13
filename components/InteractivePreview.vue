<!--
stylify-components
	'interactive-preview__button': 'margin-left:4px font-size:12px'
/stylify-components
-->
<template>
	<div>
		<div class="display:flex justify-content:space-between align-items:center flex-wrap:wrap white-space:nowrap">
			<div class="color:#fefefe font-weight:bold margin-right:24px white-space:nowrap margin-bottom:8px">{{ title }}</div>
			<div class="display:flex align-items:center margin-left:-4px overflow:auto margin-bottom:8px">
				<a role="button" @click="(event) => setTab(event, 'preview')" :class="`${selectedTab === 'preview' ? '' : 'btn--transparent'} btn interactive-preview__button`">Preview</a>
				<span v-for="codeType in codeTypes">
					<a role="button" v-if="hasCode(codeType)" @click="(event) => setTab(event, codeType.toLowerCase())" :class="`${selectedTab === codeType.toLowerCase() ? '' : 'btn--transparent'} btn interactive-preview__button`">
						{{codeType}}
					</a>
					<a role="button" v-if="!withoutComponents && hasCode(codeType)" @click="(event) => setTab(event, `${codeType.toLowerCase()}components`)" :class="`${selectedTab === `${codeType.toLowerCase()}components` ? '' : 'btn--transparent'} btn interactive-preview__button`">
						{{codeType}} (components)
					</a>
				</span>
			</div>
		</div>
		<div v-if="description" class="margin-top:4px" v-html="description"></div>
		<div v-if="hasCode('html')" class="margin-top:12px">
			<iframe v-show="selectedTab === 'preview'" :src="`/content/snippets/${htmlSnippet}.html?${iframeUid}`" class="width:100% overflow:auto border-radius:4px" :style="`min-height:${minHeight}px`" frameBorder="0"></iframe>
			<div v-for="codeType in codeTypes" v-show="selectedTab === codeType.toLowerCase()" :key="codeType" v-if="hasCode(codeType)">
				<example-code-editor readonly :defaultCode="codeSnippet" />
			</div>
			<div v-for="codeType in codeTypes" v-show="selectedTab === `${codeType.toLowerCase()}components`" :key="`${codeType}components`" v-if="hasCode(codeType)">
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
			default: '300',
		},
		withoutComponents: {
			type: Boolean,
			default: false,
		},
		title: String,
		description: String
	},
	data: () => ({
		iframeUid: Date.now().toString(36) + Math.random().toString(36).substring(2),
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

			const isComponentsExample = codeType.endsWith('components');
			const codeTypeSuffix = isComponentsExample ? '-components' : '';

			if (codeType.endsWith('components')) {
				codeType = codeType.replace(/components$/, '');
			}

			const snippetPath = this[`${codeType.toLowerCase()}Snippet`];
			const response = await fetch(`/content/snippets/${snippetPath}${codeTypeSuffix}.html`);
			let snippetDocument = await response.text();
			const snippet = snippetDocument.match(/<body><div class="content"><div class="content-wrapper">([\s\S]+)<\/div><\/div><\/body>/)[1].trim();
			this.codeSnippet = snippet;
			this.loadedCodeSnippets[`${codeType}${codeTypeSuffix}`] = snippet;
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
		setTab(event, name) {
			const el = event.target;
			el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
			this.selectedTab = name.toLowerCase();
		},
		hasCode(codeType) {
			return typeof this[`${codeType.toLowerCase()}Snippet`] !== 'undefined';
		}
	},
}
</script>
