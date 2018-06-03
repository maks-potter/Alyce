<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>Users</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn ripple color="success" @click="onFreeApples()">Free Apples</v-btn>
    </v-toolbar>
    <v-progress-linear v-if="!usersList" :indeterminate="true"
                       height="5" class="my-0"></v-progress-linear>
    <v-list v-if="usersList">
      <div v-for="(user, index) in usersList" :key="'user-' + index">
        <user :user="user" :disabled="basketItems && !basketItems.length"
              @grab-apple="onGrabApple"></user>
        <v-divider v-if="index !== usersList.length - 1"></v-divider>
      </div>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import User from './User';

export default {
  components: {
    User,
  },
  computed: {
    ...mapGetters([
      'usersList',
      'basketItems',
    ]),
  },
  methods: {
    createAlertItem(type, text) {
      const alertItem = {
        type,
        text,
      };
      this.$store.dispatch('setAlert', alertItem);
    },
    onGrabApple(user) {
      this.$store.dispatch('grabApple', user.id)
        .then((response) => {
          if (response.data.success) {
            // TODO(4): uncomment next line when TODO(1) will be done
            // this.$store.dispatch('removeBasketItem', response.data.apple.id);

            // TODO(5): remove next line when TODO(1) will be done
            this.$store.dispatch('getBasketData');

            this.$store.dispatch('addApple', user.id, response.data.apple);

            this.createAlertItem('success', `Apples was added to ${user.name}`);
          } else {
            this.createAlertItem('error', response.data.error);
          }
        });
    },
    onFreeApples() {
      this.$store.dispatch('freeBasket')
        .then((response) => {
          if (response.data.success) {
            this.$store.dispatch('getUsersList');
            this.$store.dispatch('getBasketData');

            this.createAlertItem('success', 'Apples was returned to basket');
          } else {
            this.createAlertItem('error', 'An error has occurred please try again later');
          }
        })
      ;
    },
  },
};
</script>
