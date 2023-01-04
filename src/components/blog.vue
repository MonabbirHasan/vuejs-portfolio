
<template>
  
<div class="blog" id="blog">
	<div class="container">
		<div class="page_title">
				<h1>latest blog</h1>
			</div>
		<div class="wrapper">
			
			<div class="content">

				<div class="blog_item">
					<div class="img">
						<img src="../assets/connected-technology.jpg" class="img-fluid" alt="full-stack web site developer monabbirhasan" />
					</div>
					<div class="details">
						<!-- svelte-ignore a11y-missing-attribute -->
						<span><img src="https://img.icons8.com/ios-glyphs/30/null/user--v1.png"/><span>20</span></span>
						<!-- svelte-ignore a11y-missing-attribute -->
						<span><img src="https://img.icons8.com/material-rounded/24/null/comments--v1.png"/><span>25</span></span>
						<!-- svelte-ignore a11y-missing-attribute -->
						<span><img src="https://img.icons8.com/material-rounded/24/null/facebook-like--v1.png"/><span>10</span></span>
						<!-- svelte-ignore a11y-missing-attribute -->
						<span><img src="https://img.icons8.com/ios-glyphs/30/null/calendar-13.png"/><span>12-12-2022</span></span>
					</div>
					<div class="desc">
						<h3>latest new year technologies</h3>
						<p>
							Technology is the application of scientific knowledge for practical purposes,
							especially in industry. It includes the use of machines, tools, systems, and processes
							to solve problems and improve efficiency.
						</p>
						<router-link class="read" to="/single">read more</router-link>
					</div>
				</div>
				

				<div class="blog_item">
					<div class="img">
						<img src="../assets/connected-technology.jpg" class="img-fluid" alt="full-stack web site developer monabbirhasan" />
					</div>
					<div class="details">
						<!-- svelte-ignore a11y-missing-attribute -->
						<span class="blog_img"><img src="https://img.icons8.com/ios-glyphs/30/null/user--v1.png"/><span>20</span></span>
						<!-- svelte-ignore a11y-missing-attribute -->
						<span class="blog_img"><img src="https://img.icons8.com/material-rounded/24/null/comments--v1.png"/><span>25</span></span>
						<!-- svelte-ignore a11y-missing-attribute -->
						<span class="blog_img"><img src="https://img.icons8.com/material-rounded/24/null/facebook-like--v1.png"/><span>10</span></span>
						<!-- svelte-ignore a11y-missing-attribute -->
						<span class="blog_img"><img src="https://img.icons8.com/ios-glyphs/30/null/calendar-13.png"/><span>12-12-2022</span></span>
					</div>
					<div class="desc">
						<h3>latest new year technologies</h3>
						<p>
							Technology is the application of scientific knowledge for practical purposes,
							especially in industry. It includes the use of machines, tools, systems, and processes
							to solve problems and improve efficiency.
						</p>
						<router-link class="read" to="/single">read more</router-link>
					</div>
				</div>
				

				<div class="blog_item">
					<div class="img">
						<img src="../assets/connected-technology.jpg" class="img-fluid" alt="full-stack web site developer monabbirhasan" />
					</div>
					<div class="details">
						<!-- svelte-ignore a11y-missing-attribute -->
						<span><img src="https://img.icons8.com/ios-glyphs/30/null/user--v1.png"/><span>20</span></span>
						<!-- svelte-ignore a11y-missing-attribute -->
						<span><img src="https://img.icons8.com/material-rounded/24/null/comments--v1.png"/><span>25</span></span>
						<!-- svelte-ignore a11y-missing-attribute -->
						<span><img src="https://img.icons8.com/material-rounded/24/null/facebook-like--v1.png"/><span>10</span></span>
						<!-- svelte-ignore a11y-missing-attribute -->
						<span><img src="https://img.icons8.com/ios-glyphs/30/null/calendar-13.png"/><span>12-12-2022</span></span>
					</div>
					<div class="desc">
						<h3>latest new year technologies</h3>
						<p>
							Technology is the application of scientific knowledge for practical purposes,
							especially in industry. It includes the use of machines, tools, systems, and processes
							to solve problems and improve efficiency.
						</p>
                        <router-link class="read" to="/single">read more</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<script>
export default {
name:"blog-page"
}
</script>


<style>
	.blog {
		padding: 10px 0;
		width: 100%;
	}
	.page_title {
		padding: 10px;
		text-align: left;
        border-bottom:4px solid #fc9;
        display: inline-block;
		margin-left: 20px;
		border-radius: 5px;
	}
	.page_title h1 {
		font-size:2.5rem;
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
		background-image:url("https://media.giphy.com/media/xT1XGZndeDLlWvSDaU/giphy.gif");
		animation: text 1s linear initial;
		background-position: center;
		background-size: cover;
		/* padding: 0 10px; */
	}
    .blog .content{
        padding: 50px 0;
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 20px;
    }
    .blog .content .blog_item{
        padding: 15px;
        box-shadow: -2px -2px 5px #eee,2px 2px 5px #eee;
        background: #fff;
        border-radius: 5px;
        display: inline-block;
    }
    .blog_item .details{
        padding: 10px 0;
    }
    .blog_item .details span{
        text-transform: capitalize;
        color: black;
        font-weight: 500;
        margin: 0 2px;
        vertical-align: middle;
    }
	.blog_item .details span:last-child{
		font-size: 13px;
	}
	.blog_item .details span img{
	width: 15px!important;	
	}
	.blog_item .desc h3{
		font-size: 14px!important;
	}
	.blog_item .details span img{
		width: 20px;
	}
    .blog_item .desc{
        padding: 5px 0
    }
    .blog_item .read{
        padding:5px;
        font-size: 14px;
        color: #fff;
        text-transform: capitalize;
        cursor: pointer;
		background: #111;
		border-radius: 5px;
		text-decoration: none;
    }
	.blog_item .read:hover{
		background-color: #fc9;
		color: #000;
	}
    .blog_item .desc h3{
        font-size: 18px;
        text-transform: capitalize;
        font-weight: bold;
        color: black;
    }
    .blog_item .desc p{
        font-size: 15px;
        color: black;
        text-transform: capitalize;
    }
</style>
