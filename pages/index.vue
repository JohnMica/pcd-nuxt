<template>
  <div>
    <h1>{{ page.title }}</h1>
    <NuxtContent :document="page"></NuxtContent>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'MainPage',
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
    async fetchPage() {
      const page = await this.$content('index').fetch()
      this.page = page
    },
  },
})
</script>

<style scoped></style>
