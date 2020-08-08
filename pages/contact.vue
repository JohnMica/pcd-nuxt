<template>
  <div>
    <validation-observer ref="simplecontact" v-slot="{ handleSubmit }">
      <form
        id="simplecontact"
        name="simplecontact"
        method="post"
        data-netlify="true"
        action="/"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <input type="hidden" name="form-name" value="simplecontact" />
        <input type="hidden" name="bot-field" />
        <validation-provider
          v-slot="{ errors, invalid, valid }"
          rules="name:3"
          tag="div"
          name="sendername"
          vid="sendername"
          :skip-if-empty="false"
        >
          <b-field
            label="Name"
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input v-model="form.name"></b-input>
          </b-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors, invalid, valid }"
          rules="email"
          tag="div"
          name="senderemail"
          :skip-if-empty="false"
        >
          <b-field
            label="Email"
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input v-model="form.email" type="email" maxlength="50">
            </b-input>
          </b-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          tag="div"
          rules="name:3"
          name="subject"
          vid="subject"
          :skip-if-empty="true"
        >
          <b-field
            label="Subject"
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0] }"
            :message="errors"
          >
            <b-input v-model="form.subject" type="text"></b-input>
          </b-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors, invalid, valid }"
          tag="div"
          rules="name:25"
          name="message"
          vid="message"
          :skip-if-empty="false"
        >
          <b-field
            label="Message"
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input v-model="form.message" type="textarea"></b-input>
          </b-field>
        </validation-provider>
        <b-field>
          <b-button type="is-primary" native-type="submit" outlined>
            Send email
          </b-button>
        </b-field>
      </form>
    </validation-observer>
    <b-loading :active.sync="sendingForm" :can-cancel="false"></b-loading>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
// @ts-nocheck
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
    encode(data: any) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    onSubmit() {
      // @ts-ignore
      this.$refs.simplecontact.validate().then((success: any) => {
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
      // @ts-ignore
      this.$axios
        .post(
          '/',
          // 'https://testing-pcd.netlify.app',
          this.encode({
            'form-name': 'simplecontact',
            ...this.form,
          }),
          axiosConfig
        )
        .then((res: any) => {
          setTimeout(() => {
            console.log(
              'form sent',
              this.encode({
                'form-name': 'simplecontact',
                ...this.form,
              })
            )
            this.$nextTick(() => {
              this.sendingForm = false
              this.form = { name: '', email: '', subject: '', message: '' }
              console.log('result', res)
              // @ts-ignore
              this.$refs.simplecontact.reset()
            })
            // this.$router.push('/')
          }, 1500)
        })
        .catch((err: any) => {
          console.log(err)
          this.sendingForm = false
        })
    },
  },
})
</script>

<style scoped></style>
