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
    <validation-observer v-slot="{ handleSubmit }" slim>
      <form
        id="formbuilder"
        ref="formbuilder"
        name="formbuilder"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <input type="hidden" name="form-name" value="formbuilder" />
        <div v-if="currentStep === 1" class="step">
          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="name:3"
            name="sendername"
            :skip-if-empty="false"
          >
            <b-field
              label="Name"
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input v-model="form.sendername" type="text" required>
              </b-input>
            </b-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="required|email"
            name="senderemail"
            :skip-if-empty="false"
          >
            <b-field
              label="Email"
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input v-model="form.senderemail" type="email" required>
              </b-input>
            </b-field>
          </validation-provider>
          <b-field label="Organisation">
            <b-input v-model="form.senderorganisation" type="text"> </b-input>
          </b-field>
        </div>
        <div v-else-if="currentStep === 2" class="step">
          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="name:3"
            name="projectname"
            :skip-if-empty="false"
          >
            <b-field
              label="Project Name"
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input v-model="form.name" type="text" required> </b-input>
            </b-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="url_string"
            name="officialurl"
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
              <b-input v-model="form.official_url" type="text" required>
              </b-input>
            </b-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="url_string"
            name="repository"
            :skip-if-empty="false"
          >
            <b-field
              label="Repository URL"
              v-bind="$attrs"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input v-model="form.repository" type="text" required>
              </b-input>
            </b-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="name:1"
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
                required
                :data="countries"
                autocomplete
                icon="label"
                :allow-new="true"
                :value="form.origin_country"
              >
              </b-taginput>
            </b-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="name:1"
            name="projectlang"
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
                required
                autocomplete
                icon="label"
                :data="languages"
                :allow-new="true"
                :value="form.language"
              >
              </b-taginput>
            </b-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="name:3"
            name="projecttype"
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
                maxlength="50"
                required
              >
              </b-input>
            </b-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="alpha_num:1"
            name="projectlicence"
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
                required
                autocomplete
                icon="label"
                :allow-new="true"
                :value="form.licence"
              >
              </b-taginput>
            </b-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="alpha_num:1"
            name="projectcateg"
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
                required
                icon="label"
                autocomplete
                :allow-new="true"
                :value="form.category"
              >
              </b-taginput>
            </b-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="name:1"
            name="projectsector"
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
                required
                icon="label"
                :allow-new="true"
                :data="sectors"
                :value="form.sector.toString()"
              >
              </b-taginput>
            </b-field>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="minmax:10,350"
            name="description"
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
                maxlength="350"
                required
              >
              </b-input>
            </b-field>
          </validation-provider>
        </div>
        <div v-else-if="currentStep === 3" class="step">
          <b-field label="Developers">
            <b-button @click.prevent="addDevelopers">Add Developers</b-button>
          </b-field>
          <div v-for="(dev, ind) in form.developers" :key="ind">
            <hr v-if="ind >= 1" />

            <b-field v-if="ind >= 1" class="is-flex justify-end">
              <b-button @click.prevent="removeDeveloper(ind)">
                Remove Dev
              </b-button>
            </b-field>
            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="name:3"
              :name="`devname-${ind}`"
              :skip-if-empty="false"
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
                  maxlength="50"
                  required
                >
                </b-input>
              </b-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="url_string"
              :name="`devwebsite-${ind}`"
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
                    <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                  </b-tooltip>
                </template>
                <b-input
                  v-model="dev.developer_url"
                  type="text"
                  maxlength="50"
                  required
                >
                </b-input>
              </b-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="url_string"
              :name="`devlogo-${ind}`"
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
                    <b-icon size="is-small" icon="help-circle-outline"></b-icon>
                  </b-tooltip>
                </template>
                <b-input
                  v-model="dev.developer_logo_url"
                  type="text"
                  maxlength="50"
                  required
                >
                </b-input>
              </b-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="alpha_num:3"
              :skip-if-empty="false"
              :name="`devcateg-${ind}`"
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
                  maxlength="50"
                  required
                >
                </b-input>
              </b-field>
            </validation-provider>
          </div>
          <b-field label="Maintainers">
            <b-checkbox v-model="sameAsDevs">Same as Developers</b-checkbox>
          </b-field>
          <div v-if="!sameAsDevs">
            <b-field label="Maintainers">
              <b-button @click.prevent="addMaintainers">
                Add Maintainers
              </b-button>
            </b-field>
            <div v-for="(dev, ind) in form.maintainers" :key="ind">
              <hr v-if="ind >= 1" />
              <b-field v-if="ind >= 1" class="is-flex justify-end">
                <b-button @click.prevent="removeMaintainer(ind)">
                  Remove Maintainer
                </b-button>
              </b-field>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
                rules="name:3"
                :name="`maintname-${ind}`"
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
                    maxlength="50"
                    required
                  >
                  </b-input>
                </b-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
                rules="url_string"
                :name="`maintwebsite-${ind}`"
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
                  <b-input v-model="dev.maintainer_url" type="text" required>
                  </b-input>
                </b-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
                rules="url_string"
                :name="`maintlogo-${ind}`"
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
                    required
                  >
                  </b-input>
                </b-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
                rules="url_string"
                :name="`maintrepo-${ind}`"
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
                    required
                  >
                  </b-input>
                </b-field>
              </validation-provider>
            </div>
          </div>
        </div>
        <div v-else-if="currentStep === 4" class="step">
          <b-field label="Users">
            <b-button @click.prevent="addUsers">Add Users</b-button>
          </b-field>
          <div v-for="(dev, ind) in form.users" :key="ind">
            <hr v-if="ind >= 1" />
            <b-field v-if="ind >= 1" class="is-flex justify-end">
              <b-button @click.prevent="removeUser(ind)">Remove Dev</b-button>
            </b-field>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="name:3"
              :name="`username-${ind}`"
              :skip-if-empty="false"
            >
              <b-field
                label="User Name"
                v-bind="$attrs"
                :type="{ 'is-danger': errors[0], 'is-success': valid }"
                :message="errors"
              >
                <b-input v-model="dev.user_name" type="text" required>
                </b-input>
              </b-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="url_string"
              :name="`userwebsite-${ind}`"
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
                <b-input v-model="dev.user_url" type="text" required> </b-input>
              </b-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="url_string"
              :name="`userlogo-${ind}`"
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
                <b-input v-model="dev.user_logo_url" type="text" required>
                </b-input>
              </b-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="name:3"
              :name="`userlocation-${ind}`"
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
                <b-input v-model="dev.user_location" type="text" required>
                </b-input>
              </b-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="latlong"
              :name="`userlong-${ind}`"
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
                  type="number"
                  maxlength="10"
                  required
                >
                </b-input>
              </b-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="latlong"
              :name="`userlat-${ind}`"
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
                  type="number"
                  maxlength="10"
                  required
                >
                </b-input>
              </b-field>
            </validation-provider>
          </div>
        </div>
        <div v-else-if="currentStep === 5" class="step">
          <div v-for="(dev, ind) in form.users" :key="ind">
            <hr v-if="ind >= 1" />
            <b-field label="User Name" readonly>
              <b-input type="text" :value="dev.user_name"> </b-input>
            </b-field>
            <b-field label="Users Website" readonly>
              <b-input type="text" :value="dev.user_url"> </b-input>
            </b-field>
            <b-field label="User Logo URL" readonly>
              <b-input v-model="dev.user_logo_url" type="text"> </b-input>
            </b-field>
            <b-field label="User Location" readonly>
              <b-input v-model="dev.user_location" type="text"> </b-input>
            </b-field>
            <b-field label="User Geolocation" readonly>
              <b-input type="text" :value="dev.user_geolocation.long">
              </b-input>
              <b-input type="text" :value="dev.user_geolocation.lat"> </b-input>
            </b-field>
          </div>
        </div>

        <b-field v-show="currentStep < 6" class="is-between pt-5">
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
            class="button is-primary is-outlined"
          >
            Next Step
          </button>
          <button
            v-else-if="currentStep === 4"
            type="submit"
            class="button is-primary is-outlined"
          >
            Review Information
          </button>
          <button
            v-else
            id="submitbtn"
            type="submit"
            class="button is-primary is-outlined"
          >
            Submit Form
          </button>
        </b-field>
      </form>
    </validation-observer>
    <b-loading :active.sync="sendingForm" :can-cancel="false"></b-loading>
    <div v-show="submitSuccess" id="form-result" class="step">
      Thanks for the email. We will analyze it and add it to our databse
    </div>
    <b-modal
      :active.sync="developersModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <div class="modal-card" style="width: auto;">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Developer</p>
        </header>
        <section class="modal-card-body">
          <validation-observer v-slot="{ handleSubmit }" slim>
            <form
              id="devModal"
              ref="devModal"
              @submit.prevent="handleSubmit(saveDeveloper)"
            >
              <b-field label="Developer Name">
                <b-input
                  v-model="tempDevData.developer_name"
                  type="text"
                  required
                >
                </b-input>
              </b-field>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
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
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
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
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
                rules="alpha_num:3"
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
                  <b-input
                    v-model="tempDevData.developer_category"
                    type="text"
                    maxlength="50"
                    required
                  >
                  </b-input>
                </b-field>
              </validation-provider>
              <b-field>
                <button class="button is-primary" native-type="submit">
                  Add Developer
                </button>
              </b-field>
            </form>
          </validation-observer>
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
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <div class="modal-card" style="width: auto;">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Maintainer</p>
        </header>

        <section class="modal-card-body">
          <validation-observer v-slot="{ handleSubmit }" slim>
            <form
              id="maintModal"
              ref="maintModal"
              @submit.prevent="handleSubmit(saveMaintainer)"
            >
              <b-field label="Maintainer Name">
                <b-input
                  v-model="tempMaintData.maintainer_name"
                  type="text"
                  value=""
                  required
                >
                </b-input>
              </b-field>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
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
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
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
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
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
              </validation-provider>

              <b-field>
                <button class="button is-primary" native-type="submit">
                  Add Developer
                </button>
              </b-field>
            </form>
          </validation-observer>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click.prevent="closeModal">
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
          <validation-observer v-slot="{ handleSubmit }" slim>
            <form
              id="userModal"
              ref="userModal"
              @submit.prevent="handleSubmit(saveUser)"
            >
              <b-field label="User Name">
                <b-input v-model="tempUserData.user_name" type="text" required>
                </b-input>
              </b-field>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
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
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
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
              </validation-provider>
              <validation-provider
                v-slot="{ errors, invalid, valid }"
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
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
                rules="latlong"
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
                    type="number"
                    maxlength="10"
                    required
                  >
                  </b-input>
                  <b-input
                    v-model="tempUserData.user_geolocation.lat"
                    type="number"
                    maxlength="10"
                    required
                  >
                  </b-input>
                </b-field>
              </validation-provider>

              <b-field>
                <button class="button is-primary" native-type="submit">
                  Add User
                </button>
              </b-field>
            </form>
          </validation-observer>
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
      currentStep: 1 as number,
      submitSuccess: false as boolean,
      developersModalActive: false as boolean,
      maintainersModalActive: false as boolean,
      usersModalActive: false as boolean,
      sendingForm: false as boolean,
      validForm: false as boolean,
      formSubmitted: false as boolean,
      counterDev: 0 as number,
      counterMaint: 0 as number,
      counterUsers: 0 as number,
      sameAsDevs: false as boolean,
      userCategories: [],
      form: {
        sendername: 'name',
        senderemail: 'email@test.com',
        senderorganisation: 'organisation',
        name: 'project name',
        official_url: 'http://test.com',
        logo_url: 'http://test.com',
        repository: 'http://test.com',
        origin_country: ['country'],
        entry_type: 'project type',
        sector: ['sector'],
        language: ['en, it, de'],
        licence: ['licence'],
        category: ['categ'],
        description: 'descirpieornainawin ainaoidnioandi oansiodn oiasd idi na',
        developers: [
          {
            developer_name: 'dev name',
            developer_url: 'http://test.com',
            developer_logo_url: 'http://test.com',
            developer_category: 'dev catego',
          },
        ],
        maintainers: [
          {
            maintainer_name: 'mant name',
            maintainer_url: 'http://test.com',
            maintainer_logo_url: 'http://test.com',
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
      tempDevData: {
        developer_name: 'dev name',
        developer_url: 'http://test.com',
        developer_logo_url: 'http://test.com',
        developer_category: 'dev catego',
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
    randomNonce() {
      return (Math.random() * 1e32).toString(24)
    },
    randomId() {
      return (Math.random() * 1e32).toString(20)
    },
  },
  methods: {
    backToStep() {
      if (this.currentStep === 1) {
        return
      }
      this.currentStep--
    },
    addDevelopers() {
      this.counterDev++
      this.developersModalActive = true
    },
    addMaintainers() {
      this.counterMaint++
      this.maintainersModalActive = true
    },
    addUsers() {
      this.counterUsers++
      this.usersModalActive = true
    },
    closeModal() {
      this.developersModalActive = false
      this.maintainersModalActive = false
      this.usersModalActive = false
    },
    saveDeveloper() {
      this.developersModalActive = false
      this.form.developers.push(this.tempDevData)
      this.tempDevData = {
        developer_name: '',
        developer_url: '',
        developer_logo_url: '',
        developer_category: '',
      }
    },
    saveUser() {
      this.usersModalActive = false
      this.form.users.push(this.tempUserData)
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
      this.form.maintainers.push(this.tempMaintData)
      this.tempMaintData = {
        maintainer_name: '',
        maintainer_url: '',
        maintainer_logo_url: '',
        maintainer_repository: '',
      }
    },
    removeDeveloper(index: number) {
      this.form.developers.splice(index, 1)
      this.tempDevData = {
        developer_name: '',
        developer_url: '',
        developer_logo_url: '',
        developer_category: '',
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
    },
    encode(data: any) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    onSubmit() {
      if (this.currentStep === 5) {
        this.sendingForm = true
        const axiosConfig = {
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
        // @ts-ignore
        this.$axios
          .post(
            '/',
            this.encode({
              'form-name': 'formbuilder',
              ...this.form,
            }),
            axiosConfig
          )
          .then((res: any) => {
            setTimeout(() => {
              console.log('response', res)
              this.submitSuccess = true
              this.sendingForm = false
              this.currentStep = 6
              requestAnimationFrame(() => {
                // @ts-ignore
                this.$refs.formbuilder.reset()
              })
            }, 500)
          })
          .catch((error: any) => {
            console.error('Error', error)
            this.sendingForm = false
          })

        return
      }
      this.currentStep++
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
