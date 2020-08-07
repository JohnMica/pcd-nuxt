<template>
  <form
    id="simplecontact"
    ref="simplecontact"
    name="simplecontact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="simplecontact" />

    <b-field label="Name">
      <b-input v-model="form.name"></b-input>
    </b-field>

    <b-field label="Email">
      <b-input v-model="form.email" type="email" maxlength="50"> </b-input>
    </b-field>

    <b-field label="Subject">
      <b-input v-model="form.subject" type="text"></b-input>
    </b-field>
    <b-field label="Message">
      <b-input v-model="form.message" type="textarea"></b-input>
    </b-field>
    <b-field>
      <b-button type="is-primary" native-type="submit" outlined>
        Send email
      </b-button>
    </b-field>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutPage',
  layout: 'ContactLayout',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      this.$axios.post(
        '/',
        this.encode({
          'form-name': 'simplecontact',
          ...this.form,
        }),
        axiosConfig
      )
    },
  },
})
</script>

<style scoped></style>
