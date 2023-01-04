
<template>

	<div class="skill" id="skills">
		<div class="container">
			<div class="page_title">
				<h1 id="h1">my Skills</h1>
			</div>
			<div class="wrapper">

				<div class="content">
					<div class="progressbar">
						<div class="progress-box">
							<div class="title">
								<h3>languages</h3>
							</div>
							<div class="languages">
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/javascript.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/php.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/python.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/dart-language.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/typescript.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios/50/null/java-coffee-cup-logo--v1.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/swift.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/c-sharp-logo.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/html-5--v1.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/css3.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/sass-avatar.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/sql.png" /></span>
								</div>
							</div>
						</div>
						<div class="progress-box">
							<div class="title">
								<h3>frameworks</h3>
							</div>
							<div class="languages">
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios/50/null/react-native--v1.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/windows/32/null/vuejs.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/angularjs.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/wired/64/null/svetle.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/jquery.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/django.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/windows/32/null/node-js.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/laravel.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="50"
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFPklEQVR4nO1Zf0xVVRy/av1Rk3MAOffBO+eBMDGLtnJaiGUkU9Ja5ExDpSUOmTGX/VpSsmG5FDMNBISkUWrMtUzth5nirzSby1miiRalBbSlwOP3j/f49W3n8B7yHu/Hvdz73h+Nz3Y23r33fO/nc+453+/nHCRpFKP4/4Ixdpe/3jVONgbEyRStkxnaTyiulClulCnulhnu4X8Tin4lFB0gFL0p04AZkiSN8RaTUFzmU9ZBxiCTzPBmmaJ/ZIZBXUO1hOGNwTSYuYptMKFkmeF+QziO1J14aOh4QhjeSSi2qifu2AiPQXF+WNj4kCGvGCMzVCHuM7xWV/IyQ8sIxWatxIcJYbguxIie4+8wGAOfHrxH8QV9mE+T7iQUfaQ3cdm5UZzPSQ+9pnkahYWF3S0zfNjn5NntNjkmAlatTrOJCnxZ08j7m7zMMOzaUwrHT5bbphc6PmL+fpk2zLGtfHE5cHR1dUH4JAOfVt04AgeqJi8zlOJv8kkL50FHRwfYkZyycGAdmFCyKvJGY8AEwnC9P8mnrkyBzs5OGIqS0mLbOsBFqgTwPO8v4jSSQG7++9DX1wfOqPrjd9tzqEIxeV4d9ShSStqzS5Lg6rVKcIf+/n6RkWSG+4KigrAiAcIe+JC0ceIEWJ62DH44exqUgIvk/YgJJSrhP5b7FD2IRkSHwgPTp8CshFgxv9/NeRsOfvUFNDU3gRps2Jgt4oXQgDXeR5+7yhEQTVv1gsjdP50/B9U1f4sUqBfK9u62L+QC7wKEJVZGPPIeI3ywfYvqEfUGs7nB4ffpM6fsAo4omP9ovxLyiU/NFiOtN7q7rXDh5/MO167f+NP+3mteBRCKrngjv2DRkw7FRk989vleaGltcbjW0FBvT6W1CgR4tspTY2OgqanRJ+QbG82wfkPWsOtckMhCFJuVCPCY/4+UHwZfIeOldKi4fHHYdZ4QbAKsmgQkPPGoz8iX7iqB9IwVbr+MTYBF0xQq2lngE/InTh2D6PvC3SaFyqtXBgQwXK9pEV+89Ivu5H88d1ZY5t2ffuz2mWMnjtq+ALqsRMABdwJ4NtATXx/6UpBfkf68x+f4l7dloX2aCpleBau3txe25m4GgylQ1BNvKTklNdm+BjIVCAiY4U5AfX2dZvI1tdVi08LjzUqI9RqzuaUZWJQsng9l6CFFZo4wVONKwNHy70ZMnG9U8nfkCvvBY82dH69oStqnD2GomnNTaqdzXAnIWp85Il/D/VLMg9GDcfhpQ3t7u9e+rW2tcP/UyfZ+myStG5pJ95oUTaNbdTdFVlm8dAHQiSGD/Xmq3FP2iWLxr61dM5j/g1kwldSAMFzs6issWvoMWCxdw0aKp7rsd9bB7MRHxOJ03jK+8vpqIUwpCou3346hxEY7gzEU7G5Tz0ly7//GW69C/Jw4CA0PcrnoZ8ZPhy3bcuDmrX8VE7daLZCVnTk4CIThBqdzU+UwMLREibUe2h6fO1OQ5tVTDaxWi3CicY9Nc4hHKF4saQFh+ENnkvwEgefuvPytYqTmJ82BgqI8uPHXdY8ke3p6RC3h3qaq6jf4/sxJKC4phPSMVIiaQocPCMWFkg4YRyg6ODSw3a+3tbWp+joq2yFJku7QQ4D9cPdbe/Btee8J8jw9+oI8Yfgb/k5JV/DjdTeZSddGxbTRZ+RdgZ9R+uLIkTBcp3nBqjk3lSnewQuMZuIUW3ie52lb8jd4deS2w5138jzios8m1RXWRxhrYOhh8S9UhvbxjQff2XE7YmtmwtClgXs40+YqlRmzUYxiFJIn/Ae31uLjPG8gqwAAAABJRU5ErkJggg==" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/external-prettycons-solid-prettycons/60/null/external-electrons-technology-prettycons-solid-prettycons.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/external-those-icons-fill-those-icons/24/null/external-Bootstrap-social-media-those-icons-fill-those-icons.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/material-outlined/24/null/flutter.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/windows/32/null/ember.png" /></span>
								</div>
							</div>
						</div>
						<div class="progress-box">
							<div class="title">
								<h3>dev tools</h3>
							</div>
							<div class="languages">
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/github.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/git.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/docker.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/windows/32/null/amazon-web-services.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/windows/32/null/yarn-logo.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40" src="https://img.icons8.com/windows/32/null/npm.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/visual-studio.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/wired/64/null/sublime-text-new-logo.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/atom-editor.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/android-studio--v3.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/fluency/48/null/intellij-idea.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/fluency/48/null/pycharm.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img
											src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/null/external-bracket-development-royyan-wijaya-detailed-outline-royyan-wijaya.png" /></span>
								</div>
							</div>
						</div>
						<div class="progress-box">
							<div class="title">
								<h3>design tools</h3>
							</div>
							<div class="languages">
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-glyphs/30/null/adobe-photoshop.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-glyphs/30/null/adobe-illustrator.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/material-sharp/24/null/adobe-xd.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-filled/50/null/canva.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/ios-glyphs/30/null/figma.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/windows/32/null/sketch.png" /></span>
								</div>
								<div class="item">
									<!-- svelte-ignore a11y-missing-attribute -->
									<span><img width="40"
											src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/null/external-invision-is-the-digital-product-design-platform-logo-bold-tal-revivo.png" /></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


