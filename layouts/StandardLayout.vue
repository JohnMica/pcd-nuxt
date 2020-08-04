<template>
  <main>
    <div class="container">
      <navigation-bar></navigation-bar>
    </div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-12">
            <nuxt></nuxt>
          </div>
        </div>
      </div>
    </section>
    <AppFooter></AppFooter>
  </main>
</template>

<script>
export default {
  name: 'StandardLayout',
  data() {
    return {}
  },
}
</script>
