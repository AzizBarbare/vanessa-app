import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
function lazyLoad(compo) {
    return() => import (`${compo}`);
}
const router = new Router({
    mode: "history",
    linkActiveClass: "active",
    routes: [
        {
            path: "*",
            name: "/",
            redirect: "/index"
        }, {
            path: "/",
            name: "/index"
        }, {
            path: "/about",
            name: "/about",
            component: lazyLoad("./views/about")
        }, {
            path: "/contact",
            name: "/contact",
            component: lazyLoad("./views/contact")
        }
    ]
});

export default router;
