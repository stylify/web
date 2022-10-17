<template>
	<section class="display:flex flex-direction:column margin-bottom:32px xl:margin-left:-24px xl:max-width:calc(100%_-_24px) xl:flex-direction:row">
		<div class="xl:max-width:40% xl:min-width:40% xl:margin-left:24px [h1,h2,h3,h4,h5]{margin-top:0}">
			<slot name="description"></slot>
		</div>
		<div class="xl:max-width:60% xl:min-width:60% xl:margin-left:24px">
			<slot name="code"></slot>
		</div>
	</section>
</template>
