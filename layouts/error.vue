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
            <div
              class="column is-12 is-half-desktop is-flex align-center justify-center"
            >
              There was an error. you can try again or
              <b-button
                type="is-primary"
                class="is-outlined ml-4"
                @click="$router.go(-1)"
              >
                Go Back
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section is-gradient is-margin-negative">
      <div class="columns is-centered is-multiline">
        <div
          class="column is-10 is-8-desktop has-text-centered is-flex justify-center homepage-btns"
        >
          <a href="directory" class="card">
            <div class="card-content">
              <img src="~/assets/images/directory.svg" alt="directory Image" />
              <p class="title is-spaced is-4">Directory</p>
              <p class="subtitle is-6">Browse the Public Code Directory</p>
            </div>
          </a>
          <a href="join-us" class="card">
            <div class="card-content">
              <img
                src="~/assets/images/submit-project.svg"
                alt="Submit Image"
              />
              <p class="title is-spaced is-4">Submit Project</p>
              <p class="subtitle is-6">
                Submit your project and be a part of the community.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
    <AppFooter />
  </main>
</template>
<script>
// import Vue from 'vue'
export default {
  name: 'ErrorLayout',
}
</script>
