<template>
  <main>
    <section class="hero is-medium is-gradient">
      <div class="hero-head">
        <div class="container">
          <navigation-bar></navigation-bar>
        </div>
      </div>
      <div class="hero-body has-text-centered">
        <div class="columns is-centered is-multiline">
          <div class="column is-12">
            <h1>{{ page.title }}</h1>
          </div>
          <div class="column is-12">
            <total-products></total-products>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-12">
            <nuxt></nuxt>
          </div>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'StandardLayout',
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
      const page = await this.$content('directory').fetch()
      this.page = page
    },
  },
})
</script>
