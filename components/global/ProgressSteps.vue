<template>
  <div class="progress-steps">
    <div class="steps">
      <div
        class="step-item"
        :class="{
          'is-warning is-active': currentStep < 2,
          'is-link is-active': currentStep > 1,
        }"
      >
        <div class="step-marker">
          <span v-if="currentStep > 1" class="icon">
            <b-icon icon="check" size="is-small"></b-icon>
          </span>
        </div>
        <div
          class="step-details"
          :class="{ 'is-primary is-completed': currentStep > 1 }"
        >
          <p class="step-title">Your Details</p>
        </div>
      </div>
      <div
        class="step-item"
        :class="{
          'is-warning is-active': currentStep === 2,
          'is-link is-active': currentStep > 2,
        }"
      >
        <div class="step-marker">
          <span v-if="currentStep > 2" class="icon">
            <b-icon icon="check" size="is-small"></b-icon>
          </span>
        </div>
        <div
          class="step-details"
          :class="{ 'is-primary is-completed': currentStep > 2 }"
        >
          <p class="step-title">Project Details</p>
        </div>
      </div>
      <div
        class="step-item"
        :class="{
          'is-warning is-active': currentStep === 3,
          'is-link is-active': currentStep > 3,
        }"
      >
        <div class="step-marker">
          <span v-if="currentStep > 3" class="icon">
            <b-icon icon="check" size="is-small"></b-icon>
          </span>
        </div>
        <div
          class="step-details"
          :class="{ 'is-primary is-completed': currentStep > 3 }"
        >
          <p class="step-title">Developers</p>
        </div>
      </div>
      <div
        class="step-item"
        :class="{
          'is-warning is-active': currentStep === 4,
          'is-link is-active': currentStep > 4,
        }"
      >
        <div class="step-marker">
          <span v-if="currentStep > 4" class="icon">
            <b-icon icon="check" size="is-small"></b-icon>
          </span>
        </div>
        <div
          class="step-details"
          :class="{ 'is-primary is-completed': currentStep > 4 }"
        >
          <p class="step-title">Users</p>
        </div>
      </div>
      <div
        class="step-item"
        :class="{
          'is-warning is-active': currentStep === 5,
          'is-link is-active': submitSuccess,
        }"
      >
        <div class="step-marker">
          <span v-if="submitSuccess" class="icon">
            <b-icon icon="flag" size="is-small"></b-icon>
          </span>
        </div>
        <div
          class="step-details"
          :class="{ 'is-primary is-completed': submitSuccess }"
        >
          <p class="step-title">Submit</p>
        </div>
      </div>
    </div>
    <ValidationObserver ref="builder" v-slot="{ handleSubmit }" tag="div">
      <form
        id="formbuilder"
        ref="formbuilder"
        name="formbuilder"
        method="POST"
        @submit.prevent="handleSubmit(formbuild)"
      >
        <div v-show="currentStep === 1" class="step">
          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="name:3"
            vid="sendername"
            :skip-if-empty="false"
          >
            <b-field
              label="Name"
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input
                v-model="senderDetails.sendername"
                type="text"
                name="sendername"
                required
              >
              </b-input>
            </b-field>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="required|email"
            vid="senderemail"
            :skip-if-empty="false"
          >
            <b-field
              label="Email"
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input
                v-model="senderDetails.senderemail"
                type="email"
                name="senderemail"
                required
              >
              </b-input>
            </b-field>
          </ValidationProvider>
          <ValidationProvider
            tag="div"
            :skip-if-empty="true"
            vid="organisation"
          >
            <b-field label="Organisation">
              <b-input
                v-model="senderDetails.senderorganisation"
                type="text"
                name="senderorganisation"
              >
              </b-input>
            </b-field>
          </ValidationProvider>
        </div>
        <div v-show="currentStep === 2" class="step">
          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="name:3"
            vid="projectname"
            :skip-if-empty="false"
          >
            <b-field
              label="Project Name"
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input v-model="form.name" type="text" name="name" required>
              </b-input>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="url_string"
            vid="officialurl"
            :skip-if-empty="false"
          >
            <b-field
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <template slot="label">
                Project Website &nbsp;
                <b-tooltip label="Project website is required" type="is-light">
                  <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                </b-tooltip>
              </template>
              <b-input
                v-model="form.official_url"
                type="text"
                name="official_url"
                required
              >
              </b-input>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="url_string"
            vid="repository"
            :skip-if-empty="false"
          >
            <b-field
              label="Repository URL"
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input
                v-model="form.repository"
                type="text"
                name="repository"
                required
              >
              </b-input>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="arr:1"
            vid="startingcountry"
            :skip-if-empty="false"
          >
            <b-field
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <template slot="label">
                Project Starting Country &nbsp;
                <b-tooltip label="eg: Canada" type="is-light" animated>
                  <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                </b-tooltip>
              </template>
              <b-taginput
                v-model="form.origin_country"
                :data="countries"
                autocomplete
                icon="label"
                name="origin_country"
                :allow-new="true"
                :value="form.origin_country"
              >
              </b-taginput>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="arr:1"
            vid="projectlang"
            :skip-if-empty="false"
          >
            <b-field
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <template slot="label">
                Project Languages &nbsp;
                <b-tooltip label="eg: EN, IT, FR, DE" type="is-light" animated>
                  <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                </b-tooltip>
              </template>
              <b-taginput
                v-model="form.language"
                autocomplete
                icon="label"
                name="language"
                :data="languages"
                :allow-new="true"
                :value="form.language"
              >
              </b-taginput>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="name:3"
            vid="projecttype"
            :skip-if-empty="false"
          >
            <b-field
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <template slot="label">
                Project Type &nbsp;
                <b-tooltip
                  label="eg: website, mobile app, platform"
                  type="is-light"
                  animated
                >
                  <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                </b-tooltip>
              </template>
              <b-input
                v-model="form.entry_type"
                type="text"
                name="entry_type"
                maxlength="50"
                required
              >
              </b-input>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="arr:1"
            vid="projectlicence"
            :skip-if-empty="false"
          >
            <b-field
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <template slot="label">
                Project Licence &nbsp;
                <b-tooltip label="eg: MIT, GPL" type="is-light" animated>
                  <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                </b-tooltip>
              </template>
              <b-taginput
                v-model="form.licence"
                :data="licences"
                autocomplete
                name="licence"
                icon="label"
                :allow-new="true"
                :value="form.licence"
              >
              </b-taginput>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="arr:1"
            vid="projectcateg"
            :skip-if-empty="false"
          >
            <b-field
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <template slot="label">
                Project Category &nbsp;
                <b-tooltip
                  label="eg: Education Software, Software"
                  type="is-light"
                  animated
                >
                  <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                </b-tooltip>
              </template>
              <b-taginput
                v-model="form.category"
                :data="categories"
                name="category"
                icon="label"
                autocomplete
                :allow-new="true"
                :value="form.category"
              >
              </b-taginput>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="arr:1"
            vid="projectsector"
            :skip-if-empty="false"
          >
            <b-field
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <template slot="label">
                Project Sector &nbsp;
                <b-tooltip
                  label="eg: Local Government, Public Health"
                  type="is-light"
                  animated
                >
                  <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                </b-tooltip>
              </template>
              <b-taginput
                v-model="form.sector"
                autocomplete
                name="sector"
                icon="label"
                :allow-new="true"
                :data="sectors"
                :value="form.sector"
              >
              </b-taginput>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            tag="div"
            rules="minmax:10,350"
            vid="description"
            :skip-if-empty="false"
          >
            <b-field
              label="Project Description"
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input
                v-model="form.description"
                type="textarea"
                name="description"
                maxlength="350"
                required
              >
              </b-input>
            </b-field>
          </ValidationProvider>
        </div>
        <div v-show="currentStep === 3" class="step">
          <b-field label="Developers">
            <b-button
              native-type="button"
              :disabled="counterDev === 4"
              @click.prevent="addDevelopers"
            >
              Add Developers
            </b-button>
          </b-field>
          <div v-for="(dev, ind) in form.developers" :key="`dev-${ind}`">
            <hr v-if="ind >= 1" />
            <b-field v-if="ind >= 1" class="is-flex justify-end">
              <b-button
                native-type="button"
                @click.prevent="removeDeveloper(ind)"
              >
                Remove Dev
              </b-button>
            </b-field>
            <ValidationProvider
              v-slot="{ errors, valid }"
              rules="name:3"
              :vid="`devname-${ind}`"
              :skip-if-empty="false"
              tag="div"
            >
              <b-field
                label="Developer Name"
                v-bind="$attrs"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
                <b-input
                  v-model="dev.developer_name"
                  type="text"
                  name="developer_name"
                  maxlength="50"
                  :required="counterDev <= ind ? true : false"
                >
                </b-input>
              </b-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, valid }"
              rules="url_string"
              :vid="`devwebsite-${ind}`"
              :skip-if-empty="false"
              tag="div"
            >
              <b-field
                v-bind="$attrs"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
                <template slot="label">
                  Developer Website &nbsp;
                  <b-tooltip
                    label="eg: https://example.com"
                    type="is-light"
                    animated
                  >
                    <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                  </b-tooltip>
                </template>
                <b-input
                  v-model="dev.developer_url"
                  type="text"
                  name="developer_url"
                  :required="counterDev <= ind ? true : false"
                >
                </b-input>
              </b-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, valid }"
              rules="url_string"
              :vid="`devlogo-${ind}`"
              :skip-if-empty="false"
              tag="div"
            >
              <b-field
                v-bind="$attrs"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
                <template slot="label">
                  Developer Logo URL &nbsp;
                  <b-tooltip
                    label="eg: https://example.com/logo.png"
                    type="is-light"
                    animated
                  >
                    <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                  </b-tooltip>
                </template>
                <b-input
                  v-model="dev.developer_logo_url"
                  type="text"
                  name="developer_url"
                  :required="counterDev <= ind ? true : false"
                >
                </b-input>
              </b-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, valid }"
              rules="alpha_num:3"
              :vid="`devcateg-${ind}`"
              :skip-if-empty="false"
              tag="div"
            >
              <b-field
                v-bind="$attrs"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
                <template slot="label">
                  Developer Category &nbsp;
                  <b-tooltip
                    label="eg: Education Software, Software"
                    type="is-light"
                    animated
                  >
                    <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                  </b-tooltip>
                </template>
                <b-input
                  v-model="dev.developer_category"
                  type="text"
                  name="developer_category"
                  maxlength="50"
                  :required="counterDev <= ind ? true : false"
                >
                </b-input>
              </b-field>
            </ValidationProvider>
          </div>
          <b-field label="Maintainers">
            <b-checkbox v-model="sameAsDevs">Same as Developers</b-checkbox>
          </b-field>
          <div v-show="!sameAsDevs">
            <b-field label="Maintainers">
              <b-button
                native-type="button"
                :disabled="counterMaint === 4"
                @click.prevent="addMaintainers"
              >
                Add Maintainers
              </b-button>
            </b-field>
            <div v-for="(dev, ind) in form.maintainers" :key="`maint-${ind}`">
              <hr v-if="ind >= 1" />
              <b-field v-if="ind >= 1" class="is-flex justify-end">
                <b-button
                  native-type="button"
                  @click.prevent="removeMaintainer(ind)"
                >
                  Remove Maintainer
                </b-button>
              </b-field>
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="name:3"
                :vid="`maintname-${ind}`"
                :skip-if-empty="false"
              >
                <b-field
                  label="Maintainers Name"
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <b-input
                    v-model="dev.maintainer_name"
                    type="text"
                    name="maintainer_name"
                    maxlength="50"
                    :required="counterMaint <= ind ? true : false"
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="url_string"
                :vid="`maintwebsite-${ind}`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    Maintainers Website &nbsp;
                    <b-tooltip
                      label="eg: https://example.com"
                      type="is-light"
                      animated
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input
                    v-model="dev.maintainer_url"
                    type="text"
                    name="maintainer_url"
                    :required="counterMaint <= ind ? true : false"
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="url_string"
                :vid="`maintlogo-${ind}`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    Maintainers Logo URL &nbsp;
                    <b-tooltip
                      label="eg: https://example.com/logo.png"
                      type="is-light"
                      animated
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input
                    v-model="dev.maintainer_logo_url"
                    type="text"
                    name="maintainer_logo_url"
                    :required="counterMaint <= ind ? true : false"
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="url_string"
                :vid="`maintrepo-${ind}`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    Maintainers Repository &nbsp;
                    <b-tooltip
                      label="eg: https://github.com/maintainer"
                      type="is-light"
                      animated
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input
                    v-model="dev.maintainer_repository"
                    type="text"
                    name="maintainer_repository"
                    :required="counterMaint <= ind ? true : false"
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>
            </div>
          </div>
        </div>
        <div v-show="currentStep === 4" class="step">
          <b-field label="Users">
            <b-button
              native-type="button"
              :disabled="counterUsers === 4"
              @click.prevent="addUsers"
            >
              Add Users
            </b-button>
          </b-field>
          <div v-for="(dev, ind) in form.users" :key="`user-${ind}`">
            <hr v-if="ind >= 1" />
            <b-field v-if="ind >= 1" class="is-flex justify-end">
              <b-button native-type="button" @click.prevent="removeUser(ind)">
                Remove User
              </b-button>
            </b-field>
            <ValidationProvider
              v-slot="{ errors, valid }"
              rules="name:3"
              :vid="`username-${ind}`"
              :skip-if-empty="false"
            >
              <b-field
                label="User Name"
                v-bind="$attrs"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
                <b-input
                  v-model="dev.user_name"
                  name="user_name"
                  type="text"
                  :required="counterUsers <= ind ? true : false"
                >
                </b-input>
              </b-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, valid }"
              rules="url_string"
              :vid="`userwebsite-${ind}`"
              :skip-if-empty="false"
            >
              <b-field
                v-bind="$attrs"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
                <template slot="label">
                  User Website &nbsp;
                  <b-tooltip
                    label="eg: https://example.com"
                    type="is-light"
                    animated
                  >
                    <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                  </b-tooltip>
                </template>
                <b-input
                  v-model="dev.user_url"
                  type="text"
                  name="user_url"
                  :required="counterUsers <= ind ? true : false"
                >
                </b-input>
              </b-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, valid }"
              rules="url_string"
              :vid="`userlogo-${ind}`"
              :skip-if-empty="false"
            >
              <b-field
                v-bind="$attrs"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
                <template slot="label">
                  User Logo URL &nbsp;
                  <b-tooltip
                    label="eg: https://example.com/image.png"
                    type="is-light"
                    animated
                  >
                    <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                  </b-tooltip>
                </template>
                <b-input
                  v-model="dev.user_logo_url"
                  type="text"
                  name="user_logo_url"
                  :required="counterUsers <= ind ? true : false"
                >
                </b-input>
              </b-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, valid }"
              rules="name:3"
              :vid="`userlocation-${ind}`"
              :skip-if-empty="false"
            >
              <b-field
                v-bind="$attrs"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
                <template slot="label">
                  User Location &nbsp;
                  <b-tooltip label="eg:London" type="is-light" animated>
                    <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                  </b-tooltip>
                </template>
                <b-input
                  v-model="dev.user_location"
                  type="text"
                  name="user_location"
                  :required="counterUsers <= ind ? true : false"
                >
                </b-input>
              </b-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, valid }"
              rules="name:5"
              :vid="`userlong-${ind}`"
              :skip-if-empty="false"
            >
              <b-field
                v-bind="$attrs"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
                <template slot="label">
                  User User Geolocation Longitude &nbsp;
                  <b-tooltip label="eg: -1.2323232" type="is-light" animated>
                    <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                  </b-tooltip>
                </template>
                <b-input
                  v-model="dev.user_geolocation.long"
                  type="text"
                  name="long"
                  maxlength="10"
                  :required="counterUsers <= ind ? true : false"
                >
                </b-input>
              </b-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, valid }"
              rules="name:5"
              :vid="`userlat-${ind}`"
              :skip-if-empty="false"
            >
              <b-field
                v-bind="$attrs"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
                <template slot="label">
                  User User Geolocation Latitude &nbsp;
                  <b-tooltip label="eg: 4.2323232" type="is-light" animated>
                    <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                  </b-tooltip>
                </template>
                <b-input
                  v-model="dev.user_geolocation.lat"
                  type="text"
                  name="lat"
                  maxlength="10"
                  :required="counterUsers <= ind ? true : false"
                >
                </b-input>
              </b-field>
            </ValidationProvider>
          </div>
        </div>
        <b-field v-if="currentStep < 5" class="is-between pt-5">
          <b-button
            outlined
            type="is-primary"
            :disabled="currentStep === 1"
            @click.prevent="backToStep"
          >
            Prev Step
          </b-button>
          <button
            v-if="currentStep < 4"
            type="submit"
            native-type="submit"
            class="button is-primary is-outlined"
          >
            Next Step
          </button>
          <button
            v-else
            type="submit"
            class="button is-primary is-outlined"
            @click.prevent="goToReview"
          >
            Review Information
          </button>
        </b-field>
      </form>
    </ValidationObserver>
    <div v-show="currentStep === 5" class="step">
      <!-- <ValidationObserver ref="observer" v-slot="{ handleSubmit }" tag="div"> -->
      <form
        id="form-submit"
        ref="formSubmit"
        name="form-submit"
        data-netlify="true"
        method="POST"
        data-netlify-honeypot="bot-field"
        @submit.prevent="onSubmit"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="form-submit" />
        <b-field label="Name">
          <b-input
            :value="senderDetails.sendername"
            readonly
            type="text"
            name="sendername"
          >
          </b-input>
        </b-field>
        <b-field label="Email">
          <b-input
            :value="senderDetails.senderemail"
            readonly
            type="email"
            name="senderemail"
          >
          </b-input>
        </b-field>
        <b-field label="Organisation">
          <b-input
            :value="senderDetails.senderorganisation"
            type="text"
            name="senderorganisation"
          >
          </b-input>
        </b-field>
        <b-field class="file hidden">
          <b-upload v-model="files" accept=".json">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>Click to upload</span>
            </a>
          </b-upload>
          <!-- <span v-if="file" class="file-name">
            {{ file.name }}
          </span> -->
        </b-field>
      </form>

      <b-field label="Project Name">
        <b-input :value="form.name" type="text" name="project-name" readonly>
        </b-input>
      </b-field>
      <b-field>
        <template slot="label">
          Project Website &nbsp;
          <b-tooltip label="Project website is required" type="is-light">
            <b-icon size="is-small" icon="help-circle-outline"></b-icon>
          </b-tooltip>
        </template>
        <b-input
          :value="form.official_url"
          type="text"
          name="official_url"
          readonly
        >
        </b-input>
      </b-field>
      <b-field label="Repository URL">
        <b-input
          :value="form.repository"
          type="text"
          name="repository"
          readonly
        >
        </b-input>
      </b-field>
      <b-field>
        <template slot="label">
          Project Starting Country &nbsp;
          <b-tooltip label="eg: Canada" type="is-light" animated>
            <b-icon size="is-small" icon="help-circle-outline"></b-icon>
          </b-tooltip>
        </template>
        <b-taginput
          icon="label"
          name="origin_country"
          :allow-new="false"
          :value="form.origin_country"
          readonly
          :closable="false"
        >
        </b-taginput>
      </b-field>
      <b-field>
        <template slot="label">
          Project Languages &nbsp;
          <b-tooltip label="eg: EN, IT, FR, DE" type="is-light" animated>
            <b-icon size="is-small" icon="help-circle-outline"></b-icon>
          </b-tooltip>
        </template>
        <b-taginput
          icon="label"
          name="language"
          :allow-new="false"
          :value="form.language"
          readonly
          :closable="false"
        >
        </b-taginput>
      </b-field>
      <b-field>
        <template slot="label">
          Project Type &nbsp;
          <b-tooltip
            label="eg: website, mobile app, platform"
            type="is-light"
            animated
          >
            <b-icon size="is-small" icon="help-circle-outline"></b-icon>
          </b-tooltip>
        </template>
        <b-input
          :value="form.entry_type"
          type="text"
          name="entry_type"
          readonly
        >
        </b-input>
      </b-field>
      <b-field>
        <template slot="label">
          Project Category &nbsp;
          <b-tooltip
            label="eg: Education Software, Software"
            type="is-light"
            animated
          >
            <b-icon size="is-small" icon="help-circle-outline"></b-icon>
          </b-tooltip>
        </template>
        <b-taginput
          name="category"
          icon="label"
          :allow-new="false"
          :value="form.category"
          readonly
          :closable="false"
        >
        </b-taginput>
      </b-field>
      <b-field>
        <template slot="label">
          Project Licence &nbsp;
          <b-tooltip label="eg: MIT, GPL" type="is-light" animated>
            <b-icon size="is-small" icon="help-circle-outline"></b-icon>
          </b-tooltip>
        </template>
        <b-taginput
          name="licence"
          icon="label"
          :allow-new="false"
          :value="form.licence"
          readonly
          :closable="false"
        >
        </b-taginput>
      </b-field>
      <b-field>
        <template slot="label">
          Project Sector &nbsp;
          <b-tooltip
            label="eg: Local Government, Public Health"
            type="is-light"
            animated
          >
            <b-icon size="is-small" icon="help-circle-outline"></b-icon>
          </b-tooltip>
        </template>
        <b-taginput
          name="sector"
          icon="label"
          :allow-new="false"
          :value="form.sector"
          readonly
          :closable="false"
        >
        </b-taginput>
      </b-field>
      <b-field label="Project Description">
        <b-input
          :value="form.description"
          type="textarea"
          name="description"
          readonly
        >
        </b-input>
      </b-field>
      <hr />
      <template v-for="(dev, ind) in formToSend.developers">
        <div v-show="dev.developer_name.length > 0" :key="`dev-r-${ind}`">
          <hr v-if="ind >= 1" />
          <b-field label="Developer Name">
            <b-input
              :value="dev.developer_name"
              type="text"
              :name="`developer_name${ind}`"
              readonly
            >
            </b-input>
          </b-field>

          <b-field>
            <template slot="label">
              Developer Website &nbsp;
              <b-tooltip
                label="eg: https://example.com"
                type="is-light"
                animated
              >
                <b-icon size="is-small" icon="help-circle-outline"></b-icon>
              </b-tooltip>
            </template>
            <b-input
              :value="dev.developer_url"
              type="text"
              :name="`developer_url${ind}`"
              readonly
            >
            </b-input>
          </b-field>

          <b-field>
            <template slot="label">
              Developer Logo URL &nbsp;
              <b-tooltip
                label="eg: https://example.com/logo.png"
                type="is-light"
                animated
              >
                <b-icon size="is-small" icon="help-circle-outline"></b-icon>
              </b-tooltip>
            </template>
            <b-input
              :value="dev.developer_logo_url"
              type="text"
              :name="`developer_logo_url${ind}`"
              readonly
            >
            </b-input>
          </b-field>

          <b-field>
            <template slot="label">
              Developer Category &nbsp;
              <b-tooltip
                label="eg: Education Software, Software"
                type="is-light"
                animated
              >
                <b-icon size="is-small" icon="help-circle-outline"></b-icon>
              </b-tooltip>
            </template>
            <b-input
              :value="dev.developer_category"
              type="text"
              :name="`developer_category${ind}`"
              readonly
            >
            </b-input>
          </b-field>
        </div>
      </template>
      <hr />
      <template v-for="(dev, ind) in formToSend.maintainers">
        <div v-show="dev.maintainer_name.length > 0" :key="`maint-r-${ind}`">
          <hr v-if="ind >= 1" />
          <b-field label="Maintainers Name">
            <b-input
              :value="dev.maintainer_name"
              type="text"
              readonly
              :name="`maintainer_name${ind}`"
            >
            </b-input>
          </b-field>

          <b-field>
            <template slot="label">
              Maintainers Website &nbsp;
              <b-tooltip
                label="eg: https://example.com"
                type="is-light"
                animated
              >
                <b-icon size="is-small" icon="help-circle-outline"></b-icon>
              </b-tooltip>
            </template>
            <b-input
              :value="dev.maintainer_url"
              type="text"
              readonly
              :name="`maintainer_url${ind}`"
            >
            </b-input>
          </b-field>

          <b-field>
            <template slot="label">
              Maintainers Logo URL &nbsp;
              <b-tooltip
                label="eg: https://example.com/logo.png"
                type="is-light"
                animated
              >
                <b-icon size="is-small" icon="help-circle-outline"></b-icon>
              </b-tooltip>
            </template>
            <b-input
              :value="dev.maintainer_logo_url"
              type="text"
              readonly
              :name="`maintainer_logo_url${ind}`"
            >
            </b-input>
          </b-field>

          <b-field>
            <template slot="label">
              Maintainers Repository &nbsp;
              <b-tooltip
                label="eg: https://github.com/maintainer"
                type="is-light"
                animated
              >
                <b-icon size="is-small" icon="help-circle-outline"></b-icon>
              </b-tooltip>
            </template>
            <b-input
              :value="dev.maintainer_repository"
              type="text"
              readonly
              :name="`maintainer_repository${ind}`"
            >
            </b-input>
          </b-field>
        </div>
      </template>
      <hr />
      <template v-for="(dev, ind) in formToSend.users">
        <div v-show="dev.user_name.length > 0" :key="`user-r-${ind}`">
          <hr v-if="ind >= 1" />
          <b-field label="User Name">
            <b-input
              type="text"
              :value="dev.user_name"
              readonly
              :name="`user_name${ind}`"
            >
            </b-input>
          </b-field>
          <b-field label="Users Website">
            <b-input
              type="text"
              :value="dev.user_url"
              readonly
              :name="`user_url${ind}`"
            >
            </b-input>
          </b-field>
          <b-field label="User Logo URL">
            <b-input
              :value="dev.user_logo_url"
              type="text"
              readonly
              :name="`user_url${ind}`"
            >
            </b-input>
          </b-field>
          <b-field label="User Location">
            <b-input
              :value="dev.user_location"
              type="text"
              readonly
              :name="`user_location${ind}`"
            >
            </b-input>
          </b-field>
          <b-field label="User Geolocation">
            <b-input
              type="text"
              :value="dev.user_geolocation.long"
              readonly
              :name="`user_geolocation_long${ind}`"
            >
            </b-input>
            <b-input
              type="text"
              :value="dev.user_geolocation.lat"
              readonly
              :name="`user_geolocation_lat${ind}`"
            >
            </b-input>
          </b-field>
        </div>
      </template>
      <b-field class="is-between pt-5">
        <b-button outlined type="is-primary" @click.prevent="backToStep">
          Prev Step
        </b-button>

        <button
          id="submitbtn"
          type="submit"
          native-type="submit"
          form="form-submit"
          class="button is-primary is-outlined"
        >
          Submit Form
        </button>
      </b-field>
      <!-- </ValidationObserver> -->
    </div>
    <b-loading :active.sync="sendingForm" :can-cancel="false"></b-loading>
    <div v-show="submitSuccess" id="form-result" class="step">
      Thanks for the email. We will analyze it and add it to our databse
      <div class="has-text-centered">
        <b-button outlined type="is-primary" @click.prevent="resetForm">
          Start a new submission
        </b-button>
      </div>
    </div>
    <b-modal
      :active.sync="developersModalActive"
      has-modal-card
      destroy-on-hide
      aria-role="dialog"
      aria-modal
    >
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Developer</p>
        </header>
        <section class="modal-card-body">
          <ValidationObserver v-slot="{ handleSubmit }" slim>
            <form
              id="devModal"
              ref="devModal"
              name="devModal"
              @submit.prevent="handleSubmit(saveDeveloper)"
            >
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="name:3"
                :name="`newdevname`"
                :skip-if-empty="false"
              >
                <b-field
                  label="Developer Name"
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <b-input
                    v-model="tempDevData.developer_name"
                    type="text"
                    required
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="url_string"
                :name="`newdevwebsite`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    Developer Website &nbsp;
                    <b-tooltip
                      label="eg: https://example.com"
                      type="is-light"
                      animated
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input
                    v-model="tempDevData.developer_url"
                    type="text"
                    required
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="url_string"
                :name="`newdevlogo`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    Developer Logo URL &nbsp;
                    <b-tooltip
                      label="eg: https://example.com/logo.png"
                      type="is-light"
                      animated
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input
                    v-model="tempDevData.developer_logo_url"
                    type="text"
                    required
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="name:3"
                :name="`newdevcateg`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    Developer Category &nbsp;
                    <b-tooltip
                      label="eg: Education Software, Software"
                      type="is-light"
                      animated
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input v-model="tempDevData.developer_category" type="text">
                  </b-input>
                </b-field>
              </ValidationProvider>
              <b-field>
                <button class="button is-primary" native-type="submit">
                  Add Developer
                </button>
              </b-field>
            </form>
          </ValidationObserver>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click.prevent="closeModal">
            Close
          </button>
        </footer>
      </div>
    </b-modal>
    <b-modal
      :active.sync="maintainersModalActive"
      has-modal-card
      destroy-on-hide
      aria-role="dialog"
      aria-modal
    >
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Maintainer</p>
        </header>

        <section class="modal-card-body">
          <ValidationObserver v-slot="{ handleSubmit }" slim>
            <form
              id="maintModal"
              ref="maintModal"
              @submit.prevent="handleSubmit(saveMaintainer)"
            >
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="name:3"
                :name="`newmaintname`"
                :skip-if-empty="false"
              >
                <b-field
                  label="Maintainer Name"
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <b-input
                    v-model="tempMaintData.maintainer_name"
                    type="text"
                    value=""
                    required
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="url_string"
                :name="`newmaintwebsite`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    Maintainer Website &nbsp;
                    <b-tooltip
                      label="eg: https://example.com"
                      type="is-light"
                      animated
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input
                    v-model="tempMaintData.maintainer_url"
                    type="text"
                    required
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="url_string"
                :name="`newmaintlogo`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    Maintainer Logo &nbsp;
                    <b-tooltip
                      label="eg: https://example.com/logo.png"
                      type="is-light"
                      animated
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input
                    v-model="tempMaintData.maintainer_logo_url"
                    type="text"
                    required
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="url_string"
                :name="`newmaintrepo`"
                :skip-if-empty="false"
              >
                <b-field
                  label="Maintainer"
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    Maintainer Repository &nbsp;
                    <b-tooltip
                      label="eg: https://example.com/github"
                      type="is-light"
                      animated
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input
                    v-model="tempMaintData.maintainer_repository"
                    type="text"
                    required
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>

              <b-field>
                <button class="button is-primary" native-type="submit">
                  Add Maintainer
                </button>
              </b-field>
            </form>
          </ValidationObserver>
        </section>
        <footer class="modal-card-foot">
          <button
            class="button"
            native-type="button"
            @click.prevent="closeModal"
          >
            Close
          </button>
        </footer>
      </div>
    </b-modal>
    <b-modal
      :active.sync="usersModalActive"
      has-modal-card
      destroy-on-hide
      aria-role="dialog"
      :aria-modal="usersModalActive"
    >
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add User</p>
        </header>
        <section class="modal-card-body">
          <ValidationObserver v-slot="{ handleSubmit }" slim>
            <form
              id="userModal"
              ref="userModal"
              @submit.prevent="handleSubmit(saveUser)"
            >
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="name:3"
                :name="`newusername`"
                :skip-if-empty="false"
              >
                <b-field
                  label="User Name"
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <b-input
                    v-model="tempUserData.user_name"
                    type="text"
                    required
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="url_string"
                :name="`newuserwebsite`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    User Website &nbsp;
                    <b-tooltip
                      label="eg: https://example.com"
                      type="is-light"
                      animated
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input v-model="tempUserData.user_url" type="text" required>
                  </b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="url_string"
                :name="`newuserlogo`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    User Logo URL &nbsp;
                    <b-tooltip
                      label="eg: https://example.com.logo.png"
                      type="is-light"
                      animated
                    >
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input
                    v-model="tempUserData.user_logo_url"
                    type="text"
                    required
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="name:3"
                :name="`newuserlocation`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    User Location &nbsp;
                    <b-tooltip label="eg: London" type="is-light" animated>
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input
                    v-model="tempUserData.user_location"
                    type="text"
                    maxlength="50"
                    required
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="name:5"
                :name="`newuserlong`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <template slot="label">
                    User Geolocation Coordinates &nbsp;
                    <b-tooltip label="eg: London" type="is-light" animated>
                      <b-icon
                        size="is-small"
                        icon="help-circle-outline"
                      ></b-icon>
                    </b-tooltip>
                  </template>
                  <b-input
                    v-model="tempUserData.user_geolocation.long"
                    type="text"
                    maxlength="10"
                    required
                  >
                  </b-input> </b-field
              ></ValidationProvider>
              <ValidationProvider
                v-slot="{ errors, valid }"
                rules="name:5"
                :name="`newuserlat`"
                :skip-if-empty="false"
              >
                <b-field
                  v-bind="$attrs"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <b-input
                    v-model="tempUserData.user_geolocation.lat"
                    type="text"
                    maxlength="10"
                    required
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>

              <b-field>
                <button class="button is-primary" native-type="submit">
                  Add User
                </button>
              </b-field>
            </form>
          </ValidationObserver>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click.prevent="closeModal">
            Close
          </button>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script>
