import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
    rtl: true
});

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app');
