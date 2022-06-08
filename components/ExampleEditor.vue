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
					layout === 'column' ? 'md:width:100% border-radius:0__0__$radius2__$radius2' : 'max-width:100% border-radius:0__0__$radius2__$radius2 md:border-radius:$radius2 md:width:50% md:min-width:50% md:margin-left:8px lg:margin-left:24px',
					`background:#282d3f display:flex margin-bottom:24px box-shadow:$shadow1
					md:margin-bottom:0 md:align-self:stretch
					`
				]"
			>
				<div class="width:100% display:flex flex-direction:column">
					<div class="padding:8px__12px__0__12px xl:padding:8px__24px__0__24px color:#fff white-space:nowrap overflow:auto">
						<a role="button" v-on:click="selectedTab = 'editor'" :class="[selectedTab === 'editor' ? '' : 'btn--transparent', 'btn color:#fff']" >Editor</a>
						<a role="button" v-on:click="selectedTab = 'css'" :class="[selectedTab === 'css' ? '' : 'btn--transparent', 'btn']" >CSS</a>
						<a v-if="showHtml" role="button" v-on:click="selectedTab = 'mangledHtml'" :class="[selectedTab === 'mangledHtml' ? '' : 'btn--transparent', 'btn']" >Mangled HTML</a>
					</div>
					<div class="display:flex flex:1">
						<code ref="codeSlot" hidden><slot></slot></code>
						<example-code-editor
							class="height:100% padding:12px__0 display:flex justify-content:center"
							v-show="selectedTab === 'editor'"
							:defaultCode="code"
							@codeChanged="setPreviewCode"
						></example-code-editor>
						<example-code-editor
							class="content-visibility:auto height:100% padding:12px__0 display:flex justify-content:center"
							v-show="selectedTab === 'css'"
							:defaultCode="css"
							lang="css"
							readonly
						/>
						<example-code-editor
							class="content-visibility:auto height:100% padding:12px__0 display:flex justify-content:center"
							v-if="showHtml"
							v-show="selectedTab === 'mangledHtml'"
							:defaultCode="mangledHtml"
							readonly
						/>
					</div>
				</div>
			</div>
			<div
				v-html="previewCode"
				:class="[
					layout === 'column' ? 'md:width:100% border-radius:$radius2__$radius2__0__0' : 'width:100% border-radius:$radius2__$radius2__0__0 md:border-radius:$radius2 md:width:50% md:min-width:50% md:margin-left:8px lg:margin-left:24px',
					`min-height:100px max-height:400px overflow:auto display:flex
					align-items:center justify-content:center box-shadow:$shadow1 padding:24px
					lg:border-radius:$radius2
					md:align-self:stretch
					`
				]"
			></div>
		</div>
</template>

<script>
import { Compiler, nativePreset } from '@stylify/stylify';

const defaultCode = `
<!-- Copy this script and try Stylify in the browser. -->
<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.native.min.js"><\/script>

<strong class="
	font-size:24px
	border-radius:4px
	padding:24px
	border:2px__dotted__#01befe
	hover:border-color:#bd0c65
">
	<!--
		Write selectors as css properties.
		Use __ (two underscores) instead of a space
		https://stylify.dev/docs/get-started
	-->
	Edit me 🤩!
</strong>
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
			const previewCode = this.mangledHtml.replace('<script src="https://cdn.jsdelivr.net/npm/@stylify/stylify@latest/dist/stylify.native.min.js"><\/script>', '');
			this.previewCode = `<style>${this.css}</style><div class="stylify-preview"><div>${previewCode}</div></div>`;
		}
	},
};
</script>