</template>

<script>
export default {
	name: "skill-page"
}
</script>
<!-- progressbar -->
<style>
.progressbar {
	padding: 10px;
	display: grid;
	grid-template-columns: auto auto;
	gap: 15px;
	/* justify-content: space-between; */
}

.content {
	padding: 50px 0;
}

.progress-box {
	margin: 0 10px;
}

.content .title {
	padding: 10px 20px;
}

.progressbar .title h3 {
	font-size: 18px;
	color: #000;
	text-transform: capitalize;
}

.progressbar .languages {
	padding: 10px;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	/* grid-template-columns: auto auto auto auto;
		gap: 13px; */
}

.languages .item {
	width: 75px;
	height: 75px;
	padding: 5px;
	border: 5px solid #fc9;
	border-radius: 5px;
	text-align: center;
	vertical-align: middle;
	background: #fff;
	cursor: pointer;
	transition: .4s;
	box-shadow: -2px -2px 5px #eee, 2px 2px 5px #bbb;
}

.languages .item:hover {
	background: #fc9;
}

.languages .item:hover span img {
	filter: hue-rotate(312deg);
	animation: icons 1s linear infinite;
}

@keyframes icons {
	0% {
		filter: hue-rotate(0deg);
	}

	100% {
		filter: hue-rotate(300deg);
	}
}

.languages .item span {
	font-size: 2rem;
	font-weight: bolder;
	color: #000;
}

.languages .item span img {
	vertical-align: middle;
	border-style: none;
	background: #fc9;
	background-blend-mode: hue;
	padding: 5px;
	background-image: none;
	margin: 0;
	border-radius: 5px;
}

.skill {
	padding: 40px 0;
	width: 100%;
}

.skill .wrapper {
	padding: 10px;
}

.page_title {
	padding: 10px;
	text-align: left;
	border-bottom: 4px solid #fc9;
	display: inline-block;
	margin-left: 20px;
	border-radius: 5px;
}

.page_title h1 {
	font-size: 2.5rem;
	font-weight: 900;
	color: black;
	display: inline-block;
	text-transform: uppercase;
	text-transform: uppercase;
	background: -webkit-linear-gradient(#f0ff, #fc9400);
	-webkit-background-clip: text;
	-webkit-text-stroke-color: #fc9;
	-webkit-text-stroke-width: 1px;
	-webkit-text-fill-color: transparent;
	background-image: url("https://media.giphy.com/media/xT1XGZndeDLlWvSDaU/giphy.gif");
	animation: text 1s linear initial;
	background-position: center;
	background-size: cover;
}
</style>
