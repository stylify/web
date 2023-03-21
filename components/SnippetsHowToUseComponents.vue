<template>
	<section>
		<h2>How to use and modify Stylify CSS components</h2>
		When you want to use some component do the following:
		<ol>
			<li>Copy&Paste component HTML. If you use the components approach, don't forget to copy their definition within the comments. Copy this definition exactly as is into a comment, if you plan to use it in one file or want the whole definition at one place and not in a global config. Otherwise copy the content between <code>stylify-components</code> tags into the Compiler config. Don't forget to copy <code>script tag</code>, if the compoenent has any.</li>
			<li>Adjust it to your needs: Change <code>font-size</code>, <code>padding</code>, <code>width</code>, <code>height</code>... Variables like <code>$color</code> can be removed/modified, etc.</li>
			<li>Check if you have copied everything necessary. Scripts, Components definition.</li>
		</ol>

		In case you don't have any color palette yet, you might want to check out the guide for <nuxt-link to="/snippets/snippets/material-theme" class="color:$blue1">Material Theme Builder</nuxt-link>.
	</section>
</template>
