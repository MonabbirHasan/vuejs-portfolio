<template>
    <header>
        <div class="logo">
            <a href="/"><img src="../assets/ai.png" width="100px" height="100px" alt="FULL-STACK DEVELOPER"/></a>
        </div>
        <div class="top_menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#skills">SKills</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#blog">Blogs</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header-page"
}
</script>

<style>
header {
    width: 100%;
    /* background: #fc9; */
    position: fixed;
    justify-content: space-between;
    align-items: center;
    display: flex;
    z-index: 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
}

header .top_menu {
    padding: 20px;
    background: #fff;
    position: relative;
    top: -18px;
    margin: auto;
    clip-path: polygon(0 0, 100% 0, 96% 100%, 4% 100%);
}

dl,
ol,
ul {
    margin: 0 !important;
    padding: 0 !important;
}

header .top_menu ul li {
    list-style: none;
    display: inline-block;
}

.top_menu ul li a {
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    font-weight: 600;
    padding: 0 10px;
    letter-spacing: 1px;
    transition: .3s;
}

.top_menu ul li a:hover {
    color: #fc9;
    letter-spacing: 1.5px;

}
</style>