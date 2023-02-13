<template>
	<section>
		<h2>How to use and modify Stylify CSS components</h2>
		When you want to use some component do the following:
		<ol>
			<li>Copy&Paste component HTML. If you use components approach, don't forget to copy their definition within the comments. Copy this definition exactly as is into coment, if you plan to use it in one file. Otherwise separate the content between <code>stylify-components</code> tags into the Compiler config. Don't forget to copy <code>script tag</code>, if the compoenent has any.</li>
			<li>Adjust it to your needs: Change font-size, padding, width, height... Variables like `$color` can be removed/modified, etc.</li>
			<li>Check if you have copied everything necessary. Scripts, Components definition.</li>
		</ol>

		For color palettes, check out our guide for <nuxt-link to="/snippets/snippets/material-theme" class="color:$blue1">Material Theme Builder</nuxt-link>.
	</section>
</template>
