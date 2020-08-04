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
            <h2 class="is-size-2">{{ page.title }}</h2>
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
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-12 is-half-desktop">
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
  name: 'JoinLayout',
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
      const page = await this.$content('join').fetch()
      this.page = page
    },
  },
})
</script>

<style scoped></style>
