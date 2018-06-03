import Vue from 'vue';
import Vuex from 'vuex';
import alerts from './modules/alerts';
import users from './modules/users';
import basket from './modules/basket';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alerts,
    users,
    basket,
  },
  strict: process.env.NODE_ENV !== 'production',
});
