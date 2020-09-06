<template>
  <div>
    <validation-observer ref="simpleform" v-slot="{ handleSubmit }">
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
        <validation-provider
          v-slot="{ errors, valid }"
          tag="div"
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
            <b-input v-model="form.name" type="text" name="name" required>
            </b-input>
          </b-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors, valid }"
          tag="div"
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
            >
            </b-input>
          </b-field>
        </validation-provider>
        <!-- <b-field class="file">
          <b-upload v-model="form.file">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>Click to upload</span>
            </a>
          </b-upload>
          <span v-if="form.file" class="file-name">
            {{ form.file.name }}
          </span>
        </b-field> -->
        <validation-provider
          v-slot="{ errors, invalid, valid }"
          rules="mimes:.json"
          tag="div"
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
        </validation-provider>
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
    <b-loading :active.sync="sendingForm" :can-cancel="false"></b-loading>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-console */
// @ts-nocheck
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
      form: { name: 'my name', email: 'my@test.com', files: [] },
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

    encode(data: any) {
      const formData = new FormData()
      for (const key of Object.keys(data)) {
        if (key === 'files') {
          console.log(data[key])

          formData.append(key, data[key][0])
        } else {
          formData.append(key, data[key])
        }
      }
      return formData
    },
    deleteDropFile(index: number) {
      this.form.files.splice(index, 1)
    },
    onSubmit() {
      // @ts-ignore
      this.$refs.simpleform.validate().then((success: any) => {
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
      console.log(
        'data',
        this.encode({
          'form-name': 'simpleform',
          ...this.form,
        })
      )

      // @ts-ignore
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
        .then((res: any) => {
          setTimeout(() => {
            this.$nextTick(() => {
              this.sendingForm = false
              this.form = Object.assign({}, this.defaultForm)
              this.dropFiles = []
              // @ts-ignore
              this.$refs.simpleform.reset()
            })
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
