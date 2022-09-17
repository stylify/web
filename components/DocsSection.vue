<template>
	<section class="display:flex flex-direction:column margin-bottom:32px xl:margin-left:-24px xl:max-width:calc(100%__-__24px) xl:flex-direction:row">
		<div class="xl:max-width:40% xl:min-width:40% xl:margin-left:24px">
			<slot name="description"></slot>
		</div>
		<div class="xl:max-width:60% xl:min-width:60% xl:margin-left:24px">
			<slot name="code"></slot>
		</div>
	</section>
</template>
