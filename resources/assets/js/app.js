
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('babel-polyfill')

window.Vue = require('vue');
import VueRouter from 'vue-router';
import routes from './routes';
import App from './components/App.vue'

const TOKEN_KEY = "tarjetareal_token"

Vue.use(VueRouter)

const router = new VueRouter({
    routes
});

Vue.mixin({
    methods:{
        api(url){
            return process.env.MIX_API_URL + url
        },
        saveToken(token){
            window.localStorage.setItem(TOKEN_KEY, token)
        },
        getToken(){
            return window.localStorage.getItem(TOKEN_KEY)
        },
        deleteToken(){
            window.localStorage.removeItem(TOKEN_KEY)
        }
    }
})


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
});
