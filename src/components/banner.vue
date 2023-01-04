
<template>
	<div class="banner">
		<div class="top_right_text">full-stack developer</div>
		<div class="wrapper">
			<div class="banner-left">
				<img src="../assets/iam.jpg" alt="" />
			</div>
			<div class="banner-right">
				<div class="content">
					<h3>I'm</h3>
					<h1 class="text-left">monabbirhasan</h1>
					<h2>full-stack developer</h2>
				</div>
				<div class="button">
					<button class="hire">
						<a href="https://www.fiverr.com/share/NQ6wjo">hire me <i
								class="fa-regular fa-handshake" ></i>
							</a>
							</button>
				</div>
				<div>
					<div class="scroll"></div>
				</div>
			</div>
		</div>

		<div class="style_text1">
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-missing-content -->
			<span><a href="https://www.facebook.com/profile.php?id=100027747414209"><i
						class="fa-brands fa-facebook-f" ></i></a></span>
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-missing-content -->
			<span><a href="https://www.instagram.com/monabbirhasan_3/"><i
						class="fa-brands fa-instagram" ></i></a></span>
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-missing-content -->
			<span><a href="https://twitter.com/MonabbirHasan"><i class="fa-brands fa-twitter" ></i></a></span>
			<!-- svelte-ignore a11y-missing-content -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<span><a href="https://github.com/MonabbirHasan"><i class="fa-brands fa-github" ></i></a></span>
			<!-- svelte-ignore a11y-missing-content -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<span><a href="/whatsapp.com"><i class="fa-brands fa-whatsapp" ></i></a></span>
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-missing-content -->
			<span><a href="https://www.linkedin.com/in/monabbir-hasan-88960a229"><i
						class="fa-brands fa-linkedin" ></i></a></span>
		</div>
		<p class="style_text2">full-stack developer</p>
	</div>
</template>
<script>
// import image from '../assets/profile.jpg';
// import Iam from '../assets/iam.jpg';
// import my from '../lib/images/my.jpg';
import '../components/Responsive.css';
export default {
	name: "banner-page"
}
</script>

<style>
.top_right_text {
	float: right;
	writing-mode: vertical-lr;
	font-size: 20px;
	position: absolute;
	right: 10px;
	top: 20px;
	text-transform: uppercase;
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke: 1px;
	-webkit-text-stroke-color: #aaa2a2;
	-webkit-background-clip: text;
	background-image: url('https://media.giphy.com/media/xT1XGZndeDLlWvSDaU/giphy.gif');
	animation: text 1s linear initial;
	background-position: center;
	background-size: cover;
}

