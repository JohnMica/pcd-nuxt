<template>
  <div>
    <NuxtLink :to="`/blog/author/${author.name}`">
      <img :src="author.img" />
      <div>
        <h4>Author</h4>
        <p>{{ author.name }}</p>
        <p>{{ author.bio }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AuthorComponent',
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
})
</script>
