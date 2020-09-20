<template>
  <p class="subtitle">
    We index a total of
    <span class="is-size-3"> {{ totalProducts }} </span> products, used by
    <span class="is-size-3">
      {{ totalUsers }}
    </span>
    users worldwide.
  </p>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'TotalProducts',
  computed: {
    totalUsers() {
      return this.$store.state.users.length
    },
    totalProducts() {
      return this.$store.state.products.length
    },
  },
})
</script>

<style scoped></style>
