<template>
  <validation-observer ref="simpleform" v-slot="{ handleSubmit }" slim>
    <form
      id="simpleform"
      name="simpleform"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <b-input type="hidden" name="form-name" value="simpleform" />
      <b-input type="hidden" value="simpleForm" autocomplete="off"></b-input>
      <b-input type="hidden" :value="randomNonce" autocomplete="off"></b-input>
      <b-input type="hidden" :value="randomId" autocomplete="off"></b-input>
      <validation-provider
        v-slot="{ errors, invalid, valid }"
        tag="div"
        rules="name:5"
      >
        <b-field label="Name">
          <b-input
            v-model="form.name"
            type="text"
            required
            :class="{ 'is-danger': invalid, 'is-success': valid }"
          >
          </b-input>
        </b-field>
        <p v-if="errors.length" class="has-text-danger">
          <small>{{ errors[0] }}</small>
        </p>
      </validation-provider>

      <validation-provider v-slot="{ errors, invalid, valid }" tag="div">
        <b-field label="Email">
          <b-input
            v-model="form.email"
            type="email"
            maxlength="50"
            required
            :class="{ 'is-danger': invalid, 'is-success': valid }"
          >
          </b-input>
        </b-field>
        <p v-if="errors.length" class="has-text-danger">
          <small>{{ errors[0] }}</small>
        </p>
      </validation-provider>
      <validation-provider
        v-slot="{ errors, invalid, valid, validate }"
        rules="mimes:.json"
        tag="div"
      >
        <b-field>
          <b-upload
            v-model="form.dropFiles"
            expanded
            multiple
            drag-drop
            accept=".json"
            required
            :class="{ 'is-danger': invalid, 'is-success': valid }"
            @change="validate"
          >
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
        <span v-if="errors.length" class="has-text-danger"
          ><small>{{ errors[0] }}</small></span
        >
      </validation-provider>
      <div class="tags">
        <span
          v-for="(item, index) in form.dropFiles"
          :key="index"
          class="tag is-primary"
        >
          {{ item.name }}
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
  </validation-observer>
</template>

<script lang="ts">
import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default Vue.extend({
  name: 'SimpleForm',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form: { name: '', email: '', file: {}, dropFiles: [] },
    }
  },
  computed: {
    randomNonce() {
      return (Math.random() * 1e32).toString(24)
    },
    randomId() {
      return (Math.random() * 1e32).toString(20)
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    deleteDropFile(index: number) {
      this.form.dropFiles.splice(index, 1)
    },
    onSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      this.$axios.post(
        '/',
        this.encode({
          'form-name': 'simpleform',
          ...this.form,
        }),
        axiosConfig
      )
    },
  },
})
</script>

<style scoped></style>
