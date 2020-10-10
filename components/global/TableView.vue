<template>
  <div>
    <b-table
      ref="table"
      :data="list"
      default-sort-direction="asc"
      :loading="isLoading"
      mobile-cards
      paginated
      pagination-simple
      per-page="10"
      :selected.sync="selected"
      show-detail-icon
      default-sort="name"
      detail-key="name"
      detailed
      selectable
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      @details-open="(row, index) => $buefy.toast.open(`Expanded ${row.name}`)"
    >
      <b-table-column
        v-slot="props"
        custom-key="actions"
        field="name"
        label="Product Name"
        sortable
      >
        <a class="table-link" @click="toggle(props.row)">{{
          props.row.name
        }}</a>
      </b-table-column>
      <b-table-column
        v-slot="props"
        centered
        field="entry_type"
        label="Entry Type"
        sortable
      >
        <span class="bold">
          {{ props.row.entry_type }}
        </span>
      </b-table-column>
      <b-table-column
        v-slot="props"
        centered
        field="category"
        label="Categories"
        sortable
      >
        <template v-for="(cat, index) in props.row.category" tag="p">
          <span :key="index">{{ cat }}</span>
          <!--<span v-if="index < props.row.category.length">,</span>-->
        </template>
      </b-table-column>
      <b-table-column
        v-slot="props"
        centered
        field="licence"
        label="Licences"
        sortable
      >
        <span v-for="(licen, ind) in props.row.licence" :key="ind" class="tag">
          {{ licen }}
          <!--<span v-if="ind < props.row.category.length">,</span>-->
        </span>
      </b-table-column>
      <template slot="detail" slot-scope="props">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p>Product Name: {{ props.row.name }}</p>
              <p>Origin Country: {{ props.row.origin_country }}</p>
              <p>
                Sector:
                <span v-for="(sector, index) in props.row.sector" :key="index">
                  {{ sector }}
                </span>
              </p>
              <p>
                {{ props.row.language.length > 1 ? 'Languages' : 'Language' }}
                <span v-for="(lang, index) in props.row.language" :key="index">
                  {{ lang }}
                  <span v-if="index < props.row.language.length - 1"></span>
                </span>
              </p>
              <hr />
              <p>
                <span>{{ props.row.description }}</span>
              </p>
              <div class="developers">
                Product developed by:
                <ul>
                  <li v-for="(devs, ind) in props.row.developers" :key="ind">
                    <span>
                      <a :href="devs.developer_url" rel="noopener">
                        {{ devs.developer_name }}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div v-if="props.row.maintainers.length > 0">
                Product currently maintained by:
                <ul>
                  <li
                    v-for="(maintainer, ind) in props.row.maintainers"
                    :key="ind"
                  >
                    <span v-if="maintainer.maintainer_url !== ''">
                      <a :href="maintainer.maintainer_url" rel="noopener">
                        {{ maintainer.maintainer_name }}
                      </a>
                    </span>
                    <span v-if="maintainer.maintainer_repository !== ''">
                      Repository:
                      <a
                        :href="maintainer.maintainer_repository"
                        rel="noopener"
                      >
                        click here
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </template>
      <!-- <template slot="empty" slot-scope="props">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <img
                class="is-large"
                src="@/assets/images/emoticon-sad.svg"
                alt="emoticon"
              />
            </p>

            <p class="is-subtitle">
              {{ props.row.name }} has no information available.
            </p>
          </div>
        </section>
      </template> -->
    </b-table>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'Tableview',
  components: {},
  data() {
    return {
      loading: true,
      isEmpty: false,
      isLoading: false,
      currentPage: 1,
      perPage: 10,
      selected: {},
    }
  },

  computed: {
    ...mapGetters({
      products: 'allProducts',
      categories: 'categories',
      licences: 'licences',
      users: 'users',
      sectors: 'sectors',
      countries: 'countries',
      languages: 'languages',
      maintainers: 'maintainers',
      list: 'filteredProducts',
    }),
  },
  watch: {
    list() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 250)
    },
  },

  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    },
  },
})
</script>

<style scoped></style>
