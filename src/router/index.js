import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("@/pages/Home.vue");
const NotFound = () => import("@/pages/NotFound.vue");
const routes = [
    { path: "/", component: Home, name: "home" },
    { path: "*", component: NotFound, name: "notfound" },
];

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

router.beforeEach(async (to, from, next) => {
    // ...do you thing
    next()
})



export default router;
