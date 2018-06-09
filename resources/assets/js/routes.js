import Login from './components/Login.vue'
import Home from './components/Home.vue'
import {requireAuth} from './mixins'

const routes = [
    { path: '/login', component: Login },
    { path: '/home', component: Home, beforeEnter: requireAuth }
];

export default routes;
