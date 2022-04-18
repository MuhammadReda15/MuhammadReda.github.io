<template>
    <head>
        <link
            rel="stylesheet"
            href="../src/assets/fontawesome-free-6.1.1-web/css/all.min.css"
        />
        <link rel="stylesheet" href="../src/assets/style.css" type="text/css" />
        <link rel="stylesheet" href="../src/assets/nav.css" type="text/css" />
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
                        <RouterLink
                            to="/"
                            class="nav-item nav-link"
                            id="linkhover"
                            >Home</RouterLink
                        >
                        <RouterLink
                            to="/Android"
                            class="nav-link"
                            id="linkhover"
                            >Android</RouterLink
                        >
                        <RouterLink
                            to="/About"
                            class="nav-item nav-link"
                            id="linkhover"
                            >About</RouterLink
                        >
                        <RouterLink
                            to="/Contact"
                            class="nav-link"
                            id="linkhover"
                            >Contact</RouterLink
                        >
                    </div>
                </div>
            </nav>
        </header>
    </div>
    <router-view />

    <footer class="text-center text-white" id="footer">
        <div class="icon" id="icon">
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
                <li>
                    <a
                        href="https://www.facebook.com/profile.php?id=100009677568934"
                        target="_blank"
                        ><i class="fab fa-twitter" id="twitter"></i
                    ></a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/profile.php?id=100009677568934"
                        target="_blank"
                        ><i class="fab fa-github" id="github"></i
                    ></a>
                </li>
            </ul>
        </div>

        <div id="copyright">
            © 2022 Copyright: <strong>Muhammad Reda</strong>
        </div>
    </footer>
</template>

<style>
    #footer {
        text-align: center;
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
</style>

<script setup lang="ts">
    import { RouterLink, RouterView } from "vue-router";
</script>
