<template>
	<section itemscope itemtype="https://schema.org/FAQPage" class="container margin-bottom:48px margin-top:24px max-width:800px">
		<h1 class="font-size:48px">Frequently Asked Questions</h1>
		<p class="margin-bottom:24px">Below are frequently asked questions about Stylify CSS and its ecosystem.</p>

		<article class="[summary]{font-size:18px;font-weight:bold;color:#fefefe;cursor:pointer} [details]{margin-bottom:24px}">
			<faq>
				<faq-question>Why to use CSS-like selectors <code>property:value</code> instead of shortcuts?</faq-question>
				<faq-answer>
					<ul>
						<li>Because you don't have to study anything. It's like CSS instead of randomly named somehow shortened classes. An example: auto-cols-auto is a class from Tailwind. The class is not self-explanatory and a dev not using Tailwind daily has to go into the docs or into the dev tools to see what it does. In Stylify you write this grid-auto-columns:auto. Everyone with a bit of knowledge of CSS knows what that does.</li>
						<li>Another reason is maintainability. What if browsers come with a property, Tailwind already shortened? An example <code>shrink</code> => <code>flex-shrink: 1;</code> (class from Tailwind). What if Browsers come with, for example, a new `shrink: auto`. Then they will have to figure out a new name for the new selector so it makes sense. Which can be confusing.</li>
						<li>When using BEM you can end up with <div class="page-section__container page-section__container--full-size page-section__container--without-background"></div>. I can't see how property:value selectors are worse than this.</li>
					</ul>
					<p>In case you don't like the CSS-like selectors, you can define custom macros like <code>ml-2</code> (margin-left) or <code>py-3</code> (vertical padding) if you like it more.</p>
				</faq-answer>
			</faq>

			<faq>
				<faq-question>What is the difference against <code class="white-space:nowrap">style=""</code> attribute?</faq-question>
				<faq-answer>
					<ul>
						<li>For example a selector like <code>color:red</code> is generated as <code>.color\:red{color:red}</code>. This selector can be reused.</li>
						<li>Inline styles are not responsive. You cannot add a <code>@media query</code>. This means, you cannot have font-size 12px for mobile and then change it for a desktop. Also, it is easier to toggle classes than a style attribute value.</li>
						<li>When you add a component in Stylify like <code>.button</code> that needs red text, it is generated like this <code>.color\:red,.button{color:red}</code>. The selector is simply attached, reused and the <code>property:value</code> is not generated again => This means smaller bundles.</li>
						<li>In production, you can also minify this selectors to => <code>.a,.b{color:red}</code>. This is done even by Medium.com and Facebook.</li>
						<li>But the minification will make the blocks harder to find when debugging because of the unreadable classes? No. You can use the empty class as selector, data or id attributes. Also, in Javascript, we normally minify classes and selectors from <code>const myValue</code> to <code>const abc</code> and nobody cares.</li>
					</ul>
				</faq-answer>
			</faq>

			<faq>
				<faq-question>What are the advantages over pure CSS?</faq-question>
				<faq-answer>
					<ul>
						<li>Selectors are dynamically generated => don't have to remember to remove them when removing CSS and vice versa.</li>
						<li>Selectors are combined and reused => <code>.color\:red,.button{color:red}</code>.</li>
						<li>Selectors are minified from long <code>text-align:left</code> to short <code>a</code>.</li>
						<li>You open a template file and a browser and you just type the selectors. You don't have to switch between HTML and CSS for removing, renaming, and manually combining classes.</li>
						<li>The CSS size doesn't grow exponentially, because there is a minimum of duplicated CSS <code>property:value</code>. There is some <a href="https://engineering.fb.com/2020/05/08/web/facebook-redesign/" target="blank" rel="noopener nofollow">article</a> about CSS size from Facebook.</li>
						<li>When frontend and backend engineers work on one task, then it's easy for the frontend engineer to tell the backend engineer which classes to add when he just needs to indent or align something. He doesn't have to edit CSS and hopes it will work. He just copies selectors.</li>
						<li>Dynamically generated CSS means fewer files in the projects => fewer changes => we normally generate cache, entities, migrations, js bundles and etc. So Stylify dynamically generates CSS. At least from my point of view, it's more comfortable and efficient than writing it manually and thinking about how to pre-generate utilities or combine CSS files manually.</li>
					</ul>
				</faq-answer>
			</faq>

			<faq>
				<faq-question>Do I need to use hardcoded values?</faq-question>
				<faq-answer>
					<ul>
						<li>In Stylify, you can configure variables and use them anywhere.</li>
						<li>It's just up to the developer if he is going to have hardcoded values in the code or not.</li>
					</ul>
				</faq-answer>
			</faq>

			<faq>
				<faq-question>Stylify and utility-first CSS causes bloated templates and worse maintainability.</faq-question>
				<faq-answer>
					<ul>
						<li>You can define <nuxt-link to="/docs/stylify/compiler#components">components</nuxt-link>. So there doesn't have to be any utility in the template.</li>
						<li>There is also the possibility to style <nuxt-link to="/docs/stylify/compiler#customselectors">custom selectors</nuxt-link>. This way you can eliminate a lot of repeating utilities.</li>
						<li>From experience, you can bloat your templates with a lot of other stuff => conditions, attributes, dynamic attributes, dynamically loaded templates, etc. Blaming CSS selectors is simply wierd.</li>
					</ul>
				</faq-answer>
			</faq>

			<faq>
				<faq-question>Are selectors pre-generated?</faq-question>
				<faq-answer>
					<ul>
						<li>No. Stylify generates everything on demand.</li>
						<li>If you write <code>color:blue</code>, it will generate <code>.color\:blue {}</code>. If you remove it, it will not be generated.</li>
						<li>Components work in the same way.</li>
						<li>Only custom selectors are generated immediately because it cannot be detected if they are defined or not.</li>
					</ul>
				</faq-answer>
			</faq>

			<faq>
				<faq-question>Why the underscore <code>_</code> is used instead of space?</faq-question>
				<faq-answer>
					<ul>
						<li>This character is the most "visually similar" to space.</li>
						<li>Stylify cannot use spaces in selectors as they are further optimized. Matching selectors with space would be unnecessary difficult and could cause a lot bugs and edge cases that would be hard to solve.</li>
						<li>
							The dash <code>-</code> character also cannot be used as in CSS, there are negative values like <code>calc(100% - 24px)</code>, functions like <code>cubic-bezier</code> or properties for animation <code>ease-in-auto</code>.
							Also to keep things simple and united, the character must be compatible with custom selectors like <code>[&_a]{color:red}</code> where the <code>data-attribute</code> can be defined.
						</li>
					</ul>
				</faq-answer>
			</faq>

			<faq>
				<faq-question>If the syntax is similar to CSS, why not use some attribute like <code>x-style</code>?</faq-question>
				<faq-answer>
					<ul>
						<li>Classes are a native way for devs to use reusable selectors.</li>
						<li>Class attribute has native js API for <code>add, remove, toggle</code>.</li>
						<li>Attributes like <code>x-style</code> are not valid attributes. The only possible way here would be using <code>data-*</code> attribute</li>
						<li>Stylify doesn't use space for selector because it needs the selector to be complete for further optimization like <strong>chaining a button to padding:4px_8px</strong> and <strong>mangling</strong> <code>.padding:4px_8px => .a</code></li>
					</ul>
				</faq-answer>
			</faq>

			<faq>
				<faq-question>Is Stylify CSS a CSS framework?</faq-question>
				<faq-answer>
					<ul>
						<li>Stylify CSS is not a CSS framework. It is a library that generates CSS for your web project dynamically based on what you write.</li>
						<li>Stylify CSS uses CSS-like syntax and has no pre-arranged color palettes, sizes, random shortcuts and etc.</li>
						<li>It's focused on quick and seamless coding without having to learn CSS framework features and random shortcuts. That is one of the reasons, why the syntax is similar to the CSS.</li>
					</ul>
				</faq-answer>
			</faq>
		</article>
	</section>
</template>

<script>
export default {
	head() {
		const pageDescription = 'Frequently asked questions about Stylify CSS and it\'s ecosystem.';
		const pageTitle = 'Frequently Asked Questions | Stylify CSS';

		return {
			title: pageTitle,
			meta: [
				{ hid: 'description', name: 'description', content: pageDescription },
				{ hid: 'og:title', property: 'og:title', content: pageTitle },
				{ hid: 'og:description', property: 'og:description', content: pageDescription },
				// Twitter Card
				{ hid: 'twitter:title', name: 'twitter:title', content: pageTitle },
				{ hid: 'twitter:description', name: 'twitter:description', content: pageDescription }
			],
			link: [
				{ rel: 'canonical', href: "https://stylifycss.com/faq"}
			],
		}
	}
}
</script>
