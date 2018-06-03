<template>
  <v-toolbar app dark color="blue">
    <v-layout row>
      <v-flex xs12>
        <v-toolbar-title class="ml-5">
          <div class="title-site" @click="goHome()">site</div>
        </v-toolbar-title>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({
        name: 'Home',
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
  .title-site {
    text-transform uppercase;
    cursor pointer;
  }
</style>
