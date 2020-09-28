import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes.js'
import {store} from '../store/store.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'



Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuetify);

const router =new VueRouter({
routes,
mode:"history",
});

new Vue({
  vuetify:new Vuetify(),
  store,
  router,
  render: h => h(App),
}).$mount('#app')
