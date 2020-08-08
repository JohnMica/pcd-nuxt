<template>
  <div class="">
    <aside class="aside is-hidden-mobile">
      <b-field label="Search Projects">
        <b-autocomplete
          v-model="name"
          open-on-focus
          placeholder="e.g. Govstrap"
          icon="find-replace"
          clearable
          :data="filteredProductNames"
          @input="updateFilteredItems"
        >
        </b-autocomplete>
      </b-field>
      <div class="is-flex justify-between align-center">
        <span class="label py-2 is-marginless">Filters</span>
        <b-button
          v-if="filtersApplied"
          icon-left="times-circle"
          class="aligh-right is-small"
          @click="clearAllFilters"
        >
          Clear Filters
        </b-button>
      </div>
      <b-field label="Select Country">
        <b-autocomplete
          v-model="country"
          open-on-focus
          :data="filteredDataArray"
          placeholder="e.g. UK"
          icon="find-replace"
          clearable
          @select="(option) => (selected = option)"
          @input="updateFilteredItems"
        >
          <template slot="empty">No results found</template>
        </b-autocomplete>
      </b-field>

      <hr />
      <b-field label="Sectors"> </b-field>
      <b-field>
        <b-checkbox
          :indeterminate="
            checkedSectors.length > 0 && checkedSectors.length < sectors.length
          "
          :value="checkedSectors.length === sectors.length"
          @input="toggleSectors"
        >
          All Sectors
        </b-checkbox>
      </b-field>
      <b-field v-for="(item, inde) in sectors" :key="`sector-${inde}`">
        <b-checkbox
          v-model="checkedSectors"
          :native-value="item"
          @input="updateFilteredItems"
        >
          {{ item }}
        </b-checkbox>
      </b-field>
      <hr />
      <b-field label="Categories"> </b-field>
      <b-field>
        <b-checkbox
          :indeterminate="
            checkedCategories.length > 0 &&
            checkedCategories.length < categories.length
          "
          :value="checkedCategories.length === categories.length"
          @input="toggleCategs"
        >
          All Categories
        </b-checkbox>
      </b-field>
      <b-field v-for="(item, inde) in categories" :key="`categ-${inde}`">
        <b-checkbox
          v-model="checkedCategories"
          :native-value="item"
          @input="updateFilteredItems"
        >
          {{ item }}
        </b-checkbox>
      </b-field>
      <hr />
      <b-field label="Licences"></b-field>
      <b-field>
        <b-checkbox
          :indeterminate="
            checkedLicences.length > 0 &&
            checkedLicences.length < licences.length
          "
          :value="checkedLicences.length === licences.length"
          @input="toggleLicences"
        >
          All Licences
        </b-checkbox>
      </b-field>
      <b-field v-for="(item, inde) in licences" :key="`licence-${inde}`">
        <b-checkbox
          v-model="checkedLicences"
          :native-value="item"
          @input="updateFilteredItems"
        >
          {{ item }}
        </b-checkbox>
      </b-field>
      <hr />
      <b-field label="Languages"></b-field>
      <b-field>
        <b-checkbox
          :indeterminate="
            checkedLang.length > 0 && checkedLang.length < languages.length
          "
          :value="checkedLang.length === languages.length"
          @input="toggleLangs"
        >
          All Languages
        </b-checkbox>
      </b-field>
      <b-field v-for="(item, inde) in languages" :key="`languages-${inde}`">
        <b-checkbox
          v-model="checkedLang"
          :native-value="item"
          @input="updateFilteredItems"
        >
          {{ item }}
        </b-checkbox>
      </b-field>
      <hr />
      <b-field label="Users"></b-field>
      <b-field>
        <b-checkbox
          :indeterminate="
            checkedUsers.length > 0 && checkedUsers.length < users.length
          "
          :value="checkedUsers.length === users.length"
          @input="toggleUsers"
        >
          All Users
        </b-checkbox>
      </b-field>
      <b-field v-for="(item, inde) in users" :key="`users-${inde}`">
        <b-checkbox
          v-model="checkedUsers"
          :native-value="item"
          @input="updateFilteredItems"
        >
          {{ item }}
        </b-checkbox>
      </b-field>
      <hr />
      <b-field label="Maintainers"></b-field>
      <b-field>
        <b-checkbox
          :indeterminate="
            checkedMaintainers.length > 0 &&
            checkedMaintainers.length < maintainers.length
          "
          :value="checkedMaintainers.length === maintainers.length"
          @input="toggleMaintainers"
        >
          All Maintainers
        </b-checkbox>
      </b-field>
      <b-field v-for="(item, inde) in maintainers" :key="`maintainers-${inde}`">
        <b-checkbox
          v-model="checkedMaintainers"
          :native-value="item"
          @input="updateFilteredItems"
        >
          {{ item }}
        </b-checkbox>
      </b-field>
      <hr />
    </aside>
    <button
      class="button is-primary is-medium is-hidden-tablet"
      @click="isComponentModalActive = true"
    >
      Launch component modal
    </button>
    <b-modal
      :active.sync="isComponentModalActive"
      can-cancel
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      width="768"
      aria-modal
      class="is-hidden-tablet"
    >
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Projects Filters</p>
        </header>
        <div class="modal-card-body">
          <b-field label="Search Projects">
            <b-autocomplete
              v-model="name"
              open-on-focus
              placeholder="e.g. Govstrap"
              icon="find-replace"
              clearable
              :data="filteredProductNames"
              @input="updateFilteredItems"
            >
            </b-autocomplete>
          </b-field>
          <div class="is-flex justify-between align-center">
            <span class="label py-2 is-marginless">Filters</span>
            <b-button
              v-if="filtersApplied"
              icon-left="times-circle"
              class="aligh-right is-small"
              @click="clearAllFilters"
            >
              Clear Filters
            </b-button>
          </div>
          <b-field label="Select Country">
            <b-autocomplete
              v-model="country"
              open-on-focus
              :data="filteredDataArray"
              placeholder="e.g. UK"
              icon="find-replace"
              clearable
              @select="(option) => (selected = option)"
              @input="updateFilteredItems"
            >
              <template slot="empty">No results found</template>
            </b-autocomplete>
          </b-field>

          <hr />
          <b-field label="Sectors"> </b-field>
          <b-field>
            <b-checkbox
              :indeterminate="
                checkedSectors.length > 0 &&
                checkedSectors.length < sectors.length
              "
              :value="checkedSectors.length === sectors.length"
              @input="toggleSectors"
            >
              All Sectors
            </b-checkbox>
          </b-field>
          <b-field v-for="(item, inde) in sectors" :key="`sector-mob-${inde}`">
            <b-checkbox
              v-model="checkedSectors"
              :native-value="item"
              @input="updateFilteredItems"
            >
              {{ item }}
            </b-checkbox>
          </b-field>
          <hr />
          <b-field label="Categories"> </b-field>
          <b-field>
            <b-checkbox
              :indeterminate="
                checkedCategories.length > 0 &&
                checkedCategories.length < categories.length
              "
              :value="checkedCategories.length === categories.length"
              @input="toggleCategs"
            >
              All Categories
            </b-checkbox>
          </b-field>
          <b-field
            v-for="(item, inde) in categories"
            :key="`categ-mob-${inde}`"
          >
            <b-checkbox
              v-model="checkedCategories"
              :native-value="item"
              @input="updateFilteredItems"
            >
              {{ item }}
            </b-checkbox>
          </b-field>
          <hr />
          <b-field label="Licences"> </b-field>
          <b-field>
            <b-checkbox
              :indeterminate="
                checkedLicences.length > 0 &&
                checkedLicences.length < licences.length
              "
              :value="checkedLicences.length === licences.length"
              @input="toggleLicences"
            >
              All Licences
            </b-checkbox>
          </b-field>
          <b-field
            v-for="(item, inde) in licences"
            :key="`licence-mob-${inde}`"
          >
            <b-checkbox
              v-model="checkedLicences"
              :native-value="item"
              @input="updateFilteredItems"
            >
              {{ item }}
            </b-checkbox>
          </b-field>
          <hr />
          <b-field label="Languages"> </b-field>
          <b-field>
            <b-checkbox
              :indeterminate="
                checkedLang.length > 0 && checkedLang.length < languages.length
              "
              :value="checkedLang.length === languages.length"
              @input="toggleLangs"
            >
              All Languages
            </b-checkbox>
          </b-field>
          <b-field
            v-for="(item, inde) in languages"
            :key="`languages-mob-${inde}`"
          >
            <b-checkbox
              v-model="checkedLang"
              :native-value="item"
              @input="updateFilteredItems"
            >
              {{ item }}
            </b-checkbox>
          </b-field>
          <hr />
          <b-field label="Users"> </b-field>
          <b-field>
            <b-checkbox
              :indeterminate="
                checkedUsers.length > 0 && checkedUsers.length < users.length
              "
              :value="checkedUsers.length === users.length"
              @input="toggleUsers"
            >
              All Users
            </b-checkbox>
          </b-field>
          <b-field v-for="(item, inde) in users" :key="`users-mob-${inde}`">
            <b-checkbox v-model="checkedUsers" :native-value="item">
              {{ item }}
            </b-checkbox>
          </b-field>
          <hr />
          <b-field label="Maintainers"> </b-field>
          <b-field>
            <b-checkbox
              :indeterminate="
                checkedUsers.length > 0 && checkedUsers.length < users.length
              "
              :value="checkedUsers.length === users.length"
              @input="toggleUsers"
            >
              All Maintainers
            </b-checkbox>
          </b-field>
          <b-field
            v-for="(item, inde) in maintainers"
            :key="`maint-mob-${inde}`"
          >
            <b-checkbox v-model="checkedUsers" :native-value="item">
              {{ item }}
            </b-checkbox>
          </b-field>
          <hr />
        </div>
        <div class="modal-card-foot">
          <button
            class="button is-danger is-outlined"
            @click="isComponentModalActive = false"
          >
            Cancel
          </button>
          <button
            class="button is-info"
            @click="isComponentModalActive = false"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'SidebarComponent',
  data() {
    return {
      name: '',
      country: '',
      checkedSectors: [],
      checkedCategories: [],
      checkedLicences: [],
      checkedUsers: [],
      checkedLang: [],
      checkedMaintainers: [],
      selected: null,
      isComponentModalActive: false,
    }
  },
  computed: {
    filteredDataArray() {
      return this.countries.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .includes(this.country.toLowerCase())
      })
    },
    productNames() {
      const arr = []
      this.allProducts.map((el) => {
        arr.push(el.name)
      })
      return arr
    },
    filteredProductNames() {
      return this.productNames.filter((option) => {
        return option.toString().toLowerCase().includes(this.name.toLowerCase())
      })
    },
    dataToSend() {
      return {
        name: this.name,
        countries: this.country,
        sectors: this.checkedSectors,
        categories: this.checkedCategories,
        licences: this.checkedLicences,
        users: this.checkedUsers,
        languages: this.checkedLang,
        maintainers: this.checkedMaintainers,
        selectedProd: this.selected,
      }
    },
    filtersApplied() {
      return (
        this.checkedSectors.length > 0 ||
        this.checkedCategories.length > 0 ||
        this.checkedLicences.length > 0 ||
        this.checkedUsers.length > 0 ||
        this.checkedLang.length > 0 ||
        this.name.length > 0 ||
        this.country.length > 0
      )
    },
    ...mapGetters({
      countries: 'countries',
      sectors: 'sectors',
      allProducts: 'allProducts',
      categories: 'categories',
      licences: 'licences',
      users: 'users',
      languages: 'languages',
      maintainers: 'maintainers',
    }),
  },
  mounted() {},
  methods: {
    toggleCategs() {
      if (this.checkedCategories.length < this.categories.length) {
        this.checkedCategories = this.categories
      } else {
        this.checkedCategories = []
      }
      this.updateFilteredItems()
    },
    toggleSectors() {
      if (this.checkedSectors.length < this.sectors.length) {
        this.checkedSectors = this.sectors
      } else {
        this.checkedSectors = []
      }
      this.updateFilteredItems()
    },
    toggleLicences() {
      if (this.checkedLicences.length < this.licences.length) {
        this.checkedLicences = this.licences
      } else {
        this.checkedLicences = []
      }
      this.updateFilteredItems()
    },
    toggleUsers() {
      if (this.checkedUsers.length < this.users.length) {
        this.checkedUsers = this.users
      } else {
        this.checkedUsers = []
      }
      this.updateFilteredItems()
    },
    toggleMaintainers() {
      if (this.checkedMaintainers.length < this.maintainers.length) {
        this.checkedMaintainers = this.maintainers
      } else {
        this.checkedMaintainers = []
      }
      this.updateFilteredItems()
    },
    toggleLangs() {
      if (this.checkedLang.length < this.languages.length) {
        this.checkedLang = this.languages
      } else {
        this.checkedLang = []
      }
      this.updateFilteredItems()
    },
    clearAllFilters() {
      this.name = ''
      this.country = ''
      this.checkedSectors = []
      this.checkedCategories = []
      this.checkedLicences = []
      this.checkedUsers = []
      this.checkedLang = []
      this.selected = null
      this.resetItems()
    },
    updateFilteredItems() {
      this.$store.commit('updateFilteredProducts', this.dataToSend)
    },
    resetItems() {
      this.$store.commit('resetProducts')
    },
  },
})
</script>

<style scoped></style>
