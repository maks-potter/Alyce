import Vue from 'vue';

const state = {
  usersList: null,
};

const getters = {
  usersList: state => state.usersList,
};

const mutations = {
  setUsersList: (state, data) => {
    state.usersList = data;
  },
  addApple: (state, userId, apple) => {
    const foundUser = state.usersList.find(_user => _user.id === userId);
    foundUser.apples.push(apple);
  },
};

const actions = {
  getUsersList: ({ commit }) => {
    Vue.http.get('users')
      .then((response) => {
        commit('setUsersList', response.data);
      });
  },
  addApple: ({ commit }, userId, apple) => {
    commit('addApple', userId, apple);
  },
  /* eslint-disable no-unused-vars */
  grabApple: ({ commit }, userId) => Vue.http.get(`users/${userId}/grab`),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
