import { defineConfig } from '@stylify/nuxt-module';

export default defineConfig({
	compiler: {
		ignoredAreas: [
			// Ignore code areas in docs
			/`{3}\S+([\s\S]+?)`{3}/
		],
		variables: {
			blue1: '#01befe',
			blue2: '#f2fcff',
			blue3: '#0a101d',
			blue4: '#99a6b8',
			blue5: '#36425b',
			blue6: '#1a2331',

			orange1: '#fe9901',
			orange2: '#fff9f2',

			grey1: '#f8f9fa',
			grey2: '#222',
			grey3: '#e5e7eb',
			grey4: '#71717a',

			shadow1: 'rgb(99 99 99 / 20%) 0px 2px 8px 0px',
			shadow2: '0 2px 12px rgba(0, 0, 0, 0.25)',

			radius1: '4px',
			radius2: '8px'
		},
		customSelectors: {
			// Global
			html: 'color-scheme:dark',
			'*': 'box-sizing:border-box scroll-behavior:smooth',
			'body': 'color:$blue4 background-color:$blue3 font-size:16px line-height:28px',
			'h1,h2,h3,h4,h5,h6': 'color:#fff',
			img: 'max-width:100% object-fit:contain',
			textarea: 'outline:none',
			hr: 'border:0 height:1px background:lighten($blue3,40)',
			'::selection': 'color:#fff background:$blue1',
			'.prism-editor-wrapper *': 'font-size:14px line-height:1',

			// Articles common
			'article': 'margin-top:0 font-size:16px line-height:28px word-break:break-word',
			'article h1': 'scroll-margin-top:50px cursor:pointer margin-top:0 font-size:30px line-height:40px md:font-size:34px line-height:54px margin-bottom:8px',
			'article h2': 'scroll-margin-top:50px cursor:pointer position:relative font-size:26px line-height:44px margin-top:48px margin-bottom:0',
			'article h3': 'scroll-margin-top:50px cursor:pointer position:relative font-size:20px line-height:36px margin-top:32px margin-bottom:0',
			'article h4': 'scroll-margin-top:50px cursor:pointer position:relative margin-top:24px margin-bottom:0',
			'article h1 + p, article h2 + p, article h3 + p, article h4 + p, article h5 + p': 'margin-top:0',
			'article pre': 'margin-top:0',
			'article a': 'color:$blue1',
			'article table': 'margin-bottom:24px min-width:800px',
			'article table td': 'word-break:keep-all border-bottom:1px_solid_#1e2431 padding:4px',
			'article table th': 'text-align:left padding:4px',
			'article table thead': 'position:sticky top:0 left:0 background-color:lighten($blue3,20) backdrop-filter:blur(12px)',
			'article .note': 'margin:16px_0',
			'article .note, article .note *': 'font-size:14px line-height:24px',
			'article .example-editor': 'margin:24px_0',
			'article * a[href^="#"][aria-hidden=true]': 'display:inline-block font-size:18px visibility:hidden padding:4px line-height:1 position:absolute top:50% text-decoration:none left:-24px transform:translateY(-50%)',
			'article h2:hover > a[href^="#"][aria-hidden=true], article h3:hover > a[href^="#"][aria-hidden=true], article h4:hover > a[href^="#"][aria-hidden=true]': 'visibility:visible',
			'article .nuxt-content-highlight': 'font-size:14px',
			'.nuxt-content .nuxt-content-highlight': 'position:relative margin-top:24px margin-bottom:24px',
			'.hp__example-editor .example-editor': 'min-height:220px align-items:flex-start',
			// Editor
			'.client-only-placeholder': 'display:flex align-self:center',
			// Docs
			'.docs__aside-link.nuxt-link-active': 'font-weight:bold color:$blue1 background-color:lighten($blue3,20)'
		},
		components: {
			// Global
			container: `
				max-width:1280px margin-left:auto margin-right:auto padding-left:8px padding-right:8px
				md:padding-left:12px md:padding-right:12px
				lg:padding-left:24px md:padding-right:24px
				&-lg { max-width:1920px }
			`,
			btn: `
				background-color:$blue1 white-space:nowrap line-height:1 transition:background-color_0.3s,_color_0.3s cursor:pointer color:#fff text-decoration:none font-weight:bold
				border-radius:$radius2 padding:12px_24px display:inline-flex align-items:center
				hover:background-color:darken($blue1,10)
			`,
			'btn--transparent': `
				&.btn {
					background:none hover:background-color:rgba(1,190,254,0.1)
				}
			`,
			'visually-hidden': `
				position:absolute!important
				overflow:hidden
				clip:rect(0_0_0_0)
				width:1px
				height:1px
				margin:-1px
				padding:0
				border:0
			`
		}
	},
});
