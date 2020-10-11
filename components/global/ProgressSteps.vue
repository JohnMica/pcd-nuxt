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

    <div v-show="currentStep === 1" class="step">
      <ValidationObserver
        ref="builder1"
        v-slot="{ handleSubmit }"
        tag="div"
        slim
      >
        <form
          id="formbuilder1"
          ref="formbuilder1"
          name="formbuilder1"
          @submit.prevent="handleSubmit(formbuild1)"
        >
          <ValidationProvider
            v-slot="{ errors, valid }"
            mode="lazy"
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
            mode="lazy"
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
            mode="lazy"
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
          <b-field>
            <div class="is-flex is-between pt-5">
              <b-button
                outlined
                type="is-primary"
                disabled
                @click.prevent="backToStep"
              >
                Prev Step
              </b-button>

              <button type="submit" class="button is-primary is-outlined">
                Next Step
              </button>
            </div>
          </b-field>
        </form>
      </ValidationObserver>
    </div>
    <div v-show="currentStep === 2" class="step">
      <ValidationObserver
        ref="builder2"
        v-slot="{ handleSubmit }"
        tag="div"
        slim
      >
        <form
          id="formbuilder1"
          ref="formbuilder1"
          name="formbuilder1"
          @submit.prevent="handleSubmit(formbuild2)"
        >
          <ValidationProvider
            v-slot="{ errors, valid }"
            mode="lazy"
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
            mode="lazy"
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
                <b-tooltip
                  label="Project website is required"
                  type="is-light"
                  multilined
                  square
                  animated
                >
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
            mode="lazy"
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
            mode="lazy"
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
                <b-tooltip
                  label="eg: Canada, start typing and either select from the dropdown options or press ENTER key to add new country"
                  type="is-light"
                  animated
                  square
                  multilined
                >
                  <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                </b-tooltip>
              </template>
              <b-taginput
                v-model="form.origin_country"
                :data="countries"
                autocomplete
                open-on-focus
                icon="label"
                name="origin_country"
                allow-new
                :value="form.origin_country"
                :before-adding="beforeAdding"
              >
              </b-taginput>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            mode="lazy"
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
                <b-tooltip
                  label="eg: EN, IT, FR, DE; start typing and either select from the dropdown options or press ENTER key to add new language"
                  type="is-light"
                  animated
                  square
                  multilined
                >
                  <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                </b-tooltip>
              </template>
              <b-taginput
                v-model="form.language"
                autocomplete
                open-on-focus
                icon="label"
                name="language"
                :data="languages"
                allow-new
                :value="form.language"
                :before-adding="beforeAdding"
              >
              </b-taginput>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            mode="lazy"
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
                  label="eg: website, mobile app, platform; start typing and either select from the dropdown options or press ENTER key to add new Project Type"
                  type="is-light"
                  animated
                  square
                  multilined
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
            mode="lazy"
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
                <b-tooltip
                  label="eg: MIT, GPL; start typing and either select from the dropdown options or press ENTER key to add new Licence"
                  type="is-light"
                  animated
                  square
                  multilined
                >
                  <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                </b-tooltip>
              </template>
              <b-taginput
                v-model="form.licence"
                :data="licences"
                autocomplete
                open-on-focus
                name="licence"
                icon="label"
                allow-new
                :value="form.licence"
                :before-adding="beforeAdding"
              >
              </b-taginput>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            mode="lazy"
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
                  label="eg: Education Software, Software; start typing and either select from the dropdown options or press ENTER key to add new Category"
                  type="is-light"
                  animated
                  square
                  multilined
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
                open-on-focus
                allow-new
                :value="form.category"
                :before-adding="beforeAdding"
              >
              </b-taginput>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            mode="lazy"
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
                  label="eg: Local Government, Public Health; start typing and either select from the dropdown options or press ENTER key to add new Sector"
                  type="is-light"
                  animated
                  square
                  multilined
                >
                  <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                </b-tooltip>
              </template>
              <b-taginput
                v-model="form.sector"
                autocomplete
                open-on-focus
                name="sector"
                icon="label"
                allow-new
                :data="sectors"
                :value="form.sector"
                :before-adding="beforeAdding"
              >
              </b-taginput>
            </b-field>
          </ValidationProvider>

          <ValidationProvider
            v-slot="{ errors, valid }"
            mode="lazy"
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
          <b-field>
            <div class="is-flex is-between pt-5">
              <b-button outlined type="is-primary" @click.prevent="backToStep">
                Prev Step
              </b-button>
              <button type="submit" class="button is-primary is-outlined">
                Next Step
              </button>
            </div>
          </b-field>
        </form>
      </ValidationObserver>
    </div>
    <div v-show="currentStep === 3" class="step">
      <ValidationObserver
        ref="builder3"
        v-slot="{ handleSubmit }"
        tag="div"
        slim
      >
        <form
          id="formbuilder3"
          ref="formbuilder3"
          name="formbuilder3"
          @submit.prevent="handleSubmit(formbuild3)"
        >
          <b-field label="Developers">
            <template slot="label">
              <div class="is-flex align-center">
                Developers
                <b-button
                  native-type="button"
                  class="ml-4"
                  :disabled="counterDev === 4"
                  @click.prevent="addDevelopers"
                >
                  Add Developers
                </b-button>
              </div>
            </template>
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
              mode="lazy"
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
              mode="lazy"
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
                    square
                    multilined
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
              mode="lazy"
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
                    square
                    multilined
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
              mode="lazy"
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
                    square
                    multilined
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
          <b-field>
            <template slot="label">
              <div class="is-flex align-center">
                Maintainers
                <b-checkbox v-model="sameAsDevs" class="ml-4">
                  Same as Developers
                </b-checkbox>
              </div>
            </template>
          </b-field>
          <div v-if="!sameAsDevs">
            <b-field>
              <template slot="label">
                <div class="is-flex align-center">
                  Maintainers
                  <b-button
                    native-type="button"
                    class="ml-4"
                    :disabled="counterMaint === 4"
                    @click.prevent="addMaintainers"
                  >
                    Add Maintainers
                  </b-button>
                </div>
              </template>
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
                mode="lazy"
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
                mode="lazy"
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
                      square
                      multilined
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
                mode="lazy"
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
                      square
                      multilined
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
                mode="lazy"
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
                      square
                      multilined
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
          <b-field>
            <div class="is-flex is-between pt-5">
              <b-button outlined type="is-primary" @click.prevent="backToStep">
                Prev Step
              </b-button>
              <button type="submit" class="button is-primary is-outlined">
                Next Step
              </button>
            </div>
          </b-field>
        </form>
      </ValidationObserver>
    </div>
    <div v-show="currentStep === 4" class="step">
      <b-field>
        <template slot="label">
          <div class="is-flex align-center">
            Users
            <b-button
              native-type="button"
              class="ml-4"
              :disabled="counterUsers === 4"
              @click.prevent="addUsers"
            >
              Add Users
            </b-button>
          </div>
        </template>
      </b-field>
      <ValidationObserver
        ref="builder4"
        v-slot="{ handleSubmit }"
        tag="div"
        slim
      >
        <form
          id="formbuilder4"
          ref="formbuilder4"
          name="formbuilder4"
          @submit.prevent="handleSubmit(formbuild4)"
        >
          <div v-for="(dev, ind) in form.users" :key="`user-${ind}`">
            <hr v-if="ind >= 1" />
            <b-field v-if="ind >= 1" class="is-flex justify-end">
              <b-button native-type="button" @click.prevent="removeUser(ind)">
                Remove User
              </b-button>
            </b-field>

            <ValidationProvider
              v-slot="{ errors, valid }"
              mode="lazy"
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
              mode="lazy"
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
                    square
                    multilined
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
              mode="lazy"
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
                    square
                    multilined
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
              mode="lazy"
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
                  <b-tooltip
                    label="eg:London"
                    type="is-light"
                    animated
                    square
                    multilined
                  >
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
              mode="lazy"
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
                  <b-tooltip
                    label="eg: -1.2323232"
                    type="is-light"
                    animated
                    square
                    multilined
                  >
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
              mode="lazy"
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
                  <b-tooltip
                    label="eg: 4.2323232"
                    type="is-light"
                    animated
                    square
                    multilined
                  >
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
          <b-field>
            <div class="is-flex is-between pt-5">
              <b-button outlined type="is-primary" @click.prevent="backToStep">
                Prev Step
              </b-button>
              <button type="submit" class="button is-primary is-outlined">
                Review Information
              </button>
            </div>
          </b-field>
        </form>
      </ValidationObserver>
    </div>

    <div v-show="currentStep === 5" class="step">
      <form
        id="formcreation"
        ref="formcreation"
        name="formcreation"
        data-netlify="true"
        method="POST"
        novalidate
        enctype="multipart/form-data"
        data-netlify-honeypot="bot-field"
        @submit.prevent="onSubmit"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="formcreation" />
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
        <b-field class="file is-hidden">
          <b-upload ref="files" v-model="files" name="files" accept=".json">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>Click to upload</span>
            </a>
          </b-upload>
        </b-field>
      </form>

      <b-field label="Project Name">
        <b-input :value="form.name" type="text" name="project-name" readonly>
        </b-input>
      </b-field>
      <b-field>
        <template slot="label">
          Project Website &nbsp;
          <b-tooltip
            label="Project website is required"
            type="is-light"
            multilined
            square
            animated
          >
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
      <b-field label="Project Starting Country">
        <b-taginput
          icon="label"
          name="origin_country"
          :allow-new="false"
          :value="form.origin_country"
          readonly
          :closable="false"
          :before-adding="beforeAdding"
        >
        </b-taginput>
      </b-field>
      <b-field label="Project Languages">
        <b-taginput
          icon="label"
          name="language"
          :allow-new="false"
          :value="form.language"
          readonly
          :closable="false"
          :before-adding="beforeAdding"
        >
        </b-taginput>
      </b-field>
      <b-field label="Project Type">
        <b-input
          :value="form.entry_type"
          type="text"
          name="entry_type"
          readonly
        >
        </b-input>
      </b-field>
      <b-field label="Project Category">
        <b-taginput
          name="category"
          icon="label"
          :allow-new="false"
          :value="form.category"
          readonly
          :closable="false"
          :before-adding="beforeAdding"
        >
        </b-taginput>
      </b-field>
      <b-field label="Project Licence">
        <b-taginput
          name="licence"
          icon="label"
          :allow-new="false"
          :value="form.licence"
          readonly
          :closable="false"
          :before-adding="beforeAdding"
        >
        </b-taginput>
      </b-field>
      <b-field label="Project Sector">
        <b-taginput
          name="sector"
          icon="label"
          :allow-new="false"
          :value="form.sector"
          readonly
          :closable="false"
          :before-adding="beforeAdding"
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
      <template v-for="(dev, ind) in form.developers">
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

          <b-field label="Developer Website">
            <b-input
              :value="dev.developer_url"
              type="text"
              :name="`developer_url${ind}`"
              readonly
            >
            </b-input>
          </b-field>

          <b-field label="Developer Logo URL">
            <b-input
              :value="dev.developer_logo_url"
              type="text"
              :name="`developer_logo_url${ind}`"
              readonly
            >
            </b-input>
          </b-field>

          <b-field label="Developer Category">
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
      <template v-for="(dev, ind) in form.maintainers">
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

          <b-field label="Maintainers Website">
            <b-input
              :value="dev.maintainer_url"
              type="text"
              readonly
              :name="`maintainer_url${ind}`"
            >
            </b-input>
          </b-field>

          <b-field label="Maintainers Logo URL">
            <b-input
              :value="dev.maintainer_logo_url"
              type="text"
              readonly
              :name="`maintainer_logo_url${ind}`"
            >
            </b-input>
          </b-field>

          <b-field label="Maintainers Repository">
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
      <template v-for="(dev, ind) in form.users">
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

        <b-button
          id="submitbtn"
          type="submit"
          native-type="submit"
          form="formcreation"
          class="button is-primary is-outlined"
        >
          Submit Form
        </b-button>
      </b-field>
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
                mode="lazy"
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
                mode="lazy"
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
                      square
                      multilined
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
                mode="lazy"
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
                      square
                      multilined
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
                mode="lazy"
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
                      square
                      multilined
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
                mode="lazy"
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
                mode="lazy"
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
                      square
                      multilined
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
                mode="lazy"
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
                      square
                      multilined
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
                mode="lazy"
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
                      square
                      multilined
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
                mode="lazy"
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
                mode="lazy"
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
                      square
                      multilined
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
                mode="lazy"
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
                      square
                      multilined
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
                mode="lazy"
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
                    <b-tooltip
                      label="eg: London"
                      type="is-light"
                      animated
                      square
                      multilined
                    >
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
                mode="lazy"
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
                    <b-tooltip
                      label="eg: User Geolocation Coordinates, long: 54.15451840 lat: -1.45981919"
                      type="is-light"
                      animated
                      square
                      multilined
                    >
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
                  </b-input>
                </b-field>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors, valid }"
                mode="lazy"
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

