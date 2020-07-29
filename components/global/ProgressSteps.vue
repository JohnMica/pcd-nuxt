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
            <i class="fa fa-check"></i>
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
            <i class="fa fa-check"></i>
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
            <i class="fa fa-check"></i>
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
            <i class="fa fa-check"></i>
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
            <i class="fa fa-flag"></i>
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
    <validation-observer ref="formbuilder" v-slot="{ handleSubmit }" tag="div">
      <form id="formbuilder" @submit.prevent="handleSubmit(onSubmit)">
        <!-- <b-input type="hidden" value="formbuilder" autocomplete="off"></b-input>
        <b-input
          type="hidden"
          :value="randomNonce"
          autocomplete="off"
        ></b-input>
        <b-input type="hidden" :value="randomId" autocomplete="off"></b-input> -->
        <div v-if="currentStep === 1" class="step">
          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="name:3"
          >
            <b-field label="Name">
              <b-input
                v-model="form.yourName"
                type="text"
                required
                :class="{ 'is-danger': invalid, 'is-success': valid }"
              >
              </b-input>
            </b-field>
            <span v-if="errors.length" class="has-text-danger"
              ><small>{{ errors[0] }}</small></span
            >
          </validation-provider>
          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="required|email"
          >
            <b-field label="Email">
              <b-input
                v-model="form.emailAddress"
                type="email"
                maxlength="50"
                required
                :class="{ 'is-danger': invalid, 'is-success': valid }"
              >
              </b-input>
            </b-field>
            <p v-if="errors.length" class="has-text-danger">
              <small>{{ errors[0] }}</small>
            </p>
          </validation-provider>
          <b-field label="Organisation">
            <b-input v-model="form.organisation" type="text" maxlength="50">
            </b-input>
          </b-field>
        </div>

        <div v-show="currentStep === 2" class="step">
          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="name:3"
          >
            >
            <b-field label="Project Name">
              <b-input
                v-model="form.projectName"
                type="text"
                maxlength="50"
                required
                :class="{ 'is-danger': invalid, 'is-success': valid }"
              >
              </b-input>
            </b-field>
            <p v-if="errors.length" class="has-text-danger">
              <small>{{ errors[0] }}</small>
            </p>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="url_string"
          >
            <b-field>
              <template slot="label">
                Project Website &nbsp;
                <b-tooltip label="Project website is required" type="is-light">
                  <b-icon size="is-small" icon="question-circle"></b-icon>
                </b-tooltip>
              </template>
              <b-input
                v-model="form.projectWebsite"
                type="text"
                maxlength="50"
                required
                :class="{ 'is-danger': invalid, 'is-success': valid }"
              >
              </b-input>
            </b-field>
            <p v-if="errors.length" class="has-text-danger">
              <small>{{ errors[0] }}</small>
            </p>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="url_string"
          >
            >
            <b-field label="Repository URL">
              <b-input
                v-model="form.projectUrl"
                type="text"
                maxlength="50"
                required
                :class="{ 'is-danger': invalid, 'is-success': valid }"
              >
              </b-input>
            </b-field>
            <p v-if="errors.length" class="has-text-danger">
              <small>{{ errors[0] }}</small>
            </p>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="alpha_num:2"
          >
            >
            <b-tooltip label="eg: Canada" type="is-light" animated>
              <b-field label="Project Starting Country">
                <b-input
                  v-model="form.projectCountry"
                  type="text"
                  maxlength="50"
                  required
                  :class="{ 'is-danger': invalid, 'is-success': valid }"
                >
                </b-input>
              </b-field>
            </b-tooltip>
            <p v-if="errors.length" class="has-text-danger">
              <small>{{ errors[0] }}</small>
            </p>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="alpha_num:1"
          >
            >
            <b-tooltip label="eg: EN, IT, FR, DE" type="is-light" animated>
              <b-field label="Project Languages">
                <b-input
                  v-model="form.projectLanguages"
                  type="text"
                  required
                  :class="{ 'is-danger': invalid, 'is-success': valid }"
                >
                </b-input>
              </b-field>
            </b-tooltip>
            <p v-if="errors.length" class="has-text-danger">
              <small>{{ errors[0] }}</small>
            </p>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="alpha_num:3"
          >
            >
            <b-tooltip
              label="eg: website, mobile app, platform"
              type="is-light"
              animated
            >
              <b-field label="Project Type">
                <b-input
                  v-model="form.projectType"
                  type="text"
                  maxlength="50"
                  required
                  :class="{ 'is-danger': invalid, 'is-success': valid }"
                >
                </b-input>
              </b-field>
            </b-tooltip>
            <p v-if="errors.length" class="has-text-danger">
              <small>{{ errors[0] }}</small>
            </p>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="alpha_num:3"
          >
            >
            <b-tooltip label="eg: MIT, GPL" type="is-light" animated>
              <b-field label="Project Licence">
                <b-input
                  v-model="form.projectLicence"
                  type="text"
                  maxlength="50"
                  required
                  :class="{ 'is-danger': invalid, 'is-success': valid }"
                >
                </b-input>
              </b-field>
            </b-tooltip>
            <p v-if="errors.length" class="has-text-danger">
              <small>{{ errors[0] }}</small>
            </p>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="alpha_num:3"
          >
            >
            <b-tooltip
              label="eg: Education Software, Software"
              type="is-light"
              animated
            >
              <b-field label="Project Category">
                <b-input
                  v-model="form.projectCategory"
                  type="text"
                  maxlength="50"
                  required
                  :class="{ 'is-danger': invalid, 'is-success': valid }"
                >
                </b-input>
              </b-field>
            </b-tooltip>
            <p v-if="errors.length" class="has-text-danger">
              <small>{{ errors[0] }}</small>
            </p>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="alpha_num:3"
          >
            >
            <b-tooltip
              label="eg: Local Government, Public Health"
              type="is-light"
              animated
            >
              <b-field label="Project Sector">
                <b-input
                  v-model="form.projectSector"
                  type="text"
                  maxlength="50"
                  required
                  :class="{ 'is-danger': invalid, 'is-success': valid }"
                >
                </b-input>
              </b-field>
            </b-tooltip>
            <p v-if="errors.length" class="has-text-danger">
              <small>{{ errors[0] }}</small>
            </p>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            tag="div"
            rules="minmax:10,350"
          >
            >
            <b-field label="Project Description">
              <b-input
                v-model="form.projectDescription"
                type="textarea"
                maxlength="350"
                required
                :class="{ 'is-danger': invalid, 'is-success': valid }"
              >
              </b-input>
            </b-field>
            <p v-if="errors.length" class="has-text-danger">
              <small>{{ errors[0] }}</small>
            </p>
          </validation-provider>
        </div>

        <div v-show="currentStep === 3" class="step">
          <b-field label="Developers">
            <b-button @click.prevent="addDevelopers">Add Developers</b-button>
          </b-field>
          <div v-for="(dev, ind) in form.projectDevelopers" :key="ind">
            <hr v-if="ind >= 1" />

            <b-field v-if="ind >= 1" class="is-flex justify-end">
              <b-button @click.prevent="removeDeveloper(ind)">
                Remove Dev
              </b-button>
            </b-field>
            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="name:3"
            >
              <b-field label="Developer Name">
                <b-input
                  v-model="dev.name"
                  type="text"
                  maxlength="50"
                  required
                  :class="{ 'is-danger': invalid, 'is-success': valid }"
                >
                </b-input>
              </b-field>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="url_string"
            >
              <div>
                <b-tooltip label="eg: https://example.com">
                  <b-field label="Developer Website">
                    <b-input
                      v-model="dev.website"
                      type="text"
                      maxlength="50"
                      required
                      :class="{ 'is-danger': invalid, 'is-success': valid }"
                    >
                    </b-input>
                  </b-field>
                </b-tooltip>
                <p v-if="errors.length" class="has-text-danger">
                  <small>{{ errors[0] }}</small>
                </p>
              </div>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="url_string"
            >
              <div>
                <b-tooltip label="eg: https://example.com/logo.png">
                  <b-field label="Developer Logo URL">
                    <b-input
                      v-model="dev.logoUrl"
                      type="text"
                      maxlength="50"
                      required
                      :class="{ 'is-danger': invalid, 'is-success': valid }"
                    >
                    </b-input>
                  </b-field>
                </b-tooltip>
                <p v-if="errors.length" class="has-text-danger">
                  <small>{{ errors[0] }}</small>
                </p>
              </div>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="alpha_num:3"
            >
              <div>
                <b-tooltip label="eg: Education Software, Software">
                  <b-field label="Developer Category">
                    <b-input
                      v-model="dev.category"
                      type="text"
                      maxlength="50"
                      required
                      :class="{ 'is-danger': invalid, 'is-success': valid }"
                    >
                    </b-input>
                  </b-field>
                </b-tooltip>
                <p v-if="errors.length" class="has-text-danger">
                  <small>{{ errors[0] }}</small>
                </p>
              </div>
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
            <div v-for="(dev, ind) in form.projectMaintainers" :key="ind">
              <hr v-if="ind >= 1" />
              <b-field v-if="ind >= 1" class="is-flex justify-end">
                <b-button @click.prevent="removeMaintainer(ind)">
                  Remove Dev
                </b-button>
              </b-field>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
                rules="name:3"
              >
                <b-field label="Maintainers Name">
                  <b-input
                    v-model="dev.name"
                    type="text"
                    maxlength="50"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
                <p v-if="errors.length" class="has-text-danger">
                  <small>{{ errors[0] }}</small>
                </p>
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
                rules="url_string"
              >
                <div>
                  <b-tooltip label="eg: https://example.com">
                    <b-field label="Maintainers Website">
                      <b-input
                        v-model="dev.website"
                        type="text"
                        maxlength="50"
                        required
                        :class="{ 'is-danger': invalid, 'is-success': valid }"
                      >
                      </b-input>
                    </b-field>
                  </b-tooltip>
                  <p v-if="errors.length" class="has-text-danger">
                    <small>{{ errors[0] }}</small>
                  </p>
                </div>
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
                rules="url_string"
              >
                <div>
                  <b-tooltip label="eg: https://example.com/logo.png">
                    <b-field label="Maintainers Logo">
                      <b-input
                        v-model="dev.logoUrl"
                        type="text"
                        maxlength="50"
                        required
                        :class="{ 'is-danger': invalid, 'is-success': valid }"
                      >
                      </b-input>
                    </b-field>
                  </b-tooltip>
                  <p v-if="errors.length" class="has-text-danger">
                    <small>{{ errors[0] }}</small>
                  </p>
                </div>
              </validation-provider>

              <validation-provider
                v-slot="{ errors, invalid, valid }"
                rules="alpha_num:3"
              >
                <div>
                  <b-tooltip label="eg: Education Software, Software">
                    <b-field label="Maintainers Category">
                      <b-input
                        v-model="dev.category"
                        type="text"
                        maxlength="50"
                        required
                        :class="{ 'is-danger': invalid, 'is-success': valid }"
                      >
                      </b-input>
                    </b-field>
                  </b-tooltip>
                  <p v-if="errors.length" class="has-text-danger">
                    <small>{{ errors[0] }}</small>
                  </p>
                </div>
              </validation-provider>
            </div>
          </div>
        </div>

        <div v-show="currentStep === 4" class="step">
          <b-field label="Users">
            <b-button @click.prevent="addUsers">Add Users</b-button>
          </b-field>
          <div v-for="(dev, ind) in form.projectUsers" :key="ind">
            <hr v-if="ind >= 1" />
            <b-field v-if="ind >= 1" class="is-flex justify-end">
              <b-button @click.prevent="removeUser(ind)">Remove Dev</b-button>
            </b-field>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="name:3"
            >
              <b-field label="Users Name">
                <b-input
                  v-model="dev.name"
                  type="text"
                  maxlength="50"
                  required
                  :class="{ 'is-danger': invalid, 'is-success': valid }"
                >
                </b-input>
              </b-field>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="url_string"
            >
              <div>
                <b-tooltip label="eg: https://example.com">
                  <b-field label="Users Website">
                    <b-input
                      v-model="dev.website"
                      type="text"
                      maxlength="50"
                      required
                      :class="{ 'is-danger': invalid, 'is-success': valid }"
                    >
                    </b-input>
                  </b-field>
                </b-tooltip>
                <p v-if="errors.length" class="has-text-danger">
                  <small>{{ errors[0] }}</small>
                </p>
              </div>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="url_string"
            >
              <div>
                <b-tooltip label="eg: https://example.com/logo.png">
                  <b-field label="Users Logo">
                    <b-input
                      v-model="dev.logoUrl"
                      type="text"
                      maxlength="50"
                      required
                      :class="{ 'is-danger': invalid, 'is-success': valid }"
                    >
                    </b-input>
                  </b-field>
                </b-tooltip>
                <p v-if="errors.length" class="has-text-danger">
                  <small>{{ errors[0] }}</small>
                </p>
              </div>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="alpha_num:3"
            >
              <div>
                <b-tooltip label="eg: Education Software, Software">
                  <b-field label="Users Category">
                    <b-input
                      v-model="dev.category"
                      type="text"
                      maxlength="50"
                      required
                      :class="{ 'is-danger': invalid, 'is-success': valid }"
                    >
                    </b-input>
                  </b-field>
                </b-tooltip>
                <p v-if="errors.length" class="has-text-danger">
                  <small>{{ errors[0] }}</small>
                </p>
              </div>
            </validation-provider>
            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="latlong"
            >
              <div>
                <b-tooltip label="eg: Latitude required for map placement">
                  <b-field label="User Location Latitude">
                    <b-input
                      v-model="dev.location.latitude"
                      type="text"
                      maxlength="10"
                      required
                      :class="{ 'is-danger': invalid, 'is-success': valid }"
                    >
                    </b-input>
                  </b-field>
                </b-tooltip>
                <p v-if="errors.length" class="has-text-danger">
                  <small>{{ errors[0] }}</small>
                </p>
              </div>
            </validation-provider>
            <validation-provider
              v-slot="{ errors, invalid, valid }"
              rules="latlong"
            >
              <div>
                <b-tooltip label="eg: Longitude required for map placement">
                  <b-field label="User Location Longitude">
                    <b-input
                      v-model="dev.location.longitude"
                      type="text"
                      maxlength="10"
                      required
                      :class="{ 'is-danger': invalid, 'is-success': valid }"
                    >
                    </b-input>
                  </b-field>
                </b-tooltip>
                <p v-if="errors.length" class="has-text-danger">
                  <small>{{ errors[0] }}</small>
                </p>
              </div>
            </validation-provider>
          </div>
        </div>
        <div v-show="currentStep === 5" class="step">
          <div v-for="(dev, ind) in form.projectUsers" :key="ind">
            <hr v-if="ind >= 1" />
            <b-field label="Users Name">
              <b-input
                type="text"
                readonly
                maxlength="50"
                :value="form.yourName"
                required
              >
              </b-input>
            </b-field>
            <div>
              <b-tooltip label="eg: https://example.com">
                <b-field label="Users Website">
                  <b-input
                    type="text"
                    readonly
                    maxlength="50"
                    :value="dev.website"
                    required
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
            </div>
            <div>
              <b-tooltip label="eg: https://example.com/logo.png">
                <b-field label="Users Logo" readonly>
                  <b-input
                    v-model="dev.logoUrl"
                    type="text"
                    maxlength="50"
                    required
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
            </div>
            <div>
              <b-tooltip label="eg: Education Software, Software">
                <b-field label="Users Category">
                  <b-input
                    type="text"
                    readonly
                    maxlength="50"
                    :value="dev.category"
                    required
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
            </div>
            <div>
              <b-tooltip label="eg: Latitude required for map placement">
                <b-field label="User Location Latitude">
                  <b-input
                    type="text"
                    readonly
                    maxlength="10"
                    :value="dev.location.latitude"
                    required
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
            </div>
            <div>
              <b-tooltip label="eg: Longitude required for map placement">
                <b-field label="User Location Longitude">
                  <b-input
                    readonly
                    type="text"
                    maxlength="10"
                    :value="dev.location.longitude"
                    required
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
            </div>
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
      :active.sync="projectDevelopersModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <div class="modal-card" style="width: auto;">
        <section class="modal-card-body">
          <b-field label="Developer Name">
            <b-input v-model="tempFormData.name" type="text" value="" required>
            </b-input>
          </b-field>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            rules="url_string"
          >
            <div>
              <b-tooltip label="eg: https://example.com">
                <b-field label="Developer Website">
                  <b-input
                    v-model="tempFormData.website"
                    type="text"
                    maxlength="50"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            rules="url_string"
          >
            <div>
              <b-tooltip label="eg: https://example.com/logo.png">
                <b-field label="Developer Logo">
                  <b-input
                    v-model="tempFormData.logoUrl"
                    type="text"
                    maxlength="50"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            rules="alpha_num:3"
          >
            <div>
              <b-tooltip label="eg: Education Software, Software">
                <b-field label="Developer Category">
                  <b-input
                    v-model="tempFormData.category"
                    type="text"
                    maxlength="50"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </div>
          </validation-provider>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click.prevent="closeModal">
            Close
          </button>
          <button class="button is-primary" @click.prevent="saveDeveloper()">
            Add Developer
          </button>
        </footer>
      </div>
    </b-modal>
    <b-modal
      :active.sync="projectMaintainersModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <div class="modal-card" style="width: auto;">
        <section class="modal-card-body">
          <b-field label="Maintainer Name">
            <b-input v-model="tempFormData.name" type="text" value="" required>
            </b-input>
          </b-field>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            rules="url_string"
          >
            <div>
              <b-tooltip label="eg: https://example.com">
                <b-field label="Maintainer Website">
                  <b-input
                    v-model="tempFormData.website"
                    type="text"
                    maxlength="50"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            rules="url_string"
          >
            <div>
              <b-tooltip label="eg: https://example.com/logo.png">
                <b-field label="Maintainer Logo">
                  <b-input
                    v-model="tempFormData.logoUrl"
                    type="text"
                    maxlength="50"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            rules="alpha_num:3"
          >
            <div>
              <b-tooltip label="eg: Education Software, Software">
                <b-field label="Maintainer Category">
                  <b-input
                    v-model="tempFormData.category"
                    type="text"
                    maxlength="50"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </div>
          </validation-provider>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click.prevent="closeModal">
            Close
          </button>
          <button class="button is-primary" @click.prevent="saveMaintainer()">
            Add Developer
          </button>
        </footer>
      </div>
    </b-modal>
    <b-modal
      :active.sync="projectUsersModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <div class="modal-card" style="width: auto;">
        <section class="modal-card-body">
          <b-field label="User Name">
            <b-input v-model="tempFormData.name" type="text" required>
            </b-input>
          </b-field>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            rules="url_string"
          >
            <div>
              <b-tooltip label="eg: https://example.com">
                <b-field label="User Website">
                  <b-input
                    v-model="tempFormData.website"
                    type="text"
                    maxlength="50"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            rules="url_string"
          >
            <div>
              <b-tooltip label="eg: https://example.com.logo.png">
                <b-field label="User Logo">
                  <b-input
                    v-model="tempFormData.logoUrl"
                    type="text"
                    maxlength="50"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            rules="alpha_num:3"
          >
            <div>
              <b-tooltip label="eg: City Council, Library, Local Government">
                <b-field label="User Category">
                  <b-input
                    v-model="tempFormData.category"
                    type="text"
                    maxlength="50"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </div>
          </validation-provider>

          <validation-provider
            v-slot="{ errors, invalid, valid }"
            rules="latlong"
          >
            <div>
              <b-tooltip label="eg: Latitude required for map placement">
                <b-field label="User Location Latitude">
                  <b-input
                    v-model="tempFormData.location.latitude"
                    type="text"
                    maxlength="10"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </div>
          </validation-provider>
          <validation-provider
            v-slot="{ errors, invalid, valid }"
            rules="latlong"
          >
            <div>
              <b-tooltip label="eg: Longitude required for map placement">
                <b-field label="User Location Longitude">
                  <b-input
                    v-model="tempFormData.location.longitude"
                    type="text"
                    maxlength="10"
                    required
                    :class="{ 'is-danger': invalid, 'is-success': valid }"
                  >
                  </b-input>
                </b-field>
              </b-tooltip>
              <p v-if="errors.length" class="has-text-danger">
                <small>{{ errors[0] }}</small>
              </p>
            </div>
          </validation-provider>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click.prevent="closeModal">
            Close
          </button>
          <button class="button is-primary" @click.prevent="saveUser()">
            Add User
          </button>
        </footer>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Vue from 'vue'
