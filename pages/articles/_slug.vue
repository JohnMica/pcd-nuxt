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
              <h1 class="is-size-2">{{ article.title }}</h1>
              <img
                :src="require(`~/assets/blog-images/${article.image}`)"
                :alt="article.title"
              />
              <div>
                {{ article.intro }}
              </div>
              <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-mobile is-centered is-multiline">
          <div class="column is-12-mobile is-8-tablet is-7-desktop">
            <NuxtContent :document="article"></NuxtContent>
            <PrevNext :prev="prev" :next="next"></PrevNext>
          </div>
          <aside class="column is-hidden-mobile is-3-tablet">
            <AppSearchInput />
          </aside>
        </div>
      </div>
    </section>
    <AppFooter />
  </main>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ArticlePage',
  layout: 'BlogLayout',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
})
</script>

<style scoped></style>
