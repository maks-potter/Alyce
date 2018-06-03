<template>
  <v-app>
    <app-alerts></app-alerts>
    <app-toolbar></app-toolbar>
    <app-router-content></app-router-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppToolbar from './components/AppToolbar';
import AppRouterContent from './components/AppRouterContent';
import AppFooter from './components/AppFooter';
import AppAlerts from './components/AppAlerts';

export default {
  components: {
    AppAlerts,
    AppToolbar,
    AppRouterContent,
    AppFooter,
  },
  name: 'App',
};
</script>

<style lang="stylus">
  @import './assets/styles/index.styl';
</style>
