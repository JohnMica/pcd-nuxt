<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :prefetch="false"
      :to="{ name: 'articles-slug', params: { slug: prev.slug } }"
      class="text-primary font-bold hover:underline"
    >
      {{ prev.title }}
    </NuxtLink>
    <NuxtLink
      v-if="next"
      :prefetch="false"
      :to="{ name: 'articles-slug', params: { slug: next.slug } }"
      class="font-bold hover:underline"
    >
      {{ next.title }}
    </NuxtLink>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PrevNext',
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
})
</script>
