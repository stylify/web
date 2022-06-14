<template>
	<div class="code-editor__wrapper min-height:48px display:flex width:100%">
		<code ref="codeSlot" style="display: none;"><slot></slot></code>
		<client-only placeholder="Loading...">
			<div class="max-height:400px overflow:auto width:100% border-radius:8px">
				<prism-editor
					v-model="code"
					:highlight="highlighter"
					:readonly="readonly"
					class="language-html"
				></prism-editor>
			</div>
		</client-only>
	</div>
</template>

<script>
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor';
import { highlightCode } from '~/services';
import 'vue-prism-editor/dist/prismeditor.min.css';
import '~/assets/scss/code-editor-theme.scss';

export default {
	props: {
		defaultCode: {
			type: String,
			default: ''
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		lang: {
			type: String,
			default: 'markup'
		}
	},
	components: {
		PrismEditor,
	},
	watch: {
		defaultCode: {
			immediate: true,
			handler(code) {
				this.code = code.replace('&amp;', '&')
					.replace(/\s+data-v-\S+=""/g, '')
					.replace(/&amp;/g, '&')
					.replace(/&lt;/g, '<')
					.replace(/&gt;/g, '>')
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
	data: () => ({
		code: ''
	}),
	methods: {
		highlighter(code) {
			this.$emit('codeChanged', code.trim());
			return highlightCode(code.trim(), this.lang); // languages.<insert language> to return html with markup
		},
	},
};
</script>
