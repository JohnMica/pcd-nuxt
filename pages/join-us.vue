<template>
  <b-tabs expanded type="is-boxed">
    <b-tab-item label="Complete Form" icon="align-left" multiline class="py-3">
      <progress-steps></progress-steps>
    </b-tab-item>
    <b-tab-item label="Upload File" icon="cloud-upload-alt" class="py-3">
      <simple-form></simple-form>
    </b-tab-item>
    <b-tab-item label="Via Github PR" icon="video" class="py-3">
      <div class="content">
        <nuxt-content :document="page"></nuxt-content>
      </div>
    </b-tab-item>
  </b-tabs>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'JoinUs',
  layout: 'JoinLayout',
  async asyncData({ $content }) {
    const page = await $content('join').fetch()
    return { page }
  },
})
</script>

<style scoped></style>
