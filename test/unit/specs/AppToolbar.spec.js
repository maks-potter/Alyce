import Vue from 'vue';
import AppToolbar from '@/components/AppToolbar';

describe('AppToolbar.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AppToolbar);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.title-site').textContent)
      .toEqual('site');
  });
});
