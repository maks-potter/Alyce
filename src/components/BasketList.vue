<template>
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>
        <span>Basket</span>
        <span v-if="basketItems && !basketItems.length"> is empty</span>
        <span v-if="basketItems && basketItems.length"> has {{ basketItems.length }} </span>
        <span v-if="basketItems && basketItems.length">
          apple{{ basketItems.length > 1 ? 's' : '' }}
        </span>
      </v-toolbar-title>
    </v-toolbar>
    <v-progress-linear v-if="!basketItems" :indeterminate="true"
                       height="5" class="my-0"></v-progress-linear>

    <v-list v-if="basketItems">
      <div v-for="(basketItem, index) in basketItems" :key="'basketItem-' + index">
        <basket-item :basket-item="basketItem"></basket-item>
        <v-divider v-if="index !== basketItems.length - 1"></v-divider>
      </div>

      <div v-if="!basketItems.length">
        <v-list-tile v-ripple>
          <v-list-tile-content>
            <v-list-tile-title>
              No more apples
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </div>

    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import BasketItem from './BasketItem';

export default {
  components: {
    BasketItem,
  },
  computed: {
    ...mapGetters([
      'basketItems',
    ]),
  },
};
</script>
