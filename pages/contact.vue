<template>
  <div>
    <ValidationObserver ref="simplecontact" v-slot="{ handleSubmit }">
      <form
        id="simplecontact"
        name="simplecontact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <input type="hidden" name="form-name" value="simplecontact" />
        <input type="hidden" name="bot-field" />
        <ValidationProvider
          v-slot="{ errors, valid }"
          rules="name:3"
          tag="div"
          mode="lazy"
          vid="sendername"
          :skip-if-empty="false"
        >
          <b-field
            label="Name"
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input v-model="form.name" name="name"></b-input>
          </b-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors, valid }"
          rules="email"
          tag="div"
          mode="lazy"
          vid="senderemail"
          :skip-if-empty="false"
        >
          <b-field
            label="Email"
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input
              v-model="form.email"
              type="email"
              name="email"
              maxlength="50"
            >
            </b-input>
          </b-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          tag="div"
          mode="lazy"
          rules="name:3"
          vid="subject"
          :skip-if-empty="true"
        >
          <b-field
            label="Subject"
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0] }"
            :message="errors"
          >
            <b-input
              v-model="form.subject"
              type="text"
              name="subject"
            ></b-input>
          </b-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors, valid }"
          tag="div"
          mode="lazy"
          rules="name:25"
          vid="message"
          :skip-if-empty="false"
        >
          <b-field
            label="Message"
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input
              v-model="form.message"
              type="textarea"
              name="message"
            ></b-input>
          </b-field>
        </ValidationProvider>
        <b-field>
          <b-button type="is-primary" native-type="submit" outlined>
            Send email
          </b-button>
        </b-field>
      </form>
    </ValidationObserver>
    <b-loading :active.sync="sendingForm" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
/* eslint-disable @typescript-eslint/no-unused-vars */

import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default Vue.extend({
  name: 'AboutPage',
  layout: 'ContactLayout',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      sendingForm: false,
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
    onSubmit() {
      this.$refs.simplecontact.validate().then((success) => {
        if (!success) {
        }
      })
      this.sendingForm = true
      const axiosConfig = {
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
        },
      }
      this.$axios
        .post(
          // '/',
          'https://testing-pcd.netlify.app',
          this.encode({
            'form-name': 'simplecontact',
            ...this.form,
          }),
          axiosConfig
        )
        .then((res) => {
          setTimeout(() => {
            this.$nextTick(() => {
              this.sendingForm = false
              this.form = { name: '', email: '', subject: '', message: '' }
              // eslint-disable-next-line no-console
              // console.log('result', res)
              // @ts-ignore
              this.$refs.simplecontact.reset()
            })
            // this.$router.push('/')
          }, 1500)
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
          this.sendingForm = false
        })
    },
  },
})
</script>

<style scoped></style>
