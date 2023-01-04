
<template>
	<div class="container">
		<div class="about" id="about">
			<div class="page_title">
					<h1>About Me</h1>
				</div>
			<div class="wrapper">
				<div class="content">
					<div class="about-left">
						<!-- <p>
                        I am a full-stack developer with a passion for creating innovative and user-friendly web
                        applications. I have extensive experience in developing web applications using HTML, CSS,
                        JavaScript, PHP, MySQL, and other web technologies. I am highly skilled in designing and
                        developing responsive websites that are optimized for both desktop and mobile devices. I
                        have a strong understanding of object-oriented programming principles and design patterns.
                        I am an excellent problem solver who is able to quickly identify issues and develop
                        solutions. I have a keen eye for detail and strive to create clean, well-structured code
                        that is easy to maintain. I am also experienced in working with popular frameworks such as
                        Laravel, Symfony, AngularJS, ReactJS, NodeJS, and VueJS. I am an enthusiastic team player
                        who enjoys collaborating with others to create high quality products. I take pride in my
                        work and always strive to exceed expectations.
                    </p> -->
						<p>
							I am a full-stack developer with experience in both front-end and back-end development.
							I have a strong understanding of web technologies such as HTML, CSS, JavaScript, and
							PHP. I am also familiar with popular frameworks such as React, Angular, and Node.js. I
							have experience working with databases such as MySQL and MongoDB. I am comfortable
							working in both Linux and Windows environments. My goal is to create high-quality
							applications that are user friendly and efficient.
						</p>
						<div class="down-box">
							<a href="/" class="download_btn">download cv <i class="fa-solid fa-download" /></a>
						</div>
					</div>
					<div class="about-right">
						<img src="../assets/about_img.jpg" class="img-fluid" alt="monabbir hasan I am full-stack developer" />
					</div>
					<div class="progress-circle">
						<div class="progress-bar" />
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
name:"about-page"
}
</script>

<style>
.about {
	width: 100%;
	padding: 50px 0;
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
	background-image: url('https://media.giphy.com/media/xT1XGZndeDLlWvSDaU/giphy.gif');
	animation: text 1s linear initial;
	background-position: center;
	background-size: cover;
	/* padding: 0 10px; */
}

.about .content {
	padding: 10px;
	display: flex;
	gap: 70px;
}

.about .content .about-left {
	padding: 10px;
	flex-basis: 70%;
}

.about .content .about-left p {
	text-transform: capitalize;
	color: black;
	font-weight: 400;
	font-size: 16px;
	word-wrap: words;
	shape-outside: ellipse(130px 140px at 20% 20%);
	line-height: 30px;
	text-align: left;
}

.about .content .about-right {
	padding: 10px;
	/* flex-basis: 40%; */
	transition: .4s;
}

.about-right img {
	/* border-radius: 100%; */
	width: 400px;
	/* box-shadow: -2px -2px 5px #cccbcb, 2px 2px 5px #ccc; */
	filter: brightness(1) blur(0.5px) saturate(2) sepia(0.1) contrast(1.4);
	height: 400px;
	border: 7px double #fc9;
	border-radius: 5px;
}
.about-right:hover{
	transform: translateY(-20px);
}

.down-box {
	margin-top: 11%;
}

.download_btn {
	padding: 15px 40px;
	background-color: black;
	font-size: 16px;
	vertical-align: middle;
	text-decoration: none;
	text-align: center;
	font-weight: 500;
	text-transform: uppercase;
	position: relative;
	z-index: 1000;
	letter-spacing: 1px;
	border: none;
	color: #fff;
	border-radius: 5px;
	overflow: hidden;
	transition: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.download_btn:hover {
	background-color: gold;
	color: black;
}
</style>
