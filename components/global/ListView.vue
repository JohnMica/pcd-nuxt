<template>
  <div class="wrapper">
    <div class="prod">
      <div
        v-for="(product, index) in filteredProducts"
        :key="index"
        class="card"
      >
        <header class="card-header">
          <div class="card-header-title columns is-multiline">
            <div class="column is-12-mobile is-6-tablet py-0">
              <img
                v-if="product.logo_url"
                class="small-logo"
                :src="product.logo_url"
                :alt="`${product.name} logo`"
              />
            </div>
            <div class="column has-text-right is-12-mobile is-6-tablet py-0">
              <p v-for="(licence, ind) in product.licence" :key="ind">
                <span> {{ licence }}</span>
              </p>
            </div>
          </div>
        </header>
        <div class="card-content">
          <div class="content">
            <p class="content-title title">
              {{ product.name }}
            </p>
            <p class="content-text">
              Origin Country:
              <span class="is-bold"> {{ product.origin_country }}</span>
            </p>

            <p class="content-text">
              {{ product.sector.length > 1 ? 'Sectors:' : 'Sector: ' }}
              <span
                v-for="(sector, inde) in product.sector"
                :key="inde"
                class="tag"
              >
                {{ sector }}
                <span v-if="inde < product.sector.length - 1">,</span>
              </span>
            </p>
            <p class="content-text is-flex is-between">
              <a
                :href="product.official_url"
                rel="noopener"
                class="project-link"
              >
                Visit Project Site
              </a>
              <a :href="product.repository" rel="noopener" class="project-link">
                Project Repository
              </a>
            </p>
            <p
              v-if="!product.showMore && product.description"
              class="content-text"
            >
              {{ product.description | truncate(150) }}
            </p>
            <div v-else class="content-text">
              {{ product.description }}
              <p>
                {{ product.category.length > 1 ? 'Categories' : 'Category' }}
                <span
                  v-for="(prod_categ, inde) in product.category"
                  :key="inde"
                  class="tag"
                >
                  {{ prod_categ }}
                  <span v-if="inde < product.category.length - 1">,</span>
                </span>
              </p>

              <p>
                Developed by:
                <span v-for="(dev, ind) in product.developers" :key="ind">
                  <a :href="dev.name" rel="noopener">
                    {{ dev.developer_name }}
                  </a>
                  <span v-if="ind < product.developers.length - 1">,</span>
                </span>
              </p>
              <p v-if="product.maintainers.length > 0">
                Maintained by:
                <span
                  v-for="(maintainer, ind) in product.maintainers"
                  :key="ind"
                >
                  <a :href="maintainer.url" rel="noopener">
                    {{ maintainer.maintainer_name }}
                  </a>
                  <span v-if="ind < product.maintainers.length - 1">,</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <a
            v-if="!product.showMore"
            href="#"
            class="card-footer-item"
            @click.prevent="$emit('show-hide', product.name, true)"
          >
            Show More
          </a>
          <a
            v-else
            href="#"
            class="card-footer-item"
            @click.prevent="$emit('show-hide', product.name, false)"
          >
            Show Less
          </a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'ListView',

  computed: {
    ...mapGetters({
      products: 'allProducts',
      countries: 'countries',
      categories: 'categories',
      licences: 'licences',
      sectors: 'sectors',
      filteredProducts: 'filteredProducts',
    }),
  },
  mounted() {
    this.$on('show-hide', (name: any, value: any) => {
      this.$store.commit('showHideMore', { name, value })
    })
  },
  beforeDestroy() {
    this.$off()
  },
})
</script>

<style scoped></style>
