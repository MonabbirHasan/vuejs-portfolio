
<template>

	<div class="service" id="service">
		<div class="container">
			<div class="page_title">
				<h1>services</h1>
			</div>
			<div class="wrapper">

				<div class="content">
					<div class="item">
						<div class="icons">
							<!-- svelte-ignore a11y-missing-attribute -->
							<span><img src="https://img.icons8.com/ios-filled/50/null/technology-items.png" /></span>
							<span>Web Design</span>
						</div>
						<p>
							Web design is the process of creating websites. It encompasses several different
							aspects, including webpage layout, content production, and graphic design. Web designers
							use a variety of tools to create a website, including HTML, CSS, JavaScript, and other
							web technologies. Web design is an important part of creating an effective website that
							meets the needs of its users.
						</p>
					</div>

					<div class="item">
						<div class="icons">
							<!-- svelte-ignore a11y-missing-attribute -->
							<span><img src="https://img.icons8.com/ios-filled/50/null/laptop-coding.png" /></span>
							<span>Web development</span>
						</div>
						<p>
							Web development is the process of creating websites and web applications. It involves a
							variety of tasks such as coding, designing, content creation, and more. Web developers
							use a variety of programming languages and frameworks to create websites and web
							applications that are both functional and aesthetically pleasing. Web development is an
							ever-evolving field that requires knowledge of the latest technologies and trends in
							order to create successful websites.
						</p>
					</div>

					<div class="item">
						<div class="icons">
							<!-- svelte-ignore a11y-missing-attribute -->
							<span><img src="https://img.icons8.com/sf-black-filled/64/null/android.png" /></span>
							<span>android app development</span>
						</div>
						<p>
							Android app development is the process of creating applications for devices running on
							the Android operating system. Android apps can be written using Kotlin, Java, and C++
							languages. The Android SDK tools compile the code into an Android package, an archive
							file with an .apk extension that contains all of the application's code, resources,
							assets, and manifest file. The developer then distributes the package either through a
							marketplace such as Google Play or by other distribution channels such as their own
							website.
						</p>
					</div>
					<div class="item">
						<div class="icons">
							<!-- svelte-ignore a11y-missing-attribute -->
							<span><img src="https://img.icons8.com/ios-filled/50/null/ios-logo.png" /></span>
							<span>ios app development</span>
						</div>
						<p>
							iOS app development is the process of creating applications for Apple’s mobile operating
							system, iOS. This includes developing apps for iPhones, iPads, and other Apple devices.
							iOS app development requires knowledge of the Swift programming language and the iOS SDK
							(Software Development Kit). Developers must also be familiar with Apple’s Human
							Interface Guidelines to ensure their apps are user-friendly and intuitive. Additionally,
							developers must be aware of the App Store guidelines to ensure their apps are approved
							for sale in the App Store.
						</p>
					</div>

					<div class="item">
						<div class="icons">
							<!-- svelte-ignore a11y-missing-attribute -->
							<span><img src="https://img.icons8.com/ios-filled/50/null/workstation.png" /></span>
							<span>desktop development</span>
						</div>
						<p>
							Desktop application development is the process of creating software programs that run on
							a desktop or laptop computer. These applications can range from simple games to complex
							business applications. Desktop applications are typically written in a programming
							language such as C++, Java, or Visual Basic. The development process involves designing
							the user interface, coding the application logic, and testing the application for bugs
							and compatibility with other software.
						</p>
					</div>
					<div class="item">
						<div class="icons">
							<!-- svelte-ignore a11y-missing-attribute -->
							<span><img src="https://img.icons8.com/ios-filled/50/null/api-settings.png" /></span>
							<span>api development</span>
						</div>
						<p>
							A REST API (also known as a Representational State Transfer API) is an application
							programming interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data.
							It is a web development concept, usually limited to a web application's client-side
							(including any web frameworks being used), and thus usually does not include web server
							or browser implementation details such as SAPIs or APIs unless publicly accessible by a
							remote web application.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>


</template>

<script>
export default {
	name: "service-page"
}
</script>
<style>
.service {
	padding: 10px 0;
	width: 100%;
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

.service .content {
	padding: 50px 0;
	display: grid;
	grid-template-columns: auto auto;
	gap: 20px;
	margin: 20px;
}

.service .content .item {
	padding: 10px;
	cursor: pointer;
	border-radius: 5px;
	transition: .4s;
	transform: translateY(0px);
	box-shadow: -2px -2px 5px #eee, 2px 2px 5px #eee;
	background: #fc9;
}

.service .content .item:hover {
	background-color: #fff;
	transform: translateY(-10px);
}

.service .content .item .icons {
	margin-bottom: 10px;
	padding: 10px;
}

/* .content .item:hover .icons span{
		color: black;
	} */
.service .content .item .icons span {
	color: #000;
	font-size: 20px;
	font-weight: bold;
	text-transform: uppercase;
	padding: 0 10px;
}

.service .content .item .icons span img {
	width: 80px;
	filter: drop-shadow(2px 4px 6px black);
}

.service .content .item p {
	padding: 10px;
	text-transform: capitalize;
	color: black;
	font-weight: 400;
}
</style>
