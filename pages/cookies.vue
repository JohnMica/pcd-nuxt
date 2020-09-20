<template>
  <div>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'CookiesPage',
  layout: 'DefaultLayout',
  data() {
    return {
      page: {},
    }
  },
  beforeMount() {
    this.fetchPage()
  },
  methods: {
    async fetchPage({ $content }) {
      const page = await $content('cookies').fetch()
      this.page = page
    },
  },
})
</script>

<style scoped></style>
