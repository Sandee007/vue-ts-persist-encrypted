import {createRouter, createWebHistory, Router, RouteRecordRaw} from 'vue-router'
import App from "./App.vue";
import Login from "./components/Login.vue";
import HelloWorld from "./components/HelloWorld.vue";

// const Login = { template: '<div>Login</div>' }

// export interface RouteMeta {
//     authRequired: boolean
// }

const routes: Array<RouteRecordRaw> = [
    {path: '/', component: HelloWorld, meta: {authRequired: true}, name: 'Home'},
    {path: '/login', component: Login},
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,

})

export default router
