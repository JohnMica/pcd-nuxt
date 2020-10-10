<template>
  <main>
    <section class="hero is-medium is-gradient">
      <div class="hero-head">
        <div class="container">
          <NavigationBar />
        </div>
      </div>
      <div class="hero-body has-text-centered">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-12 is-half-desktop">
              <NuxtContent :document="page"></NuxtContent>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Nuxt></Nuxt>

    <AppFooter />
  </main>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutLayout',
  data() {
    return {
      page: {},
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const page = await this.$content('about').fetch()
      this.page = page
    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
})
</script>
