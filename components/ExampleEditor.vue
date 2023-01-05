<!--
stylify-components
	'code-editor__button': `
		border-bottom-width:2px
		border-bottom-style:solid
		padding:0_4px
		transition:border-color_.3s
		display:inline-flex
		cursor:pointer
	`
/stylify-components
-->
<template>
		<div
			:class="[
				layout === 'column' ? 'flex-direction:column-reverse' : 'md:flex-direction:row',
				`example-editor background:$blue6 border:1px_solid_$blue5 overflow:hidden border-radius:4px display:flex justify-content:space-between
				flex-direction:column-reverse justify-content:center
				`
			]"
		>
			<div
				:class="[
					layout === 'column' ? 'md:width:100%' : 'width:100% max-width:100% md:width:50% md:min-width:50%',
					`background:lighten($blue3,20) display:flex md:align-self:stretch`
				]"
			>
				<div class="width:100% display:flex flex-direction:column">
					<div class="padding:8px_12px_0_12px background:$blue6 font-weight:bold color:$blue4 white-space:nowrap overflow-x:auto">
						<a role="button" v-on:click="selectedTab = 'editor'" :class="[selectedTab === 'editor' ? 'border-color:$blue1 color:$blue1' : 'border-bottom-color:transparent color:#fff', 'code-editor__button']" >Editor</a>
						<a role="button" v-on:click="selectedTab = 'devCss'" :class="[selectedTab === 'devCss' ? 'border-color:$blue1 color:$blue1': 'border-bottom-color:transparent color:#fff', 'code-editor__button']" >Dev CSS</a>
						<a role="button" v-on:click="selectedTab = 'productionCss'" :class="[selectedTab === 'productionCss' ? 'border-color:$blue1 color:$blue1': 'border-bottom-color:transparent color:#fff', 'code-editor__button']" >Production CSS</a>
						<a v-if="showHtml" role="button" v-on:click="selectedTab = 'productionHtml'" :class="[selectedTab === 'productionHtml' ? 'border-color:$blue1 color:$blue1' : 'border-bottom-color:transparent color:#fff', 'code-editor__button']" >Production HTML</a>
					</div>
					<div class="display:flex flex:1">
						<code ref="codeSlot" hidden><slot></slot></code>
						<example-code-editor
							class="height:100% padding:12px_0 display:flex justify-content:center"
							v-show="selectedTab === 'editor'"
							:defaultCode="code"
							:withBorder=false
							@codeChanged="setPreviewCode"
						></example-code-editor>
						<example-code-editor
							class="content-visibility:auto height:100% padding:12px_0 display:flex justify-content:center"
							v-show="selectedTab === 'devCss'"
							:defaultCode="devCss.replace(previewElRegExp, '')"
							:withBorder=false
							lang="css"
							readonly
						/>
						<example-code-editor
							class="content-visibility:auto height:100% padding:12px_0 display:flex justify-content:center"
							v-show="selectedTab === 'productionCss'"
							:defaultCode="productionCss.replace(previewElRegExp, '')"
							:withBorder=false
							lang="css"
							readonly
						/>
						<example-code-editor
							class="content-visibility:auto height:100% padding:12px_0 display:flex justify-content:center"
							v-if="showHtml"
							v-show="selectedTab === 'productionHtml'"
							:defaultCode="productionHtml"
							:withBorder=false
							readonly
						/>
					</div>
				</div>
			</div>
			<div
				:class="[
					layout === 'column' ? 'md:width:100% border-bottom:1px_solid_$blue5' : 'width:100% border-bottom:1px_solid_$blue5 md:border-bottom:0 md:border-left:1px_solid_$blue5 md:width:50% md:min-width:50%',
					`min-height:100px max-height:400px overflow:auto display:flex
					align-items:center justify-content:center padding:12px
					md:align-self:stretch
					`
				]"
			>
				<style v-html="previewCss">/* Code */</style>
				<div :class="[previewElClass, 'color:#fff']"><div v-html="previewCode"></div></div>
			</div>
		</div>
</template>

<script>
import { Compiler, hooks } from '@stylify/stylify/esm/index.js';

export default {
	props: {
		layout: {
			type: String,
			default: 'row'
		},
		showHtml: {
			type: Boolean,
			default: false
		}
	},
	data: () => {
		const previewClass = `stylify-preview-${Date.now().toString(36) + Math.random().toString(36).substring(2)}`;

		return {
			code: '',
			devCss: '',
			productionCss: '',
			previewElClass: previewClass,
			previewElRegExp: new RegExp('\\.' + previewClass, 'g'),
			productionHtml: '',
			previewCode: '',
			previewCss: '',
			selectedTab: 'editor'
		}
	},
	watch: {
		code: {
			immediate: true,
			handler(code) {
				this.setPreviewCode(code);
			}
		}
	},
	mounted() {
		if (typeof this.$refs.codeSlot !== 'undefined') {
			const codeSlotContent = this.$refs.codeSlot.innerHTML.trim();
			if (codeSlotContent.length) {
				this.code = codeSlotContent;
			}
		}
	},
	methods: {
		selectTab(tab) {
			this.selectedTab = tab;
		},
		setPreviewCode(code) {
			try {
				const previewCompiler = new Compiler({ dev: true });
				const editorCompiler = new Compiler({
					dev: true,
					mangleSelectors: true
				});

				hooks.addListener('compilationResult:configureCssRecord', ({cssRecord}) => {
					cssRecord.scope = `.${this.previewElClass} `;
				});

				const compilationResult = editorCompiler.compile(code);
				const previewCss = previewCompiler.compile(code).generateCss();

				this.devCss = previewCss;
				this.productionCss = compilationResult.generateCss();
				this.productionHtml = editorCompiler.rewriteSelectors(code);

				this.previewCode = code.replace(/\\([^\\]+)/g, (fullMatch, followingCharacter) => followingCharacter);
				this.previewCss = previewCompiler.compile(code).generateCss();
			} catch (error) {
			}
		}
	},
};
</script>
