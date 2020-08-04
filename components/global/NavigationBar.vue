<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="~assets/logos/logo.svg"
          alt="PublicCode Directory logo"
          class="mr-2"
          width="35"
        />
        PublicCode Directory
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item label="Directory" href="/directory">
        Directory
      </b-navbar-item>
      <b-navbar-item label="About us" href="/about">
        About us
      </b-navbar-item>
      <b-navbar-dropdown label="Blog" href="#">
        <b-navbar-item
          v-for="page of pages"
          :key="page.slug"
          :href="`/articles/${page.slug}`"
        >
          {{ page.title }}
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item label="Submit Porject" href="/join-us">
        Submit Project
      </b-navbar-item>
      <b-navbar-item label="Contact" href="/contact">
        Contact
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavigationBar',
  data() {
    return {
      pages: [] as any[],
    }
  },
  beforeCreate() {
    this.$store.dispatch('fetchLinks')
  },
  mounted() {
    this.fetchArticles()
  },
  methods: {
    async fetchArticles() {
      const pages = await this.$content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'desc')
        .fetch()
      // @ts-ignore
      this.pages = pages
    },
  },
})
</script>

<style lang="scss" scoped>
.mr-2 {
  margin-right: 0.75rem;
}
</style>
