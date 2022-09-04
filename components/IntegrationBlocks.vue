<!--
stylify-components
	'integration-block__image-wrapper': `max-height:60px max-width:100%`,
	'integration-block': `
		display:flex color:$grey3 flex-direction:row justify-content:center align-items:center
		border-radius:$radius2 background:lighten($blue3,20)
		width:calc(100%__*__1/3__-__12px) margin-bottom:12px margin-left:12px padding:12px
		text-decoration:none min-height:100px
		sm:width:calc(100%__*__1/3__-__12px)
		md:width:calc(100%__*__1/4__-__24px) md:margin-bottom:24px md:margin-left:24px
		lg:padding:18px lg:width:calc(100%__*__1/5__-__24px) lg:width:calc(100%__*__1/6__-__24px)
	`
/stylify-components
-->
<template>
	<div
		class="display:flex flex-direction:row flex-wrap:wrap margin-left:-12px md:margin-left:-24px"
	>
		<nuxt-link to="/docs/integrations/browser" class="integration-block">
			<span class="font-weight:bold word-break:keep-all sm:font-size:18px md:font-size:24px"
				>Browser</span
			>
		</nuxt-link>
		<nuxt-link
			to="/docs/integrations/nodejs"
			aria-label="Node.js"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					src="/images/brands/nodejs.svg"
					alt=""
					height="60"
					width="90"
					decoding="async"
					loading="lazy"
					class="width:auto height:60px"
				/>
			</div>
		</nuxt-link>
		<nuxt-link
			to="/docs/integrations/nuxtjs"
			aria-label="Nuxt"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					src="/images/brands/nuxtjs.svg"
					alt=""
					height="1"
					width="2"
					decoding="async"
					loading="lazy"
					class="width:auto height:60px"
				/>
			</div>
		</nuxt-link>
		<nuxt-link
			to="/docs/integrations/nextjs"
			aria-label="Nuxt"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					src="/images/brands/nextjs.svg"
					alt=""
					height="1"
					width="2"
					decoding="async"
					loading="lazy"
					class="width:auto height:60px"
				/>
			</div>
		</nuxt-link>
		<nuxt-link
			to="/docs/integrations/reactjs"
			aria-label="Nuxt"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					src="/images/brands/react.png"
					alt=""
					height="1"
					width="2"
					decoding="async"
					loading="lazy"
					class="width:auto height:60px"
				/>
			</div>
		</nuxt-link>
		<nuxt-link
			to="/docs/integrations/svelte"
			aria-label="Svelte"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					src="/images/brands/svelte.svg"
					alt=""
					height="1"
					width="2"
					decoding="async"
					loading="lazy"
					class="width:auto height:60px"
				/>
			</div>
		</nuxt-link>
		<nuxt-link
			to="/docs/integrations/webpack"
			aria-label="Webpack"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					src="/images/brands/webpack.svg"
					alt=""
					height="1"
					width="2"
					decoding="async"
					loading="lazy"
					class="width:auto height:60px"
				/>
			</div>
		</nuxt-link>
		<nuxt-link
			to="/docs/integrations/vitejs"
			aria-label="Vite"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					src="/images/brands/vitejs.svg"
					alt=""
					height="1"
					width="2"
					decoding="async"
					loading="lazy"
					class="width:auto height:60px"
				/>
			</div>
		</nuxt-link>
		<nuxt-link
			to="/docs/integrations/rollupjs"
			aria-label="Rollup"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					src="/images/brands/rollupjs.svg"
					alt=""
					height="1"
					width="2"
					decoding="async"
					loading="lazy"
					class="width:auto height:60px"
				/>
			</div>
		</nuxt-link>
		<nuxt-link
			to="/docs/integrations/symfony"
			aria-label="Symfony"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					src="/images/brands/symfony.png"
					alt=""
					height="1"
					width="2"
					decoding="async"
					loading="lazy"
					class="width:100% height:60px object-fit:contain"
				/>
			</div>
		</nuxt-link>
		<nuxt-link
			to="/docs/integrations/nette"
			aria-label="Nette"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					src="/images/brands/nette.png"
					alt=""
					height="1"
					width="2"
					decoding="async"
					loading="lazy"
					class="width:auto height:60px"
				/>
			</div>
		</nuxt-link>
		<nuxt-link
			to="/docs/integrations/laravel"
			aria-label="Laravel"
			class="integration-block"
		>
			<div class="integration-block__image-wrapper">
				<img
					src="/images/brands/laravel.svg"
					alt=""
					height="1"
					width="2"
					decoding="async"
					loading="lazy"
					class="width:auto height:60px"
				/>
			</div>
		</nuxt-link>
	</div>
</template>
