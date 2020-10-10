<template>
  <main>
    <section class="hero is-medium is-gradient">
      <div class="hero-head">
        <div class="container">
          <NavigationBar />
        </div>
      </div>
      <div class="hero-body has-text-centered">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-12 is-half-desktop">
              <Nuxt></Nuxt>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section is-gradient">
      <div class="container">
        <div class="columns is-centered is-multiline">
          <div
            class="column is-12-mobile is-10-tablet is-8-desktop is-6-widescreen is-paddingless"
          >
            <div
              class="homepage-btns has-text-centered is-flex is-paddingless is-marginless justify-center"
            >
              <a href="directory" class="card">
                <span class="card-content">
                  <img
                    src="~/assets/images/directory.svg"
                    alt="directory Image"
                  />
                  <span class="title is-spaced is-5">Directory</span>
                  <span class="subtitle is-6"
                    >Browse the Public Code Directory</span
                  >
                </span>
              </a>
              <a href="join-us" class="card">
                <span class="card-content">
                  <img
                    src="~/assets/images/submit-project.svg"
                    alt="Submit Image"
                  />
                  <span class="title is-spaced is-5">Submit Project</span>
                  <span class="subtitle is-6">
                    Submit your project and be a part of the community.
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </main>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
