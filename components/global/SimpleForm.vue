<template>
  <div>
    <b-loading :active.sync="sendingForm" :can-cancel="false"></b-loading>
    <validation-observer ref="simpleform" v-slot="{ handleSubmit }" slim>
      <form
        id="simpleform"
        name="simpleform"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="post"
        novalidate
        enctype="multipart/form-data"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <input type="hidden" name="form-name" value="simpleform" />

        <validation-provider
          v-slot="{ errors, invalid, valid }"
          tag="div"
          rules="name:3"
          name="sendername"
          :skip-if-empty="false"
        >
          <b-field
            label="Name"
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input v-model="form.name" type="text" required> </b-input>
          </b-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors, invalid, valid }"
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
            <b-input v-model="form.email" type="email" maxlength="50" required>
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
          name="fileupload"
          :skip-if-empty="false"
        >
          <b-field
            v-bind="$attrs"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
            label="Upload .json file"
          >
            <b-upload
              ref="file"
              v-model="dropFiles"
              name="attach"
              expanded
              multiple
              drag-drop
              accept=".json"
              required
              :class="{ 'is-danger': invalid, 'is-success': valid }"
              @change="addFile"
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
      dropFiles: [],
      sendingForm: false,
    }
  },
  computed: {},
  methods: {
    addFile() {
      this.form.files = this.dropFiles
    },

    encode(data: any) {
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
        header: { 'Content-Type': 'multipart/form-data' },
      }
      // @ts-ignore
      this.$axios
        .post(
          'https://testing-pcd.netlify.app',
          this.encode({
            'form-name': 'simpleform',
            ...this.form,
          }),
          axiosConfig
        )
        .then((res: any) => {
          setTimeout(() => {
            this.sendingForm = false
            console.log('result', res)
            this.$router.push('/')
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
