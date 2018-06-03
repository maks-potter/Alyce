const state = {
  alertItems: [],
};

const getters = {
  alertItems: state => state.alertItems,
};

const mutations = {
  setAlertItem: (state, alertItem) => {
    state.alertItems.push(alertItem);
  },
  deleteAlertItem: (state, alertItem) => {
    state.alertItems = state.alertItems.filter(_alertItem => _alertItem !== alertItem);
  },
};

const actions = {
  setAlert: ({ commit }, alertItem) => {
    const obj = {};
    obj.type = alertItem.type ? alertItem.type : 'error';
    obj.text = alertItem.text ? alertItem.text : 'An error has occurred';

    commit('setAlertItem', alertItem);

    setTimeout(() => {
      commit('deleteAlertItem', alertItem);
    }, 5000);
  },
  deleteAlert: ({ commit }, alertItem) => {
    commit('deleteAlertItem', alertItem);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
