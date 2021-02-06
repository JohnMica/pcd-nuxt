<template>
  <div>
    <div>
      You can download a template json file from
      <a href="/resources/entry.json" download>entry.json</a>
    </div>
    <ValidationObserver ref="simpleform" v-slot="{ handleSubmit }">
      <form
        id="simpleform"
        name="simpleform"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="POST"
        novalidate
        enctype="multipart/form-data"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <input type="hidden" name="form-name" value="simpleform" />
        <input type="hidden" name="bot-field" />
        <ValidationProvider
          v-slot="{ errors, valid }"
          tag="div"
          mode="lazy"
          rules="name:3"
          vid="sendername"
          :skip-if-empty="false"
        >
          <b-field
            label="Name"
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input
              v-model="form.name"
              type="text"
              name="name"
              required
              placeholder="eg: John Smith"
            >
            </b-input>
          </b-field>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors, valid }"
          tag="div"
          mode="lazy"
          rules="email"
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
              required
              placeholder="eg: user@example.com"
            >
            </b-input>
          </b-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors, invalid, valid }"
          tag="div"
          mode="lazy"
          rules="mimes:.json"
          vid="file"
          :skip-if-empty="false"
        >
          <b-field
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-upload
              ref="file"
              v-model="dropFiles"
              name="files"
              expanded
              multiple
              drag-drop
              accept=".json"
              required
              :class="{ 'is-danger': invalid, 'is-success': valid }"
              @input="processFile()"
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
        </ValidationProvider>
        <div class="tags">
          <span
            v-for="(item, index) in dropFiles"
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
        <b-field>
          <p class="control">
            <button type="submit" class="button is-primary">
              Send message
            </button>
          </p>
        </b-field>
      </form>
    </ValidationObserver>
    <b-loading :active.sync="sendingForm" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
/* eslint-disable no-console */
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
      form: { name: '', email: '', files: [] },
      defaultForm: { name: '', email: '', files: [] },
      dropFiles: [],
      sendingForm: false,
    }
  },
  computed: {},
  methods: {
    processFile() {
      this.$nextTick(() => {
        this.form.files = this.dropFiles
      })
    },

    encode(data) {
      const formData = new FormData()
      for (const key of Object.keys(data)) {
        if (key === 'files') {
          formData.append(key, data[key][0])
        } else {
          formData.append(key, data[key])
        }
      }
      return formData
    },
    deleteDropFile(index) {
      this.form.files.splice(index, 1)
    },
    onSubmit() {
      this.$refs.simpleform.validate().then((success) => {
        if (!success) {
        }
      })
      this.sendingForm = true
      const axiosConfig = {
        header: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      }

      this.$axios
        .post(
          // '/',
          'https://testing-pcd.netlify.app',
          this.encode({
            'form-name': 'simpleform',
            ...this.form,
          }),
          axiosConfig
        )
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((res) => {
          setTimeout(() => {
            this.$nextTick(() => {
              this.sendingForm = false
              this.form = Object.assign({}, this.defaultForm)
              this.dropFiles = []
              this.$refs.simpleform.reset()
            })
            // console.log('result', res)
            // this.$router.push('/')
          }, 1500)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
})
</script>

<style scoped></style>
