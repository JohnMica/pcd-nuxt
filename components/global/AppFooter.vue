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
            <NuxtLink class="footer-link" to="/">
              <img
                src="~assets/logos/logo.svg"
                alt="PublicCode Directory logo"
                class="mr-2"
                width="35"
                height="35"
              />
              PublicCode Directory
            </NuxtLink>
            <a
              href="https://twitter.com/publiccodedir"
              class="footer-link twitter"
            >
              <img
                src="~/assets/images/twitter.svg"
                class="logo"
                alt="Twitter logo"
                width="30"
                height="30"
              />
            </a>
          </div>
          <div class="column is-12 is-flex justify-end">
            <NuxtLink to="/join-us" class="footer-link">
              Submit Project
            </NuxtLink>
            <NuxtLink to="/contact" class="footer-link">Contact</NuxtLink>
            <NuxtLink to="/cookies" class="footer-link">Cookies</NuxtLink>
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
  // computed: {
  //   footerPages() {
  //     return this.$router
  //   },
  // },
})
</script>

<style scoped></style>
