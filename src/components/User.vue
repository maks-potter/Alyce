<template>
  <v-list-tile>
    <v-list-tile-content>
      <v-list-tile-title>
        {{user.name}} has {{user.apples.length}} apples
      </v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn ripple color="error" :disabled="disabled"
             @click="$emit('grab-apple', user)">
        Grab apple
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  props: ['user', 'disabled'],
};
</script>
