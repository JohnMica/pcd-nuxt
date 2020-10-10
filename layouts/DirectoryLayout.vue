<template>
  <main>
    <section class="hero is-medium is-gradient">
      <div class="hero-head">
        <div class="container">
          <NavigationBar />
        </div>
      </div>
      <div class="hero-body has-text-centered">
        <div class="columns is-centered is-multiline">
          <div class="column is-12">
            <h1>{{ page.title }}</h1>
          </div>
          <div class="column is-12">
            <TotalProducts />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-12">
            <Nuxt></Nuxt>
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </main>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'StandardLayout',
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
      const page = await this.$content('directory').fetch()
      this.page = page
    },
  },
})
</script>