/* eslint-disable no-console */
// /* eslint-disable no-unused-vars */
// /* eslint-disable @typescript-eslint/no-unused-vars */

import Vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'ProgressSteps',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      currentStep: 4,
      submitSuccess: false,
      developersModalActive: false,
      maintainersModalActive: false,
      usersModalActive: false,
      sendingForm: false,
      validForm: false,
      formSubmitted: false,
      counterDev: 0,
      counterMaint: 0,
      counterUsers: 0,
      sameAsDevs: false,
      userCategories: [],
      senderDetails: {
        sendername: 'name',
        senderemail: 'email@test.com',
        senderorganisation: 'organisation',
      },
      form: {
        name: 'project name',
        official_url: 'http://test.com',
        logo_url: 'http://test.com',
        repository: 'http://test.com',
        origin_country: ['country'],
        entry_type: 'project type',
        sector: ['sector'],
        language: ['en', 'it', 'de'],
        licence: ['licence'],
        category: ['categ'],
        description: 'descirpieornainawin ainaoidnioandi oansiodn oiasd idi na',
        developers: [
          {
            developer_name: 'dev name',
            developer_url: 'http://test.com',
            developer_logo_url: 'http://test.com/logo.jpg',
            developer_category: 'dev catego',
          },
        ],
        maintainers: [
          {
            maintainer_name: 'mant name',
            maintainer_url: 'http://test.com',
            maintainer_logo_url: 'http://test.com/logo.jpg',
            maintainer_repository: 'http://test.com',
          },
        ],
        users: [
          {
            user_name: 'name',
            user_location: 'https://google.com',
            user_logo_url: 'https://google.com',
            user_url: 'https://google.com',
            user_geolocation: {
              lat: '54.23223',
              long: '-1.23232',
            },
          },
        ],
      },
      defaultSenderDetails: {
        sendername: '',
        senderemail: '',
        senderorganisation: '',
      },
      defaultForm: {
        name: '',
        official_url: '',
        logo_url: '',
        repository: '',
        origin_country: [],
        entry_type: '',
        sector: [],
        language: [],
        licence: [],
        category: [],
        description: '',
        developers: [
          {
            developer_name: '',
            developer_url: '',
            developer_logo_url: '',
            developer_category: '',
          },
        ],
        maintainers: [
          {
            maintainer_name: '',
            maintainer_url: '',
            maintainer_logo_url: '',
            maintainer_repository: '',
          },
        ],
        users: [
          {
            user_name: '',
            user_location: '',
            user_logo_url: '',
            user_url: '',
            user_geolocation: {
              lat: '',
              long: '',
            },
          },
        ],
      },
      tempDevData: {
        developer_name: 'dev name',
        developer_url: 'http://test.com',
        developer_logo_url: 'http://test.com',
        developer_category: 'categ',
      },
      tempMaintData: {
        maintainer_name: 'mant name',
        maintainer_url: 'http://test.com',
        maintainer_logo_url: 'http://test.com',
        maintainer_repository: 'http://test.com',
      },
      tempUserData: {
        user_name: 'name',
        user_location: 'London',
        user_logo_url: 'https://google.com',
        user_url: 'https://google.com',
        user_geolocation: {
          lat: '54.23223',
          long: '-1.23232',
        },
      },
      formSubmissionResult: null,
      formToSend: {
        name: '',
        official_url: '',
        logo_url: '',
        repository: '',
        origin_country: [],
        entry_type: '',
        sector: [],
        language: [],
        licence: [],
        category: [],
        description: '',
        developers: [
          {
            developer_name: '',
            developer_url: '',
            developer_logo_url: '',
            developer_category: '',
          },
          {
            developer_name: '',
            developer_url: '',
            developer_logo_url: '',
            developer_category: '',
          },
          {
            developer_name: '',
            developer_url: '',
            developer_logo_url: '',
            developer_category: '',
          },
          {
            developer_name: '',
            developer_url: '',
            developer_logo_url: '',
            developer_category: '',
          },
          {
            developer_name: '',
            developer_url: '',
            developer_logo_url: '',
            developer_category: '',
          },
        ],
        maintainers: [
          {
            maintainer_name: '',
            maintainer_url: '',
            maintainer_logo_url: '',
            maintainer_repository: '',
          },
          {
            maintainer_name: '',
            maintainer_url: '',
            maintainer_logo_url: '',
            maintainer_repository: '',
          },
          {
            maintainer_name: '',
            maintainer_url: '',
            maintainer_logo_url: '',
            maintainer_repository: '',
          },
          {
            maintainer_name: '',
            maintainer_url: '',
            maintainer_logo_url: '',
            maintainer_repository: '',
          },
          {
            maintainer_name: '',
            maintainer_url: '',
            maintainer_logo_url: '',
            maintainer_repository: '',
          },
        ],
        users: [
          {
            user_name: '',
            user_location: '',
            user_logo_url: '',
            user_url: '',
            user_geolocation: {
              lat: '',
              long: '',
            },
          },
          {
            user_name: '',
            user_location: '',
            user_logo_url: '',
            user_url: '',
            user_geolocation: {
              lat: '',
              long: '',
            },
          },
          {
            user_name: '',
            user_location: '',
            user_logo_url: '',
            user_url: '',
            user_geolocation: {
              lat: '',
              long: '',
            },
          },
          {
            user_name: '',
            user_location: '',
            user_logo_url: '',
            user_url: '',
            user_geolocation: {
              lat: '',
              long: '',
            },
          },
          {
            user_name: '',
            user_location: '',
            user_logo_url: '',
            user_url: '',
            user_geolocation: {
              lat: '',
              long: '',
            },
          },
        ],
      },

      defaultformToSend: {
        name: '',
        official_url: '',
        logo_url: '',
        repository: '',
        origin_country: [],
        entry_type: '',
        sector: [],
        language: [],
        licence: [],
        category: [],
        description: '',
        developers: [
          {
            developer_name: '',
            developer_url: '',
            developer_logo_url: '',
            developer_category: '',
          },
          {
            developer_name: '',
            developer_url: '',
            developer_logo_url: '',
            developer_category: '',
          },
          {
            developer_name: '',
            developer_url: '',
            developer_logo_url: '',
            developer_category: '',
          },
          {
            developer_name: '',
            developer_url: '',
            developer_logo_url: '',
            developer_category: '',
          },
          {
            developer_name: '',
            developer_url: '',
            developer_logo_url: '',
            developer_category: '',
          },
        ],
        maintainers: [
          {
            maintainer_name: '',
            maintainer_url: '',
            maintainer_logo_url: '',
            maintainer_repository: '',
          },
          {
            maintainer_name: '',
            maintainer_url: '',
            maintainer_logo_url: '',
            maintainer_repository: '',
          },
          {
            maintainer_name: '',
            maintainer_url: '',
            maintainer_logo_url: '',
            maintainer_repository: '',
          },
          {
            maintainer_name: '',
            maintainer_url: '',
            maintainer_logo_url: '',
            maintainer_repository: '',
          },
          {
            maintainer_name: '',
            maintainer_url: '',
            maintainer_logo_url: '',
            maintainer_repository: '',
          },
        ],
        users: [
          {
            user_name: '',
            user_location: '',
            user_logo_url: '',
            user_url: '',
            user_geolocation: {
              lat: '',
              long: '',
            },
          },
          {
            user_name: '',
            user_location: '',
            user_logo_url: '',
            user_url: '',
            user_geolocation: {
              lat: '',
              long: '',
            },
          },
          {
            user_name: '',
            user_location: '',
            user_logo_url: '',
            user_url: '',
            user_geolocation: {
              lat: '',
              long: '',
            },
          },
          {
            user_name: '',
            user_location: '',
            user_logo_url: '',
            user_url: '',
            user_geolocation: {
              lat: '',
              long: '',
            },
          },
          {
            user_name: '',
            user_location: '',
            user_logo_url: '',
            user_url: '',
            user_geolocation: {
              lat: '',
              long: '',
            },
          },
        ],
      },
      files: [],
    }
  },
  computed: {
    ...mapGetters([
      'languages',
      'licences',
      'sectors',
      'countries',
      'categories',
    ]),
  },
  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm)
      this.formToSend = Object.assign({}, this.defaultformToSend)
      this.currentStep = 1
      this.submitSuccess = false
      this.$refs.builder.reset()
    },
    backToStep() {
      if (this.currentStep === 1) {
        return
      }
      this.currentStep--
    },
    addDevelopers() {
      this.developersModalActive = true
    },
    addMaintainers() {
      this.maintainersModalActive = true
    },
    addUsers() {
      this.usersModalActive = true
    },
    closeModal() {
      this.developersModalActive = false
      this.maintainersModalActive = false
      this.usersModalActive = false
    },
    saveDeveloper() {
      this.developersModalActive = false
      this.counterDev = this.counterDev + 1

      this.form.developers[this.counterDev] = this.tempDevData
      this.tempDevData = {
        developer_name: '',
        developer_url: '',
        developer_logo_url: '',
        developer_category: '',
      }
    },
    saveUser() {
      this.usersModalActive = false
      this.counterUsers = this.counterUsers + 1
      this.form.users[this.counterUsers] = this.tempUserData
      this.tempUserData = {
        user_name: '',
        user_location: '',
        user_logo_url: '',
        user_url: '',
        user_geolocation: {
          lat: '',
          long: '',
        },
      }
    },
    saveMaintainer() {
      this.maintainersModalActive = false
      this.counterMaint = this.counterMaint + 1
      this.form.maintainers[this.counterMaint] = this.tempMaintData
      this.tempMaintData = {
        maintainer_name: '',
        maintainer_url: '',
        maintainer_logo_url: '',
        maintainer_repository: '',
      }
      this.counterMaint = this.counterMaint + 1
    },
    removeDeveloper(index) {
      this.form.developers.splice(index, 1)
      this.tempDevData = {
        developer_name: '',
        developer_url: '',
        developer_logo_url: '',
        developer_category: '',
      }
      this.counterDev = this.counterDev - 1
      if (this.counterDev < 0) {
        this.counterDev = 0
      }
    },
    removeMaintainer(index) {
      this.form.maintainers.splice(index, 1)
      this.tempMaintData = {
        maintainer_name: '',
        maintainer_url: '',
        maintainer_logo_url: '',
        maintainer_repository: '',
      }
      this.counterMaint = this.counterMaint - 1
      if (this.counterMaint < 0) {
        this.counterMaint = 0
      }
    },
    removeUser(index) {
      this.form.users.splice(index, 1)
      this.tempUserData = {
        user_name: '',
        user_location: '',
        user_logo_url: '',
        user_url: '',
        user_geolocation: {
          lat: '',
          long: '',
        },
      }
      this.counterUsers = this.counterUsers - 1
      if (this.counterUsers < 0) {
        this.counterUsers = 0
      }
    },
    encode(data) {
      const formData = new FormData()
      const files = new Blob([JSON.stringify(data)], {
        type: 'application/json',
      })
      const dataToEncod = {
        files: new File([files], 'entry.json', { type: 'application/json' }),
        ...this.senderDetails,
        'form-name': 'form-submit',
      }
      for (const key of Object.keys(dataToEncod)) {
        if (key === 'files') {
          formData.append(key, dataToEncod[key][0])
        } else {
          formData.append(key, dataToEncod[key])
        }
      }
      this.files = new File([files], 'entry.json', { type: 'application/json' })
      console.log(formData, files, dataToEncod)
      return formData
      // return Object.keys(data)
      // .map((key) => {
      //   if (
      //     key === 'developers' ||
      //     key === 'maintainers' ||
      //     key === 'users'
      //   ) {
      //     return data[key].map((el, ind) => {
      //       return Object.entries(el)
      //         .map((i) => {
      //           if (i[0] === 'user_geolocation') {
      //             return Object.keys(i[1])
      //               .map((j) => {
      //                 return `user_geolocation${encodeURIComponent(
      //                   j
      //                 )}=${encodeURIComponent(i[1][j])}`
      //               })
      //               .join('&')
      //           } else {
      //             return `${encodeURIComponent(
      //               i[0]
      //             )}${ind}=${encodeURIComponent(i[1])}`
      //           }
      //         })
      //         .join('&')
      //     })
      //   } else if (
      //     key === 'licence' ||
      //     key === 'category' ||
      //     key === 'sector'
      //   ) {
      //     return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      //   } else {
      //     return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      //   }
      // })
      // .join('&')
    },
    onSubmit() {
      if (this.currentStep === 5) {
        // this.$refs.observer.validate().then((success) => {
        //   if (success) {
        this.sendingForm = true
        const axiosConfig = {
          header: {
            'Content-Type': 'multipart/form-data',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
          },
        }
        // @ts-ignore
        this.$axios
          .post(
            'https://testing-pcd.netlify.app',
            // '/',
            this.encode(
              // 'form-name': 'form-submit',
              { ...this.formToSend }
              // ...this.senderDetails,
            ),
            axiosConfig
          )
          .then((res) => {
            setTimeout(() => {
              console.log('response', res)
              this.submitSuccess = true
              this.sendingForm = false
              this.currentStep = 6
              this.$nextTick(() => {
                this.form = Object.assign({}, this.defaultForm)
                this.formToSend = Object.assign({}, this.defaultformToSend)
                this.senderDetails = Object.assign(
                  {},
                  this.defaultSenderDetails
                )
                this.$refs.builder.reset()
              })
            }, 1500)
          })
          .catch((error) => {
            console.error('Error', error)
            this.sendingForm = false
          })
        // }
        // })
      }
    },
    formbuild() {
      if (this.currentStep < 4) {
        this.currentStep++
        return
      }
      this.$refs.builder.validate()
    },
    goToReview() {
      this.currentStep = 5
      this.form.developers.forEach((el, i) => {
        this.formToSend.developers[i] = el
      })
      this.form.users.forEach((el, i) => {
        this.formToSend.users[i] = el
      })
      this.form.maintainers.forEach((el, i) => {
        this.formToSend.maintainers[i] = el
      })
      console.log(this.form, this.formToSend)
    },
  },
})
</script>

<style lang="scss">
.field.is-between {
  justify-content: space-between;
}
.field {
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  .label {
    display: inline-flex;
    align-items: center;
  }
}
</style>
