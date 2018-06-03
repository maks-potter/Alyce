import Vue from 'vue';
import UsersList from '@/components/UsersList';

describe('UsersList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(UsersList);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.toolbar__content .toolbar__title').textContent)
      .toEqual('users');
  });
});
