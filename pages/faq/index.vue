<template>
	<article class="container margin-bottom:24px margin-top:24px max-width:800px">
		<h2>Why would anybody want to use <code>property:value</code> syntax</h2>
		<div>
			<ol>
				<li>
					Because you don't have to study anything. It's like CSS instead of randomly named somehow shortened classes. An example: auto-cols-auto is a class from Tailwind. The class is not self-explanatory and a dev not using Tailwind daily has to go into the docs or into the dev tools to see what it does. In Stylify you write this grid-auto-columns:auto. Everyone with a bit of knowledge of CSS knows what that does.
				</li>
				<li>
					Another reason is maintainability. What if browsers come with a property, Tailwind already shortened? An example <code>shrink</code> => <code>flex-shrink: 1;</code> (class from Tailwind). What if Browsers come with, for example, a new `shrink: auto`. Then they will have to figure out a new name for the new selector so it makes sense. Which can be confusing.
				</li>
				<li>
					When using BEM you can end up with <div class="page-section__container page-section__container--full-size page-section__container--without-background"></div>. I can't see how property:value selectors are more bad then this.
				</li>
			</ol>
			<p>
				Sure, Stylify syntax might not be for anyone. You can however define custom macros for having classes like <code>ml-2</code> or <code>py-3</code> if you like it more. It's just a Native Preset that you can ignore and define a custom set.
			</p>
		</div>

		<h2>Do I need to use hardcoded values?</h2>
		<div>
			<ul>
				<li>In Stylify, you can configure variables and use them anywhere.</li>
				<li>It's just up to developer if he is going to have hardcoded values in the code or not.</li>
			</ul>
		</div>

		<h2>What is the difference against <code class="white-space:nowrap">style=""</code> attribute</h2>
		<div>
			<ul>
				<li>
					For example a selector like <code>color:red</code> is generated as <code>.color\:red{color:red}</code>. This selector can be reused.
				</li>
				<li>
					Inline styles are not responsive. You cannot ad a <code>@media query</code>. This means, you cannot have font size 12px for mobile and then change it for a desktop. Also, it is easier to toggle classes then a style attribute value.
				</li>
				<li>
					When you add a component in Stylify like <code>.button</code> that needs red text, it is generated like this <code>.color\:red,.button{color:red}</code>. The selector is simply attached, reused and the <code>property:value</code> not generated again => This means smaller bundles.
				</li>
				<li>
					In production, you can also minify this selectors to => <code>.a,.b{color:red}</code>. This is done even by Medium.com and Facebook.
				</li>
				<li>
					But the minification will make the blocks harder to find when debugging because of the unreadable classes? No. You can use empty class as selector, data or id attributes. Also, in Javascript we normally minify classes and selectors from <code>const myValue</code> to <code>const abc</code> and nobody cares.
				</li>
			</ul>
		</div>

		<h2>What are the advantages over pure CSS</h2>
		<div>
			<ul>
				<li>
					Selectors are dynamically generated => don't have to remember to remove them when removing css and vice versa
				</li>
				<li>
					Selectors are combined and reused => <code>.color\:red,.button{color:red}</code>
				</li>
				<li>
					Selectors are minified from long <code>text-align:left</code> to short <code>a</code>
				</li>
				<li>
					You open a template file and a browser and you just type the selectors. You don't have to switch between html and css for removing, renaming, and manually combining classes
				</li>
				<li>
					The CSS size doesn't grow exponencialy, because there is a minimum of duplicated css <code>property:value</code>. There is some <a href="https://engineering.fb.com/2020/05/08/web/facebook-redesign/" target="blank" rel="noopener nofollow">article</a> about CSS size from Facebook
				</li>
				<li>
					When frontend and backend engineers work on one task, then it's easy for the frontend engineer to tell the backend engineer which classes to add when he just needs to indent or align something. He doesn't have to edit CSS and hopes it will work. He just copies selectors.
				</li>
				<li>
					Dynamically generated CSS means less files in the projects => less changes => we normally generate cache, entities, migrations, js bundles and etc. So Stylify dynamically generates CSS. At least from my point of view it's more comfortable and efficient then writting it manually and think about how to pregenerate utilities or combine css files manually.
				</li>
			</ul>
		</div>

		<h2>Stylify and utility-first CSS causes bloated templates and worse maintainability</h2>
		<div>
			<ul>
				<li>
					You can define <nuxt-link to="/docs/stylify/compiler#components">components</nuxt-link>. So there doesn't have to be any utility in the template.
				</li>
				<li>
					From experience, you can bloat your templates by a lot of other stuff => conditions, attributes, dynamic attributes, dynamically loaded templates and etc. Blaming CSS selectors is simply wierd.
				</li>
			</ul>
		</div>
	</article>
</template>
