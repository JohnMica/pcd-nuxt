<template>
  <b-tabs v-model="activeTab" expanded type="is-boxed">
    <b-tab-item
      label="Complete Form"
      icon="format-align-left"
      multiline
      class="py-3"
    >
      <ProgressSteps />
    </b-tab-item>
    <b-tab-item label="Upload File" icon="cloud-upload" class="py-3">
      <SimpleForm />
    </b-tab-item>
    <b-tab-item label="Via Github PR" icon="git" class="py-3">
      <div class="content">
        <NuxtContent :document="page"></NuxtContent>
      </div>
    </b-tab-item>
  </b-tabs>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'JoinUs',
  layout: 'JoinLayout',
  async asyncData({ $content }) {
    const page = await $content('join').fetch()
    return { page }
  },
  data() {
    return {
      activeTab: 0,
    }
  },
})
</script>

<style scoped></style>
