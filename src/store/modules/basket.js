import Vue from 'vue';

const state = {
  basketItems: null,
};

const getters = {
  basketItems: state => state.basketItems,
};

const mutations = {
  setBasketData: (state, data) => {
    state.basketItems = data;
  },
  // TODO(3): can use when TODO(1) will be done
  removeBasketItem: (state, basketItemId) => {
    state.basketItems = state.basketItems.filter(_basketItem => _basketItem.id !== basketItemId);
  },
};

const actions = {
  getBasketData: ({ commit }) => {
    // TODO(1): improve API '/basket' - add id to per item in array of apples
    Vue.http.get('basket')
      .then((response) => {
        commit('setBasketData', response.data);
      });
  },
  freeBasket: () => Vue.http.get('apples/free'),
  // TODO(2): can use when TODO(1) will be done
  removeBasketItem: ({ commit }, basketItemId) => {
    commit('removeBasketItem', basketItemId);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
