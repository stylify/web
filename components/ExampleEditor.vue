<template>
		<div
			:class="[
				layout === 'column' ? 'flex-direction:column-reverse' : 'md:flex-direction:row md:margin-left:-8px lg:margin-left:-24px',
				`example-editor display:flex justify-content:space-between
				flex-direction:column-reverse justify-content:center
				`
			]"
		>
			<div
				:class="[
					layout === 'column' ? 'md:width:100% border-radius:0__0__$radius2__$radius2' : 'border-radius:$radius2 md:width:50% md:margin-left:8px lg:margin-left:24px',
					`background:#282a36 margin-bottom:24px box-shadow:$shadow1
					md:margin-bottom:0
					`
				]"
			>
				<div>
					<div class="padding:8px__12px__0__12px xl:padding:8px__24px__0__24px color:#fff">
						<a role="button" v-on:click="selectedTab = 'editor'" :class="[selectedTab === 'editor' ? '' : 'btn--transparent', 'btn color:#fff']" >Editor</a>
						<a role="button" v-on:click="selectedTab = 'css'" :class="[selectedTab === 'css' ? '' : 'btn--transparent', 'btn']" >CSS</a>
						<a v-if="showHtml" role="button" v-on:click="selectedTab = 'mangledHtml'" :class="[selectedTab === 'mangledHtml' ? '' : 'btn--transparent', 'btn']" >Mangled HTML</a>
						<a v-if="showConfig" role="button" v-on:click="selectedTab = 'config'" :class="[selectedTab === 'config' ? '' : 'btn--transparent', 'btn']" >Config</a>
					</div>
					<code ref="codeSlot" hidden><slot></slot></code>
					<code-editor
						class="min-height:100px padding:12px__0 display:flex justify-content:center"
						v-show="selectedTab === 'editor'"
						:defaultCode="code"
						@codeChanged="setPreviewCode"
						line-numbers
					></code-editor>
					<code-editor
						class="content-visibility:auto min-height:100px padding:12px__0 display:flex justify-content:center"
						v-show="selectedTab === 'css'"
						:defaultCode="css"
						lang="css"
						readonly
					/>
					<code-editor
						class="content-visibility:auto min-height:100px padding:12px__0 display:flex justify-content:center"
						v-if="showHtml"
						v-show="selectedTab === 'mangledHtml'"
						:defaultCode="mangledHtml"
						readonly
					/>
					<code-editor
						class="content-visibility:auto min-height:100px padding:12px__0"
						v-if="showConfig"
						v-show="selectedTab === 'config'"
						:defaultCode="configCode"
						lang="js"
						readonly
					/>
				</div>
			</div>
			<div
				v-html="previewCode"
				:class="[
					layout === 'column' ? 'md:width:100% border-radius:$radius2__$radius2__0__0' : 'border-radius:$radius2 md:width:50% md:margin-left:8px lg:margin-left:24px',
					`min-height:148px max-height:400px overflow:auto display:flex
					align-items:center justify-content:center box-shadow:$shadow1 padding:24px
					border-radius:$radius2
					`
				]"
			></div>
		</div>
</template>
<script>
import { Compiler, nativePreset } from '@stylify/stylify';

const defaultCode = `
<div class="
	font-weight:bold
	font-size:24px
	border-radius:4px
	padding:24px
	border:2px__dotted__#01befe
	transition:border-color__0.3s__ease-in-out
	hover:border-color:#bd0c65
">
	<!--
		Write selectors as css properties.
		Instead of space use __ (two underscores)
		https://stylify.dev/docs/get-started
	-->
	Edit me 🤩!
</div>
`.trim();

const configCode = `
import { Compiler, nativePreset } from '@stylify/stylify';

nativePreset.compiler.mangleSelectors = true;

const compiler = new Compiler(nativePreset.compiler);

const content = '...';

const compilationResult = compiler.compile(content);
const css = compilationResult.generateCss();
const mangledContent = compiler.rewriteSelectors(
	content, compilationResult
);
`.trim();

nativePreset.compiler.onPrepareCompilationResult = (compilationResult) => {
	compilationResult.onPrepareCssRecord = (cssRecord) => {
		cssRecord.scope = '.stylify-preview ';
	}
};
nativePreset.compiler.dev = true;
nativePreset.compiler.mangleSelectors = true;

const compiler = new Compiler(nativePreset.compiler);

export default {
	props: {
		layout: {
			type: String,
			default: 'row'
		},
		showConfig: {
			type: Boolean,
			default: false
		},
		showHtml: {
			type: Boolean,
			default: false
		}
	},
	data: () => ({
		code: '',
		configCode: configCode,
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
		this.code = defaultCode;
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
			const compilationResult = compiler.compile(code);
			this.css = compilationResult.generateCss().replace(/\.stylify-preview /g, '');
			this.mangledHtml = compiler.rewriteSelectors(code, compilationResult);
			this.previewCode = `<style>${this.css}</style><div class="stylify-preview"><div>${this.mangledHtml}</div></div>`;
		}
	},
};
</script>
