import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Weather from "../components/Weather.vue";
import About from "../components/About.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/weather",
        name: "Weather",
        component: Weather,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