import { ValidationObserver, ValidationProvider, validate } from 'vee-validate'
import axios from 'axios'
const qs = require('qs')
const transformRequest = (jsonData = {}) =>
  Object.entries(jsonData)
    .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join('&')

export default Vue.extend({
  name: 'ProgressSteps',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      currentStep: 5,
      submitSuccess: false,
      projectDevelopersModalActive: false,
      projectMaintainersModalActive: false,
      projectUsersModalActive: false,
      sendingForm: false,
      formSubmitted: false,
      counterDev: 0,
      counterMaint: 0,
      sameAsDevs: false,
      form: {
        name: 'name',
        emailAddress: 'email@test.com',
        organisation: 'organisation',
        projectName: 'project name',
        projectWebsite: 'http://test.com',
        projectUrl: 'http://test.com',
        projectCountry: 'country',
        projectLanguages: 'en, it, de',
        projectType: 'project type',
        projectLicence: 'licnce',
        projectCategory: 'categ',
        projectSector: 'sector',
        projectDescription:
          'descirpieornainawin ainaoidnioandi oansiodn oiasd idi na',
        projectDevelopers: [
          {
            name: 'dev name',
            website: 'http://test.com',
            logoUrl: 'http://test.com',
            category: 'dev catego',
          },
        ],
        projectMaintainers: [
          {
            name: 'mant name',
            website: 'http://test.com',
            logoUrl: 'http://test.com',
            category: 'maint catego',
          },
        ],
        projectUsers: [
          {
            name: 'name',
            website: 'https://google.com',
            logoUrl: 'https://google.com',
            category: 'categoru',
            location: {
              longitude: '54.23223',
              latitude: '-1.23232',
            },
          },
        ],
      },
      tempFormData: {
        name: 'name',
        website: 'https://google.com',
        logoUrl: 'https://google.com',
        category: 'categoru',
        location: {
          longitude: '54.23223',
          latitude: '-1.23232',
        },
      },
      formSubmissionResult: null,
    }
  },
  computed: {
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
      this.showDevs = true
      this.counterDev++
      this.projectDevelopersModalActive = true
    },
    addMaintainers() {
      this.showDevs = true
      this.counterMaint++
      this.projectMaintainersModalActive = true
    },
    addUsers() {
      this.showUsers = true
      this.counterUsers++
      this.projectUsersModalActive = true
    },
    closeModal() {
      this.projectDevelopersModalActive = false
      this.projectMaintainersModalActive = false
      this.projectUsersModalActive = false
    },
    saveDeveloper() {
      this.projectDevelopersModalActive = false
      this.form.projectDevelopers.push(this.tempFormData)
      this.tempFormData = {
        name: '',
        website: '',
        logoUrl: '',
        category: '',
        longitude: '',
        latitude: '',
      }
    },
    saveUser() {
      this.projectUsersModalActive = false
      this.form.projectUsers.push(this.tempFormData)
      this.tempFormData = {
        name: '',
        website: '',
        logoUrl: '',
        category: '',
        longitude: '',
        latitude: '',
      }
    },
    saveMaintainer() {
      this.projectMaintainersModalActive = false
      this.form.projectMaintainers.push(this.tempFormData)
      this.tempFormData = {
        name: '',
        website: '',
        logoUrl: '',
        category: '',
        longitude: '',
        latitude: '',
      }
    },
    removeDeveloper(index) {
      this.form.projectDevelopers.splice(index, 1)
      this.tempFormData = {
        name: '',
        website: '',
        logoUrl: '',
        category: '',
        longitude: '',
        latitude: '',
      }
    },
    removeMaintainer(index) {
      this.form.projectMaintainers.splice(index, 1)
      this.tempFormData = {
        name: '',
        website: '',
        logoUrl: '',
        category: '',
        longitude: '',
        latitude: '',
      }
    },
    removeUser(index) {
      this.form.projectUsers.splice(index, 1)
      this.tempFormData = {
        name: '',
        website: '',
        logoUrl: '',
        category: '',
        longitude: '',
        latitude: '',
      }
    },
    onSubmit() {
      const that = this
      if (that.currentStep === 5) {
        this.sendingForm = true
        axios
          .post('forms/formbuilder', that.form, {
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              Accept: 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
            },
          })
          .then((res) => {
            setTimeout(() => {
              console.log('response', res)
              that.submitSuccess = true
              that.sendingForm = false
              that.currentStep = 6
              requestAnimationFrame(() => {
                that.$refs.formbuilder.reset()
              })
            }, 500)
          })
          .catch((error) => {
            if (error.response) {
              console.error('error.response', error.response)
              that.sendingForm = false
            } else if (error.request) {
              console.error('error.request', error.request)
              that.sendingForm = false
            } else {
              console.error('Error', error.message)
              that.sendingForm = false
            }
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
