<template>
  <div>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CookiesPage',
  layout: 'DefaultLayout',
  data() {
    return {
      page: {} as any,
    }
  },
  beforeMount() {
    this.fetchPage()
  },
  methods: {
    async fetchPage() {
      const page = await this.$content('cookies').fetch()
      this.page = page
    },
  },
})
</script>

<style scoped></style>
