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
            <ol class="header-join-list">
              <li>
                <span class="number-circle">1</span>
                <span class="desc">Submit a project</span>
              </li>
              <li>
                <span class="number-circle">2</span>
                <span class="desc">We review your submission</span>
              </li>
              <li>
                <span class="number-circle">3</span>
                <span class="desc"
                  >We include your project in our listings</span
                >
              </li>
            </ol>
          </div>
          <div class="column is-12 join-page-content">
            <NuxtContent :document="page"></NuxtContent>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered is-multiline has-background-white">
          <div class="column is-12 is-10-tablet is-8-desktop is-6-widescreen">
            <Nuxt></Nuxt>
          </div>
        </div>
        <!-- <div class="columns is-compensating"></div> -->
      </div>
    </section>

    <AppFooter />
  </main>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactLayout',
  data() {
    return {
      page: {},
    }
  },
  mounted() {
    this.fethPage()
  },
  methods: {
    async fethPage() {
      const page = await this.$content('contact').fetch()
      this.page = page
    },
  },
})
</script>

<style scoped></style>
