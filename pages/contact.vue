<template>
  <div>
    <validation-observer ref="simplecontact" v-slot="{ handleSubmit }" slim>
      <form
        id="simplecontact"
        name="simplecontact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <input type="hidden" name="form-name" value="simplecontact" />
        <validation-provider
          v-slot="{ errors, invalid, valid }"
          rules="name:3"
          tag="div"
          name="sendername"
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
          v-slot="{ errors, invalid, valid }"
          tag="div"
          :skip-if-empty="true"
        >
          <b-field
            label="Subject"
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input v-model="form.subject" type="text"></b-input>
          </b-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors, invalid, valid }"
          tag="div"
          :skip-if-empty="true"
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
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      // @ts-ignore
      this.$axios
        .post(
          'https://testing-pcd.netlify.app',
          this.encode({
            'form-name': 'simplecontact',
            ...this.form,
          }),
          axiosConfig
        )
        .then((res: any) => {
          setTimeout(() => {
            console.log(
              this.encode({
                'form-name': 'simplecontact',
                ...this.form,
              })
            )

            this.sendingForm = false
            this.form = { name: '', email: '', subject: '', message: '' }
            console.log('result', res)
            // this.$router.push('/')
          }, 1500)
        })
        .catch((err: any) => {
          console.log(err)
        })
    },
  },
})
</script>

<style scoped></style>
