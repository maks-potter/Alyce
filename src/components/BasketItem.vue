<template>
  <v-list-tile v-ripple>
    <v-list-tile-content>
      <v-list-tile-title>
        {{ basketItem }}
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: ['basket-item'],
};
</script>
