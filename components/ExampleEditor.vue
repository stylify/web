<template>
		<div
			:class="[
				layout === 'column' ? 'flex-direction:column-reverse' : 'md:flex-direction:row',
				`example-editor display:flex justify-content:space-between
				flex-direction:column-reverse justify-content:center
				`
			]"
		>
			<div
				:class="[
					layout === 'column' ? 'md:width:100%' : 'width:100% max-width:100% md:width:50% md:min-width:50%',
					`background:#282d3f display:flex margin-bottom:24px md:margin-bottom:0 md:align-self:stretch`
				]"
			>
				<div class="width:100% display:flex flex-direction:column">
					<div class="padding:8px__12px__0__12px color:#fff white-space:nowrap overflow:auto">
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
							:defaultCode="css.replace(previewElRegExp, '')"
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
				:class="[
					layout === 'column' ? 'md:width:100%' : 'width:100% border-radius:$radius2__$radius2__0__0 md:border-radius:$radius2 md:width:50% md:min-width:50%',
					`min-height:100px max-height:400px overflow:auto display:flex
					align-items:center justify-content:center padding:24px
					md:align-self:stretch
					`
				]"
			>
				<style v-html="css">
					/* Code */
				</style>
				<div :class="previewElClass"><div v-html="previewCode"></div></div>
			</div>
		</div>
</template>

<script>
import { Compiler, nativePreset } from '@stylify/stylify';

nativePreset.compiler.dev = true;
nativePreset.compiler.mangleSelectors = true;

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
			const compiler = new Compiler(nativePreset.compiler);
			compiler.onPrepareCompilationResult = (compilationResult) => {
				compilationResult.onPrepareCssRecord = (cssRecord) => {
					cssRecord.scope = '.' + this.previewElClass + ' ';
				}
			};
			const compilationResult = compiler.compile(code);
			this.css = compilationResult.generateCss();
			this.mangledHtml = compiler.rewriteSelectors(code, compilationResult);
			this.previewCode = this.mangledHtml;
		}
	},
};
</script>
