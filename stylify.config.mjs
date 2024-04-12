import { hooks, defineConfig } from '@stylify/bundler';

hooks.addListener('compiler:newMacroMatch', ({selectorProperties}) => {
	const pixelUnit = selectorProperties['font-size'];

	if (typeof pixelUnit === 'undefined' || !pixelUnit.endsWith('px')) {
		return;
	}

	const pixelFontSize = Number(pixelUnit.slice(0,-2));
	const remFontSize = pixelFontSize / 10;

	selectorProperties['font-size'] = `${remFontSize}rem`;
	selectorProperties['line-height'] = `${remFontSize * (pixelFontSize >= 28 ? 1.2 : 1.7)}rem`;
});

export default defineConfig({
	compiler: {
		ignoredAreas: [
			/\b((?:docs__aside|js-main-nav)-link)/,
			// Ignore code areas in docs
			/`{3}(?:\S+)?([\s\S]+)?`{3}/,
			/-{3}([\s\S]+?)-{3}/
		],
		// #0f172a
		variables: {
			blue1: '#01befe',
			blue2: '#f2fcff',
			blue3: '#0a101d',
			blue4: '#99a6b8',
			blue5: '#36425b',
			blue6: '#0d1424',

			orange1: '#fe9901',
			orange2: '#fff9f2',

			grey1: '#f8f9fa',
			grey2: '#222',
			grey3: '#e5e7eb',
			grey4: '#71717a',
			grey5: '#cecfd2',

			shadow1: 'rgb(99 99 99 / 20%) 0px 2px 8px 0px',
			shadow2: '0 2px 12px rgba(0, 0, 0, 0.25)',

			radius1: '4px',
			radius2: '8px',

			stickyHeaderMargin: '62px'
		},
		keyframes: {
			bounce: `
				from, 20%, 53%, 80%, to {
					transform: translate3d(0, 0, 0);
					animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
				}
				40%, 43% {
					transform: translate3d(0, -19px, 0);
					animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
				}
				70% {
					transform: translate3d(0, -10px, 0);
					animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
				}
				90% {
					transform: translate3d(0, -4px, 0);
				}
			`
		},
		customSelectors: {
			// Global
			html: 'color-scheme:dark',
			'*': 'box-sizing:border-box scroll-behavior:smooth scroll-margin-top:80px',
			'body': 'font-size:16px color:$grey5 background-color:$blue3',
			'img,video': 'max-width:100% object-fit:contain',
			textarea: 'outline:none',
			hr: 'border:0 height:1px background:lighten($blue3,40)',
			'::selection': 'color:#fff background:$blue1',
			'.prism-editor-wrapper *': 'font-size:14px line-height:24px',
			'li': `
				p {
					&:first-of-type { margin-top:0 }
					&:last-of-type { margin-bottom:0 }
				}
			`,
			'h1,h2,h3,h4,h5,h6': `
				color:#fefefe
				a { text-decoration:none }
			`,

			// Articles common
			code: 'background:#222e40 border-radius:4px padding:2px',
			'.cm-focused': 'outline:none!important',
			'pre': `
				background:$blue6!important margin:0 tab-size:2px
				padding:12px border-radius:8px
				border:1px_solid_$blue5 line-height:24px
				* { tab-size:2 line-height:24px }
				code {
					background:$blue6 line-height:1.4
					* { font-style:normal!important }
				}
			`,
			'article': `
				margin-top:0 font-size:16px word-break:break-word
				img { max-width:100% filter:brightness(.8)_contrast(1.2) }
				a { color:$blue1 }
				h1 { margin-top:0 margin-bottom:8px font-size:30px md:font-size:34px }
				h2 { font-size:26px margin-top:48px margin-bottom:0 }
				h3 { font-size:20px margin-top:32px margin-bottom:0 }
				h4 { margin-top:24px margin-bottom:0 }
				h1, h2, h3, h4, h5, h6 {
					cursor:pointer
					+ p { margin-top:0 }
					a { color:#fefefe }
					&:hover a { color:$blue1 }
				}
				pre { margin-top:0 }
				table {
					margin-bottom:24px min-width:800px
					td { word-break:keep-all border-bottom:1px_solid_#1e2431 padding:4px }
					th { text-align:left padding:4px }
					thead { position:sticky top:0 left:0 background-color:lighten($blue3,20) backdrop-filter:blur(12px) }
				}
				.note { margin:16px_0 }
				.note, note * { font-size:14px }
				.example-editor { margin:24px_0 }
			`,
			'.example-editor': `
				.preview-code pre { border:0 padding:16px_18px }
			`,
			'.interactive-preview + .interactive-preview, pre + pre': 'margin-top:32px md:margin-top:64px',
			'.hp__example-editor .example-editor': 'min-height:400px md:min-height:300px align-items:flex-start',
		},
		components: {
			'field__wrapper': 'position:relative display:flex',
			'field': `
				width:100% padding:12px border-radius:4px min-height:50px background:#fff color:$blue3 outline:none
				&:focus+label, &:not(:placeholder-shown)+label { top:0 background:#fff }
			`,
			'field__label': 'position:absolute top:50% transform:translateY(-50%) max-width:calc(100%_-_16px) will-change:top transition:top_0.2s,background_0.2s left:8px padding:0_4px font-weight:bold',
			'field-pair-rounded': `
				display:flex flex-direction:column sm:flex-direction:row justify-content:center align-items:stretch
				[type="submit"] { justify-content:center text-align:center font-size:20px sm:margin-left:-116px }
				[type="email"] { border-color:transparent flex:1 border-radius:50px padding:0_24px outline:none display:flex border-color:transparent width:100% tosm:margin-bottom:12px sm:width:calc(100%_-_131px) sm:padding-right:130px }
			`,
			'bounce-animation': `
				animation-name:bounce
				animation-duration:2s
				animation-timing-function:cubic-bezier(0.32,0.31,0.18,0.96)
				animation-delay:4s
				animation-iteration-count:3
				animation-fill-mode:forwards
			`,
			// Global
			container: `
				max-width:1280px margin-left:auto scroll-margin-top:50px margin-right:auto padding-left:8px padding-right:8px
				md:padding-left:12px md:padding-right:12px
				lg:padding-left:24px lg:padding-right:24px
				&-lg { max-width:1600px }
				&-xl { max-width:1920px }
			`,
			btn: `
				background-color:$blue1 white-space:nowrap line-height:1 transition:background-color_0.3s,_color_0.3s cursor:pointer color:#fff text-decoration:none font-weight:bold
				border-radius:$radius2 padding:8px_12px md:padding:12px_24px display:inline-flex align-items:center
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
			`,
			badge: `
				min-height:36px display:inline-flex align-items:center white-space:nowrap padding:4px font-size:14px
				color:#fff border:2px_solid_#f1f1f1 border-radius:4px text-decoration:none transition:background_0.3s hover:background:rgba(255,255,255,0.2)
			`,
			'link': 'color:$blue1 display:inline-flex align-items:center'
		}
	},
});
