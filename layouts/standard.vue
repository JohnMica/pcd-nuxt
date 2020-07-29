<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'StandardLayout',
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
      ],
    }
  },
}
</script>
