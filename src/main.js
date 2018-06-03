import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import store from './store/index';
import constants from './constants/constants';

Vue.use(VueResource);
Vue.use(Vuetify);

Vue.config.productionTip = false;
Vue.http.options.root = constants.ENDPOINT;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App),
});
