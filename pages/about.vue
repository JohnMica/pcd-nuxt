<template>
  <section class="section">
    <div class="container has-padding-top has-padding-bottom">
      <div class="columns is-centered is-multiline">
        <div
          v-for="(feature, ind) in page.features"
          :key="ind"
          class="column is-12 is-12 is-10-tablet is-8-desktop is-7-widescreen features"
        >
          <div class="image-wrapper image">
            <img
              class="feature-image"
              :src="require(`~/assets/images/${feature.image}`)"
              :alt="feature.title"
            />
          </div>
          <div class="feature">
            <h3 class="is-size-3">{{ feature.title }}</h3>
            <p>{{ feature.text }}</p>
          </div>
        </div>
      </div>

      <div
        class="columns is-centered is-multiline has-padding-top has-padding-bottom"
      >
        <div
          class="column is-12 is-10-tablet is-8-desktop is-6-widescreen has-padding-top"
        >
          <p class="subtitle">
            This project was possible due to the following partners and
            contributors.
          </p>
          <h4 class="is-size-4">Partners</h4>
          <div class="images">
            <a
              class="footer-image"
              href="https://publiccode.eu/"
              rel="noopener"
              target="_blank"
            >
              <img
                class="partner-image"
                src="~/assets/logos/public-code-logo.svg"
                alt="Public Code Logo"
              />
            </a>
            <a
              class="footer-image"
              href="https://fsfe.org/"
              rel="noopener"
              target="_blank"
            >
              <img
                class="partner-image"
                :src="require('~/assets/logos/fsfe-logo.svg')"
                alt="FSFE logo"
              />
            </a>
            <a
              class="footer-image"
              href="https://opusvl.com"
              rel="noopener"
              target="_blank"
            >
              <img
                class="partner-image"
                :src="require('~/assets/logos/opusvl-black-logo.svg')"
                alt="OpusVL logo"
              />
            </a>
            <a
              class="footer-image"
              href="https://openuk.uk/"
              rel="noopener"
              target="_blank"
            >
              <img
                class="partner-image"
                :src="require('~/assets/logos/OpenUK-logo.svg')"
                alt="OpenUK"
              />
            </a>
          </div>
        </div>
        <div class="column is-12"></div>
        <div
          class="column is-12 is-10-tablet is-8-desktop is-6-widescreen contributor"
        >
          <h4 class="is-size-4">Contributors</h4>
          <div
            class="columns is-tablet is-centered is-multiline is-variable is-4-mobile is-6-desktop is-10-widescreen"
          >
            <div
              v-for="(item, ind) in page.contributors"
              :key="ind"
              class="column is-12-phone is-4-tablet pa-4"
            >
              <h3 class="is-size-5">{{ item.name }}</h3>
              <p class="subtitle">{{ item.contributor_title }}</p>
              <div class="social-media">
                Contact details:
                <div class="">
                  <span v-if="item.email">
                    <a :href="`mailto:${item.email}`" class="pa-2">
                      <img
                        :src="require(`~/assets/images/email.svg`)"
                        alt="email image"
                        width="24"
                      />
                    </a>
                  </span>
                  <span>
                    <a
                      v-for="(social, i) in item.socialmedia"
                      :key="i"
                      :href="social.link"
                      rel="noopener"
                      target="_blank"
                      class="pa-2 is-inline-flex"
                    >
                      <img
                        :src="require(`~/assets/images/${social.image}`)"
                        alt="social media logo"
                        width="24"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'AboutPage',
  layout: 'AboutLayout',
  async asyncData({ $content, params }) {
    const page = await $content('about', params.slug).fetch()

    return {
      page,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
})
</script>

<style scoped></style>
