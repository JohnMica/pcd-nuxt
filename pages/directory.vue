<template>
  <section class="section container">
    <div class="columns is-centered">
      <SidebarComponent />
      <section class="column is-9">
        <div class="columns">
          <div class="column is-12">
            <main class="main-content">
              <div class="content px-1"></div>
              <b-tabs
                v-model="activeTab"
                type="is-toggle"
                position="is-centered"
                destroy-on-hide
              >
                <b-tab-item label="List View" icon="format-list-bulleted">
                  <ListView />
                </b-tab-item>
                <b-tab-item label="Table View" icon="table">
                  <TableView />
                </b-tab-item>
                <b-tab-item label="World Map" icon="map">
                  <WorldMap />
                </b-tab-item>
              </b-tabs>
            </main>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'DirectoryPage',
  layout: 'DirectoryLayout',
  data() {
    return {
      activeTab: 0,
    }
  },
})
</script>

<style scoped></style>