.style_text2 {
	writing-mode: vertical-rl;
	text-align: center;
	vertical-align: middle;
	position: relative;
	top: -33vh;
	color: #333;
	text-transform: uppercase;
	background: -webkit-linear-gradient(#f0ff, #fc9400);
	-webkit-background-clip: text;
	-webkit-text-stroke-color: #aaa2a2;
	font-size: 17px;
	-webkit-text-stroke-width: 0.5px;
	-webkit-text-fill-color: transparent;
	background-image: url('https://media.giphy.com/media/xT1XGZndeDLlWvSDaU/giphy.gif');
	animation: text 1s linear initial;
	background-position: center;
	background-size: cover;
}

@keyframes text {
	0% {
		filter: hue-rotate(0deg);
	}

	100% {
		filter: hue-rotate(30deg);
		background: -webkit-linear-gradient(to left, #f0ff, #fc9400);
	}
}

.style_text1 {
	writing-mode: vertical-rl;
	text-align: center;
	vertical-align: middle;
	position: relative;
	float: right;
	right: 20px;
	top: -30vh;
	line-height: 40px;
	color: #333;
	text-transform: uppercase;
}

.style_text1 span {
	font-size: 20px;
	color: white;
	font-weight: 900;
	padding: 5px;
	position: relative;
	z-index: 1;
}

.style_text1 span a {
	color: black;
	position: relative;
	z-index: 1;
}

.style_text1 span a:hover {
	filter: hue-rotate(300deg);
	color: #fff;
}

/* .style_text2{
		float: right;
		margin-bottom: 50%;
	} */
.banner {
	padding: 80px 0;
	width: 100%;
	height: 100vh;
	text-align: left;
	/* background-color: #0bceaf !important; */
	background-color: #fc9;
}

.wrapper {
	padding: 10px 0;
	display: flex;
	width: 100%;
	justify-content: center;
}

.wrapper .banner-left {
	padding: 10px;
	flex-basis: 40%;
}

.banner-left img {
	width: 100%;
	height: 550px;
	border-right: 5px solid #ffffffa6;
	backdrop-filter: blur(20px);
	clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	/* clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%); */
	clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	clip-path: circle(200px at center);
	filter: drop-shadow(2px 2px 5px rgb(167, 159, 159)) hue-rotate(347deg);
}

.wrapper .banner-right {
	flex-basis: 60%;
	padding-left: 50px;
	vertical-align: middle;
	justify-content: center;
	align-items: center;
	margin: auto;
}

.scroll {
	width: 5px;
	height: 50px;
	position: relative;
	top: -60px;
	border: 5px solid #000;
	transform: translateY(25vh);
	clip-path: polygon(41% 100%, 0 0, 99% 0);
	border-radius: 30px;
	animation: action 1s infinite alternate;
	animation-duration: 1s;
	animation-timing-function: ease;
	animation-delay: 0s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-fill-mode: none;
	animation-play-state: running;
	animation-name: action;
}

@keyframes action {
	0% {
		transform: translateY(25vh);
	}

	100% {
		transform: translateY(20vh);
		border-color: #bbb;
	}
}

.banner-right .content {
	text-align: left;
	padding: 10px;
	line-height: 50px;
}

.banner-right .content h1,
h2,
h3 {
	text-transform: uppercase;
	color: #fff;
	margin: 20px 0;
}

.banner-right .content h3 {
	font-size: 3rem;
}

.banner-right .content h1 {
	color: transparent;
	font-size: 4.5rem;
	font-weight: 900;
	transition: 1s;
	-webkit-background-clip: text;
	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: #fff;
	-webkit-text-fill-color: transparent;
	/* background-image: url('https://media.giphy.com/media/4a7sWil1NZoRWymHJp/giphy.gif'); */
	/* background-image:url("https://media.giphy.com/media/xThuWu1NaJdIvTfoFq/giphy.gif"); */
	/* background-image:url("https://media.giphy.com/media/3o7WTJFpWPtnCuG4N2/giphy.gif"); */
	/* background-image:url("https://media.giphy.com/media/3kHBWLHTrZp9kvfH4U/giphy.gif"); */
	background-image:url("https://media.giphy.com/media/1X7AJ2xjgkCzVwmSCG/giphy.gif");
	/* background-image:url("https://media.giphy.com/media/fnjxvXNfDJbp4DWILf/giphy.gif"); */
	/* background-image:url("https://media.giphy.com/media/26vUyWzmjBIlNJvRC/giphy.gif"); */
	/* animation: text 1s linear initial; */
	background-position: center;
	animation: bg 10s linear infinite;
	background-size: 100%;
}

.banner-right .content h2 {
	font-size: 2rem;
	font-weight: bold;
	color: #fff;
}

.banner-right .hire {
	padding: 10px 40px;
	background-color: black;
	font-size: 19px;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 1px;
	border: none;
	margin: 0px 15px;
	color: #fff;
	border-radius: 5px;
	-webkit-box-reflect: below 0 linear-gradient(transparent, #ffffff60);
	transition: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.banner-right .hire a {
	text-decoration: none;
	color: beige;
}

.banner-right .hire a:hover {
	text-decoration: none;
	color: black;
}

.banner-right .hire:hover {
	background-color: whitesmoke;
	color: black;
}

.s-LH2cfWw2c3sT.s-LH2cfWw2c3sT {
	text-align: left;
}
</style>