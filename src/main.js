import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';
import store from './store/store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(Vuetify,
  {
    rtl: true,
  });

new Vue({
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');
