<template>
  <section class="section container">
    <div class="columns is-centered">
      <sidebar-component></sidebar-component>
      <section class="column is-9">
        <div class="columns">
          <div class="column is-12">
            <main class="main-content">
              <div class="content px-1"></div>
              <b-tabs type="is-toggle" position="is-centered" destroy-on-hide>
                <b-tab-item label="List View" icon="format-list-bulleted">
                  <list-view></list-view>
                </b-tab-item>
                <b-tab-item label="Table View" icon="table">
                  <table-view></table-view>
                </b-tab-item>
                <b-tab-item label="World Map" icon="map">
                  <world-map></world-map>
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
})
</script>

<style scoped></style>
