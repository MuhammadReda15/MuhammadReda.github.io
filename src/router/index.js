import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/About",
            name: "About",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/Contact",
            name: "Contact",
            component: () => import("../views/Contact.vue"),
        },
        {
            path: "/Android",
            name: "Android",
            component: () => import("../views/Android.vue"),
        },
        {
            path: "/Task1",
            name: "Task1",
            component: () => import("../views/Task1.vue"),
        },
        {
            path: "/Task2",
            name: "Task2",
            component: () => import("../views/Task2.vue"),
        },
        {
            path: "/Task3",
            name: "Task3",
            component: () => import("../views/Task3.vue"),
        },
        {
            path: "/Task4",
            name: "Task4",
            component: () => import("../views/Task4.vue"),
        },
        {
            path: "/Task5",
            name: "Task5",
            component: () => import("../views/Task5.vue"),
        },
        {
            path: "/Task6",
            name: "Task6",
            component: () => import("../views/Task6.vue"),
        },
    ],
});

router.beforeEach((to, _from, next) => {
    console.log(to);
    document.title = "Muhammad Reda";
    next();
});

export default router;
