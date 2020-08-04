<template>
  <form id="simpleForm" ref="simpleForm" @submit.prevent="handleSubmit">
    <b-field label="Name">
      <b-input v-model="name" type="text"></b-input>
    </b-field>

    <b-field label="Email">
      <b-input type="email" value="" maxlength="30"> </b-input>
    </b-field>

    <b-field>
      <b-upload v-model="dropFiles" expanded multiple drag-drop accept=".json">
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon icon="upload" size="is-large"></b-icon>
            </p>
            <p>Drop your files here or click to upload</p>
          </div>
        </section>
      </b-upload>
    </b-field>

    <div class="tags">
      <span
        v-for="(item, index) in dropFiles"
        :key="index"
        class="tag is-primary"
      >
        {{ file.name }}
        <button
          class="delete is-small"
          type="button"
          @click="deleteDropFile(index)"
        ></button>
      </span>
    </div>
    <b-field
      ><!-- Label left empty for spacing -->
      <p class="control">
        <button type="submit" class="button is-primary">
          Send message
        </button>
      </p>
    </b-field>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SimpleForm',
  data() {
    return {
      name: '',
      email: '',
      file: {},
      dropFiles: [],
    }
  },
  methods: {
    deleteDropFile(index: number) {
      this.dropFiles.splice(index, 1)
    },
    handleSubmit() {},
  },
})
</script>

<style scoped></style>
