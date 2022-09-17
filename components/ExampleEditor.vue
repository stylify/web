<!--
stylify-components
	'code-editor__button': `
		border-bottom-width:2px
		border-bottom-style:solid
		padding:0__4px
		transition:border-color__.3s
		display:inline-flex
		cursor:pointer
	`
/stylify-components
-->
<template>
		<div
			:class="[
				layout === 'column' ? 'flex-direction:column-reverse' : 'md:flex-direction:row',
				`example-editor background:$blue6 border:1px__solid__$blue5 overflow:hidden border-radius:4px display:flex justify-content:space-between
				flex-direction:column-reverse justify-content:center
				`
			]"
		>
			<div
				:class="[
					layout === 'column' ? 'md:width:100%' : 'width:100% max-width:100% md:width:50% md:min-width:50%',
					`background:lighten($blue3,20) display:flex margin-bottom:24px md:margin-bottom:0 md:align-self:stretch`
				]"
			>
				<div class="width:100% display:flex flex-direction:column">
					<div class="padding:8px__12px__0__12px background:$blue6 font-weight:bold color:$blue4 white-space:nowrap overflow-x:auto">
						<a role="button" v-on:click="selectedTab = 'editor'" :class="[selectedTab === 'editor' ? 'border-color:$blue1 color:$blue1' : 'border-bottom-color:transparent color:#fff', 'code-editor__button']" >Editor</a>
						<a role="button" v-on:click="selectedTab = 'css'" :class="[selectedTab === 'css' ? 'border-color:$blue1 color:$blue1': 'border-bottom-color:transparent color:#fff', 'code-editor__button']" >CSS</a>
						<a v-if="showHtml" role="button" v-on:click="selectedTab = 'mangledHtml'" :class="[selectedTab === 'mangledHtml' ? 'border-color:$blue1 color:$blue1' : 'border-bottom-color:transparent color:#fff', 'code-editor__button']" >Mangled HTML</a>
					</div>
					<div class="display:flex flex:1">
						<code ref="codeSlot" hidden><slot></slot></code>
						<example-code-editor
							class="height:100% padding:12px__0 display:flex justify-content:center"
							v-show="selectedTab === 'editor'"
							:defaultCode="code"
							:withBorder=false
							@codeChanged="setPreviewCode"
						></example-code-editor>
						<example-code-editor
							class="content-visibility:auto height:100% padding:12px__0 display:flex justify-content:center"
							v-show="selectedTab === 'css'"
							:defaultCode="css.replace(previewElRegExp, '')"
							:withBorder=false
							lang="css"
							readonly
						/>
						<example-code-editor
							class="content-visibility:auto height:100% padding:12px__0 display:flex justify-content:center"
							v-if="showHtml"
							v-show="selectedTab === 'mangledHtml'"
							:defaultCode="mangledHtml"
							:withBorder=false
							readonly
						/>
					</div>
				</div>
			</div>
			<div
				:class="[
					layout === 'column' ? 'md:width:100% border-bottom:1px__solid__$blue5' : 'width:100% border-bottom:1px__solid__$blue5 md:border-bottom:0 md:border-left:1px__solid__$blue5 md:width:50% md:min-width:50%',
					`min-height:100px max-height:400px overflow:auto display:flex
					align-items:center justify-content:center padding:24px
					md:align-self:stretch
					`
				]"
			>
				<style v-html="previewCss">
					/* Code */
				</style>
				<div :class="[previewElClass, 'color:#fff']"><div v-html="previewCode"></div></div>
			</div>
		</div>
</template>

<script>
import { Compiler } from '@stylify/stylify/esm/index.js';

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
	data: () => ({
		code: '',
		css: '',
		mangledHtml: '',
		previewCode: '',
		selectedTab: 'editor'
	}),
	watch: {
		code: {
			immediate: true,
			handler(code) {
				this.setPreviewCode(code);
			}
		}
	},
	created() {
		this.code = '';
		this.previewElClass = 'stylify-preview-' + this._uid;
		this.previewElRegExp = new RegExp('\\.' + this.previewElClass, 'g');
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
			const editorCompiler = new Compiler();
			const previewCompiler = new Compiler();

			editorCompiler.dev = true;
			editorCompiler.mangleSelectors = true;

			const onPrepareCompilationResult = (compilationResult) => {
				compilationResult.onPrepareCssRecord = (cssRecord) => {
					cssRecord.scope = '.' + this.previewElClass + ' ';
				}
			};

			editorCompiler.onPrepareCompilationResult = onPrepareCompilationResult;
			previewCompiler.onPrepareCompilationResult = onPrepareCompilationResult;

			const compilationResult = editorCompiler.compile(code);

			this.css = compilationResult.generateCss();
			this.mangledHtml = editorCompiler.rewriteSelectors(code, compilationResult);

			this.previewCode = code;
			this.previewCss = previewCompiler.compile(code).generateCss();
		}
	},
};
</script>
