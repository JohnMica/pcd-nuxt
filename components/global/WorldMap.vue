<template>
  <div class="map-container">
    <client-only>
      <div ref="mapWrapper" class="map-wrapper">
        <l-map
          ref="map"
          :max-zoom="maxZoom"
          :min-zoom="minZoom"
          :zoom="zoom"
          :center="center"
          style="height: 350px"
        >
          <l-tile-layer :url="url"> </l-tile-layer>
          <l-marker
            v-for="(marker, id) in locations"
            :key="id"
            :lat-lng="marker.position"
            @popupopen="udpateSelectedMapObj(marker)"
            @popupclose="removeSelection(marker)"
          >
            <l-popup :content="marker.attribution"> </l-popup>
          </l-marker>
        </l-map>
      </div>
    </client-only>
    <div v-if="showObjectMap" class="card">
      <header class="card-header">
        <div class="card-header-title">
          <div class="column">
            <img
              v-if="selectedMapObj.logo_url"
              class="small-logo"
              :src="selectedMapObj.logo_url"
              :alt="`${selectedMapObj.name} logo`"
            />
          </div>
          <div class="column has-text-right">
            <p v-for="(licence, ind) in selectedMapObj.licence" :key="ind">
              <span> {{ licence }}</span>
            </p>
          </div>
        </div>
      </header>
      <div class="card-content">
        <div class="content">
          <p class="content-title title">
            {{ selectedMapObj.name }}
          </p>
          <p class="content-text">
            Origin Country:
            <span class="is-bold"> {{ selectedMapObj.originCountry }}</span>
          </p>

          <p class="content-text">
            {{ selectedMapObj.sector.length === 1 ? 'Sector' : 'Sectors' }}:
            <span
              v-for="(sector, index) in selectedMapObj.sector"
              :id="`selecter-sector-${index}`"
              :key="index"
              class="tag"
            >
              {{ sector }}
            </span>
          </p>
          <p class="content-text is-flex is-between">
            <a
              :href="selectedMapObj.official_url"
              rel="noopener"
              class="project-link"
            >
              Visit Project Site
            </a>
            <a
              :href="selectedMapObj.repository"
              rel="noopener"
              class="project-link"
            >
              Project Repository
            </a>
          </p>
          <p v-if="!showMore" class="content-text">
            {{ selectedMapObj.description | truncate(150) }}
          </p>
          <div v-else class="content-text">
            <p>{{ selectedMapObj.description }}</p>
            <p>
              {{
                selectedMapObj.category.length === 1
                  ? 'Category'
                  : 'Categories'
              }}:
              <span
                v-for="(prod_categ, index) in selectedMapObj.category"
                :id="`categ-${index}`"
                :key="index"
                class="tag"
              >
                {{ prod_categ }}
              </span>
            </p>

            <p>
              Developed by:
              <span v-for="(dev, ind) in selectedMapObj.developers" :key="ind">
                <a :href="dev.name" rel="noopener">
                  {{ dev.name }}
                </a>
              </span>
            </p>
            <p v-if="selectedMapObj.maintainers.length > 0">
              Maintained by:
              <span
                v-for="(maintainer, ind) in selectedMapObj.maintainers"
                :key="ind"
              >
                <a :href="maintainer.url" rel="noopener">
                  {{ maintainer.name }}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a
          v-if="!showMore"
          href="#"
          class="card-footer-item"
          @click.prevent="showMore = !showMore"
        >
          Show More
        </a>
        <a
          v-else
          href="#"
          class="card-footer-item"
          @click.prevent="showMore = !showMore"
        >
          Show Less
        </a>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable camelcase */
import Vue, { PropOptions } from 'vue'
import { mapGetters } from 'vuex'
interface ProductInterface {
  name: string
  category: any[]
  description: string
  developers: any[]
  entry_type: string
  language: string[]
  licence: string[]
  logo_url: string
  maintainers: any[]
  official_url: string
  origin_country: string
  repository: string
  sector: string[]
  showMore: boolean
  users: any[]
}
interface MarketObject {
  id: number
  position: any[]
  url: string
  logo: string
  name: string
  attribution: string
}
export default Vue.extend({
  name: 'WorldMap',
  data() {
    return {
      zoom: 1,
      center: [51.5285582, -0.2416811],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' as string,
      locations: [] as any[],
      minZoom: 1,
      maxZoom: 13,
      showObjectMap: false,
      selectedMapObj: {
        name: '',
        category: [],
        description: '',
        developers: [],
        entry_type: '',
        language: [],
        licence: [],
        logo_url: '',
        maintainers: [],
        official_url: '',
        origin_country: '',
        repository: '',
        sector: [],
        showMore: false,
        users: [],
      } as PropOptions<ProductInterface>,
      defaultEmptyMapObj: {
        name: '',
        category: [],
        description: '',
        developers: [],
        entry_type: '',
        language: [],
        licence: [],
        logo_url: '',
        maintainers: [],
        official_url: '',
        origin_country: '',
        repository: '',
        sector: [],
        showMore: false,
        users: [],
      } as PropOptions<ProductInterface>,
      showMore: false,
    }
  },
  computed: {
    ...mapGetters({
      products: 'allProducts',
      countries: 'countries',
      categories: 'categories',
      sectors: 'sectors',
      users: 'users',
      languages: 'languages',
      list: 'filteredProducts',
    }),
  },

  watch: {
    list() {
      const loadingComponent = this.$buefy.loading.open({
        // @ts-ignore
        container: this.$refs.mapWrapper.$el,
      })
      setTimeout(() => {
        loadingComponent.close()
        this.makeLocations()
        // @ts-ignore
        this.$refs.map.mapObject._onResize()
      }, 150)
    },
  },
  mounted() {
    this.$nextTick(() => {
      const loadingComponent = this.$buefy.loading.open({
        // @ts-ignore
        container: this.$refs.mapWrapper.$el,
      })
      setTimeout(() => {
        loadingComponent.close()
        this.makeLocations()
        // @ts-ignore
        this.$refs.map.mapObject._onResize()
      }, 500)
    })
  },
  methods: {
    makeLocations() {
      this.locations = []
      for (let index = 0; index < this.list.length; index++) {
        this.list[index].users.forEach((user: any) => {
          if (
            user.user_name !== '' &&
            user.user_geolocation &&
            user.user_geolocation.lat &&
            user.user_geolocation.long
          ) {
            const newUser = {
              id: index,
              position: [user.user_geolocation.lat, user.user_geolocation.long],
              url: user.user_url,
              logo: user.user_logo_url ? user.user_logo_url : '',
              name: user.user_name,
              attribution: `<div class='is-flex is-column has-text-centered'><img src='${user.user_logo_url}' class='small-logo'/>  ${user.user_name}</div>`,
            } as PropOptions<MarketObject>
            this.locations.push(newUser)
          }
        })
      }
    },
    udpateSelectedMapObj(marker: any) {
      this.showObjectMap = false
      Object.assign(
        this.selectedMapObj,
        this.list.filter((el: any) =>
          el.users.some((item: any) => item.user_name === marker.name)
        )[0]
      )
      this.showObjectMap = true
    },
    removeSelection(marker: any) {
      this.showObjectMap = false
      // @ts-ignore
      if (this.selectedMapObj.name === marker.name) {
        this.selectedMapObj = Object.assign({}, this.defaultEmptyMapObj)
      }
    },
  },
})
</script>

<style scoped></style>
