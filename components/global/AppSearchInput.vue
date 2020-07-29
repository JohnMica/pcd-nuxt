<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
    />
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SeachInput',
  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },
  watch: {
    async searchQuery(searchQuery: string) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      // @ts-ignore
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
  },
})
</script>

<style scoped></style>
