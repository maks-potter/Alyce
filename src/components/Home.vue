<template>
  <v-container fluid>
    <v-layout row wrap justify-space-between class="ml-0">
      <v-flex xs12 md5>
        <users-list></users-list>
      </v-flex>
      <v-flex xs12 md5>
        <basket-list></basket-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UsersList from './UsersList';
import BasketList from './BasketList';

export default {
  created() {
    this.$store.dispatch('getUsersList');
    this.$store.dispatch('getBasketData');
  },
  components: {
    UsersList,
    BasketList,
  },
};
</script>
