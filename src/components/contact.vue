<template>
	<div class="contact" id="contact">
		<div class="container">
			<div class="page_title">
				<h1>contact me</h1>
			</div>
			<div class="wrapper">

				<div class="content">
					<div class="contact-left">
						<div class="social">
							<div class="item">
								<!-- svelte-ignore a11y-missing-attribute -->
								<a href="https://www.instagram.com/monabbirhasan_3/">
									<span>
										<img src="https://img.icons8.com/ios-filled/50/null/instagram-new--v1.png"
											width="35" />
									</span>
								</a>
								<h3>monabbirhasan</h3>
							</div>
							<div class="item">
								<!-- svelte-ignore a11y-missing-attribute -->
								<a href="https://www.facebook.com/profile.php?id=100027747414209">
									<span>
										<img src="https://img.icons8.com/ios-filled/50/null/facebook-new.png"
											width="35" />
									</span>
								</a>
								<h3>monabbirhasan</h3>
							</div>
							<div class="item">
								<!-- svelte-ignore a11y-missing-attribute -->
								<a href="https://twitter.com/MonabbirHasan">
									<span>
										<img src="https://img.icons8.com/ios-filled/50/null/twitter.png" width="35" />
									</span>
								</a>
								<h3>monabbirhasan</h3>
							</div>
							<div class="item">
								<!-- svelte-ignore a11y-missing-attribute -->
								<a href="https://www.linkedin.com/in/monabbir-hasan-88960a229">
									<span>
										<img src="https://img.icons8.com/ios-filled/50/null/linkedin-circled--v1.png"
											width="35" />
									</span>
								</a>
								<h3>monabbirhasan</h3>
							</div>
							<div class="item">
								<!-- svelte-ignore a11y-missing-attribute -->
								<a href="https://web.whatsapp.com/">
									<span>
										<img src="https://img.icons8.com/ios-filled/50/null/whatsapp--v1.png"
											width="35" />
									</span>
								</a>
								<h3>monabbirhasan</h3>
							</div>
							<div class="item">
								<!-- svelte-ignore a11y-missing-attribute -->
								<a href="https://join.skype.com/invite/yPP5i2WzM6iG">
									<span>
										<img src="https://img.icons8.com/ios-filled/50/null/skype.png" width="35" />
									</span>
								</a>
								<h3>monabbirhasan</h3>
							</div>
							<div class="item">
								<!-- svelte-ignore a11y-missing-attribute-->
								<a href=" https://meet.google.com/?authuser=0">
									<span>
										<img src="https://img.icons8.com/ios-filled/50/null/google-meet.png"
											width="35" />
									</span>
								</a>
								<h3>monabbirhasan</h3>
							</div>
						</div>
					</div>
					<div class="contact-right">
						<form action="_blank" method="post">
							<div class="form-group">
								<label for="username">username</label>
								<input type="text" placeholder="Please Enter Your Name" autocomplete="off" autosave="on"
									name="username" class="form-control" />
							</div>
							<div class="form-group">
								<label for="Email">Email</label>
								<input type="email" placeholder="Please Enter Your Email" autocomplete="off"
									autosave="on" name="Email" class="form-control" />
							</div>
							<div class="form-group">
								<label for="message">message</label>
								<textarea name="message" id="message" cols="20" rows="7" autocomplete="off"
									autosave="on" class="form-control" placeholder="Please Enter Your Message" />
							</div>
							<button type="submit" class="submit">submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>


</template>

<script>
export default {
	name: "contact-page"
}
</script>
<style>
.contact {
	width: 100%;
	padding: 10px 0;
}

.contact .wrapper {
	justify-content: left !important;
}

.contact .content {
	padding: 50px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
}

.contact .contact-left {
	flex-basis: 55%;
	padding: 10px;
	line-height: 50px;
}

.contact .contact-right {
	flex-basis: 45%;
	padding: 10px;
}

.contact .contact-right form label {
	font-size: 18px;
	text-transform: capitalize;
	font-weight: 500;
}

.contact .contact-right form input {
	border: none;
	border: 2px solid #fc9;
}

.contact .contact-right form textarea {
	border: none;
	border: 2px solid #fc9;
	resize: none;
	outline: none !important;
}

.contact .contact-right form .submit {
	padding: 10px 30px;
	color: white;
	text-transform: uppercase;
	font-weight: 500;
	letter-spacing: 1px;
	border: none;
	border-radius: 5px;
	background: black;
	transition: 0.4s;
}

.contact .contact-right form .submit:hover {
	background-color: #fc9;
	color: black;
}

.contact .social {
	display: grid;
	grid-template-columns: auto auto auto;
}

.contact .social .item {
	padding: 10px;
	display: inline-block;
	gap: 10px;
	margin: 10px;
	border: 3px solid #fc9;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.5s;
	box-shadow: -2px -2px 5px #eee, 2px 2px 5px #bbb;
}

.contact .social .item:hover {
	background: #fc9;
	color: #fff;
	animation: icons 1s linear infinite;
	filter: drop-shadow(2px 4px 6px black);
	border-color: black;
}

@keyframes icons {
	0% {
		filter: hue-rotate(0deg);
	}

	100% {
		filter: hue-rotate(360deg);
	}
}

.contact .social .item:hover img {
	filter: invert();
}

.social .item img {
	filter: drop-shadow(2px 4px 6px black);
}

.social .item h3 {
	font-size: 17px;
	display: inline-block;
	text-transform: capitalize;
	padding-top: 5px;
	margin-top: 5px;
	color: #000;
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
	/* padding: 0 10px; */
}
</style>
