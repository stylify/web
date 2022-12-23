<!--
stylify-customSelectors
	'.readonly-prism-editor .prism-editor-wrapper .prism-editor__container': 'min-width:100%'
/stylify-customSelectors
-->
<template>
	<div :class="[withBorder ? 'border:1px_solid_$blue5 padding:4px border-radius:4px' : '', 'code-editor__wrapper min-height:48px display:flex width:100%']">
		<code ref="codeSlot" style="display: none;"><slot></slot></code>
		<client-only placeholder="Loading...">
			<div :class="[
				readonly ? 'readonly-prism-editor' : '',
				'max-height:400px overflow:auto width:100%'
			]">
				<prism-editor
					v-model="code"
					:highlight="highlighter"
					:readonly="readonly"
					:class="`language-html ${readonly ? '[textarea]{display:none!important}' : ''}`"
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
import '~/assets/code-editor-theme.css';

export default {
	props: {
		withBorder: {
			type: Boolean,
			default: true
		},
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
				this.code = this.prepareCode(code);
			}
		}
	},
	mounted() {
		if (typeof this.$refs.codeSlot !== 'undefined') {
			const codeSlotContent = this.$refs.codeSlot.innerHTML.trim();

			if (codeSlotContent.length) {
				this.code = this.prepareCode(codeSlotContent);
			}
		}
	},
	data: () => ({
		code: ''
	}),
	methods: {
		prepareCode(code) {
			return code.replace('&amp;', '&')
				.replace(/\s+data-v-\S+=""/g, '')
				.replace(/&amp;/g, '&')
				.replace(/&lt;/g, '<')
				.replace(/&gt;/g, '>')
				.replace(/\n<div data-netlify-deploy(.|\s)+/, '');
		},
		highlighter(code) {
			this.$emit('codeChanged', code);
			return highlightCode(code, this.lang); // languages.<insert language> to return html with markup
		},
	},
};
</script>
