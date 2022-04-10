<template>
    <head>
        <link
            rel="stylesheet"
            href="../src/assets/fontawesome-free-6.1.1-web/css/all.min.css"
        />
        <link rel="stylesheet" href="../src/assets/style.css" type="text/css" />
    </head>
    <div id="nav">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">Muhammad Reda</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <div class="navbar-nav mr-auto">
                        <RouterLink to="/" class="nav-item nav-link"
                            >Home</RouterLink
                        >
                        <RouterLink to="/About" class="nav-item nav-link"
                            >About</RouterLink
                        >
                        <RouterLink to="/Contact" class="nav-link"
                            >Contact</RouterLink
                        >
                        <RouterLink to="/Android" class="nav-link"
                            >Android</RouterLink
                        >
                    </div>
                </div>
            </nav>
            <div class="icon">
                <ul>
                    <li>
                        <a
                            href="https://www.facebook.com/profile.php?id=100009677568934"
                            target="_blank"
                            ><i class="fab fa-facebook-f" id="facebook"></i
                        ></a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com/1xredha?igshid=YmMyMTA2M2Y="
                            target="_blank"
                            ><i class="fab fa-instagram" id="instagram"></i
                        ></a>
                    </li>
                </ul>
            </div>
        </header>
    </div>
    <router-view />

    <footer class="text-center text-white">
        <div id="copyright">
            © 2022 Copyright: <strong>Muhammad Reda</strong>
        </div>
    </footer>
</template>

<style>
    footer {
        padding-top: 40px;
    }

    #copyright {
        text-align: center;
    }

    #app {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        padding: 2rem;
        font-weight: normal;
        background-color: #272c31;
        font-family: "montserrat", sans-serif;
    }

    #nav {
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        position: relative;
    }

    #nav a {
        font-weight: bold;
        color: #ffffff;
    }
    #nav a i {
        color: black;
    }

    #nav a.router-link-exact-active {
        color: rgb(0, 0, 0);
        background: rgb(28, 65, 66);
        border-radius: 0.5rem;
    }
</style>

<script setup lang="ts">
    import { RouterLink, RouterView } from "vue-router";
</script>