<script lang="ts">
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
      currentStep: 1,
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
        sendername: '' as string,
        senderemail: '' as string,
        senderorganisation: '' as string,
      },
      form: {
        name: '' as string,
        official_url: '' as string,
        logo_url: '' as string,
        repository: '' as string,
        origin_country: [] as string[],
        entry_type: '' as string,
        sector: [] as string[],
        language: [] as string[],
        licence: [] as string[],
        category: [] as string[],
        description: '' as string,
        developers: [
          {
            developer_name: '' as string,
            developer_url: '' as string,
            developer_logo_url: '' as string,
            developer_category: '' as string,
          },
        ],
        maintainers: [
          {
            maintainer_name: '' as string,
            maintainer_url: '' as string,
            maintainer_logo_url: '' as string,
            maintainer_repository: '' as string,
          },
        ],
        users: [
          {
            user_name: '' as string,
            user_location: '' as string,
            user_logo_url: '' as string,
            user_url: '' as string,
            user_geolocation: {
              lat: '' as string,
              long: '' as string,
            },
          },
        ],
      },
      defaultSenderDetails: {
        sendername: '' as string,
        senderemail: '' as string,
        senderorganisation: '' as string,
      },
      defaultForm: {
        name: '' as string,
        official_url: '' as string,
        logo_url: '' as string,
        repository: '' as string,
        origin_country: [] as string[],
        entry_type: '' as string,
        sector: [] as string[],
        language: [] as string[],
        licence: [] as string[],
        category: [] as string[],
        description: '' as string,
        developers: [
          {
            developer_name: '' as string,
            developer_url: '' as string,
            developer_logo_url: '' as string,
            developer_category: '' as string,
          },
        ],
        maintainers: [
          {
            maintainer_name: '' as string,
            maintainer_url: '' as string,
            maintainer_logo_url: '' as string,
            maintainer_repository: '' as string,
          },
        ],
        users: [
          {
            user_name: '' as string,
            user_location: '' as string,
            user_logo_url: '' as string,
            user_url: '' as string,
            user_geolocation: {
              lat: '' as string,
              long: '' as string,
            },
          },
        ],
      },
      tempDevData: {
        developer_name: '' as string,
        developer_url: '' as string,
        developer_logo_url: '' as string,
        developer_category: '' as string,
      },
      tempMaintData: {
        maintainer_name: '' as string,
        maintainer_url: '' as string,
        maintainer_logo_url: '' as string,
        maintainer_repository: '' as string,
      },
      tempUserData: {
        user_name: '' as string,
        user_location: '' as string,
        user_logo_url: '' as string,
        user_url: '' as string,
        user_geolocation: {
          lat: '' as string,
          long: '' as string,
        },
      },
      formSubmissionResult: null,
      files: [] as any[],
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
      this.currentStep = 1
      this.submitSuccess = false
      // @ts-ignore
      this.$refs.builder1.reset()
      // @ts-ignore
      this.$refs.builder2.reset()
      // @ts-ignore
      this.$refs.builder3.reset()
      // @ts-ignore
      this.$refs.builder4.reset()
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
    removeDeveloper(index: number) {
      this.form.developers.splice(index, 1)
      this.tempDevData = {
        developer_name: '',
        developer_url: '',
        developer_logo_url: '',
        developer_category: '',
      }
      this.counterDev = this.counterDev - 1
      if (!this.counterDev) {
        this.counterDev = 0
      }
    },
    removeMaintainer(index: number) {
      this.form.maintainers.splice(index, 1)
      this.tempMaintData = {
        maintainer_name: '',
        maintainer_url: '',
        maintainer_logo_url: '',
        maintainer_repository: '',
      }
      this.counterMaint = this.counterMaint - 1
      if (!this.counterMaint) {
        this.counterMaint = 0
      }
    },
    removeUser(index: number) {
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
      if (!this.counterUsers) {
        this.counterUsers = 0
      }
    },
    encode(data: any) {
      const formData = new FormData()
      const files = new Blob([JSON.stringify(data as any)], {
        type: 'application/json',
      })
      const dataToEncod = {
        'form-name': 'formcreation',
        ...this.senderDetails,
      }
      for (const key of Object.keys(dataToEncod as any)) {
        // @ts-ignore
        formData.append(key, dataToEncod[key])
      }
      formData.append('files', files, 'application/json')

      return formData
    },
    onSubmit() {
      if (this.currentStep === 5) {
        this.sendingForm = true
        const axiosConfig = {
          header: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
          },
        }
        // @ts-ignore
        this.$axios
          .post(
            'https://testing-pcd.netlify.app',
            // '/',
            this.encode({ ...this.form }),
            axiosConfig
          )
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .then((res: any) => {
            setTimeout(() => {
              this.submitSuccess = true
              this.sendingForm = false
              this.currentStep = 6
              this.$nextTick(() => {
                this.form = Object.assign({}, this.defaultForm)
                this.senderDetails = Object.assign(
                  {},
                  this.defaultSenderDetails
                )
                // @ts-ignore
                this.$refs.builder1.reset()
                // @ts-ignore
                this.$refs.builder2.reset()
                // @ts-ignore
                this.$refs.builder3.reset()
                // @ts-ignore
                this.$refs.builder4.reset()
              })
            }, 1500)
          })
          .catch((error: any) => {
            // eslint-disable-next-line no-console
            console.error('Error', error)
            this.sendingForm = false
          })
      }
    },
    formbuild1() {
      // @ts-ignore
      this.$refs.builder1.validate()
      this.currentStep++
    },
    formbuild2() {
      // @ts-ignore
      this.$refs.builder2.validate()
      this.currentStep++
    },
    formbuild3() {
      // @ts-ignore
      this.$refs.builder3.validate()
      this.currentStep++
    },
    formbuild4() {
      // @ts-ignore
      this.$refs.builder4.validate()
      this.currentStep++
    },
    beforeAdding(tag: string) {
      return tag.length > 2
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
