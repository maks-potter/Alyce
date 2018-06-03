<template>
  <v-layout row class="mt-5 alerts-container">
    <v-flex xs10 offset-xs1>
      <v-alert
        class="alert-item"
        transition="slide-y-reverse-transition"
        v-for="(alert, index) in alertItems"
        v-model="alert.type"
        :key="alert.type + index"
        :color="alert.type" @click="dismissAlert(alert)">
        {{ alert.text }}
      </v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'alertItems',
    ]),
  },
  methods: {
    dismissAlert(alert) {
      this.$store.dispatch('deleteAlert', alert);
    },
  },
};
</script>

<style lang="stylus" scoped>
  .alerts-container {
    position absolute
    width 100%
    bottom 50px
    z-index 9999
  }

  .alert-item {
    border none
    border-radius 4px
    opacity 0.7
    cursor pointer

    &:hover {
      opacity 1
    }
  }
</style>
