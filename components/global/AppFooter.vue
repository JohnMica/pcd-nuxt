<template>
  <footer
    id="footer"
    class="footer"
    :class="{
      'has-background-white':
        $route.name === 'index' || $route.name === 'contact',
    }"
  >
    <div class="is-dark has-text-white has-text-centered">
      <div class="container">
        <div class="columns is-centered is-multiline">
          <div class="column is-12 is-flex justify-between">
            <nuxt-link class="footer-link" to="/">
              <img
                src="~assets/logos/logo.svg"
                alt="PublicCode Directory logo"
                class="mr-2"
                width="35"
              />
              PublicCode Directory
            </nuxt-link>
            <a
              href="https://twitter.com/publiccodedir"
              class="footer-link twitter"
            >
              <img
                src="~/assets/images/twitter.svg"
                class="logo"
                alt="Twitter logo"
                width="30"
              />
            </a>
          </div>
          <div class="column is-12 is-flex justify-end">
            <nuxt-link to="/join-us" class="footer-link">
              Submit Project
            </nuxt-link>
            <nuxt-link to="/contact" class="footer-link">Contact</nuxt-link>
            <nuxt-link to="/cookies" class="footer-link">Cookies</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppFooter',
  computed: {
    footerPages() {
      return this.$router
    },
  },
})
</script>

<style scoped></style>
