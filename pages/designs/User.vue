<template>
  <section>
    <div v-if="$fetchState.pending" class="loader">
      <Circle8></Circle8>
    </div>
    <div v-else>
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        v-bind="size"
        fab
        dark
        fixed
        bottom
        right
        color="accent"
        @click="toTop"
      >
        <v-icon v-bind="size">keyboard_arrow_up</v-icon>
      </v-btn>

      <v-container class="p-0 m-0 row-designs">
        <section class="hero text-white">
          <!-- <v-container> -->
          <v-row class="row-md-12">
            <v-col class="col-md-2 text-center iconTitle">
              <avatar
                :username="user.name"
                :src="user.avatars.large"
                class="ml-3 mr-2"
                size="180"
              ></avatar>
            </v-col>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-col class="col-md-9">
              <p class="titlePage text-white">
                {{ $t('user.userPageTitle') }} {{ user.name }}
              </p>
              <p class="tagline text-white">
                {{ user.tagline }}
              </p>
              <p class="about text-white" style="white-space: pre-line">
                {{ user.about }}
              </p>

              <v-container fluid class="search-control">
                <form @submit.prevent="fetchData">
                  <v-row
                    class="filters d-flex justify-content-between align-items-center"
                  >
                    <v-col cols="auto" class="search-col"
                      ><v-select
                        v-model="filters.orderBy"
                        :items="itemsOrderBy"
                        :label="$t('search.orderBy')"
                        outlined
                        item-text="title"
                        item-value="value"
                        width="250px"
                        @change="fetchData"
                      ></v-select
                    ></v-col>

                    <v-col
                      cols="auto"
                      class="search-col d-flex align-items-center"
                    >
                      <v-checkbox
                        id="has_comments"
                        v-model="filters.has_comments"
                        field="has_comments"
                        :label="$t('search.hasComments')"
                        class="mr-3"
                        true-value="1"
                        false-value="0"
                        @change="fetchData"
                      ></v-checkbox>
                    </v-col>
                    <v-col class="search-col">
                      <v-text-field
                        id="q"
                        v-model="filters.q"
                        field="q"
                        class="combobox"
                        outlined
                        placeholder="rechercher dans les titres et les descriptions"
                        @input="fetchData"
                      >
                        <template v-slot:append>
                          <v-btn
                            v-bind="size"
                            :disabled="searching"
                            class="searchBtn"
                            height="auto"
                            text
                            :loading="searching"
                            type="submit"
                          >
                            <v-icon v-bind="size">mdi-magnify</v-icon>
                            {{ $t('search.search') }}
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                </form>
                <nuxt-link :to="{ name: 'users.search' }">
                  <v-btn v-bind="size" class="mt-0" color="orange darken-3"
                    ><v-icon v-bind="size" class="mr-2">flip_to_back</v-icon
                    >{{ $t('user.back') }}</v-btn
                  >
                </nuxt-link>
              </v-container>
            </v-col>
          </v-row>
        </section>
        <v-container class="p-0 m-0 row-designs">
          <div v-if="searching" class="loader p-0">
            <Circle8></Circle8>
          </div>
          <div v-else class="pl-0 pb-6 pr-0">
            <template v-if="!designs.length" class="pb-6 text-center">
              <v-alert
                border="right"
                color="accent"
                dark
                transition="scale-transition"
                width="auto"
                class="alert"
              >
                {{ noResultMessage }}

                <v-spacer />
                <v-btn v-bind="size" class="mt-3" @click="backToResults">
                  <v-icon v-bind="size" right dark class="mx-2">reply</v-icon
                  >{{ $t('designs.backToResults') }}</v-btn
                >
              </v-alert>
            </template>
            <template v-else id="row-designs">
              <v-row
                transition-duration="0.3s"
                item-selector=".item"
                class="mb-6 row-design"
                justify="center"
                no-gutters
              >
                <CoolLightBox
                  :items="itemsDesigns"
                  :index="index !== null ? parseInt(`${index}`) : index"
                  :use-zoom-bar="true"
                  :effect="'fade'"
                  @close="index = null"
                >
                </CoolLightBox>
                <masonry
                  :cols="{
                    default: 6,
                    1500: 5,
                    1400: 4,
                    1000: 3,
                    700: 2,
                    500: 1,
                  }"
                  :gutter="{ default: '0px', 700: '15px' }"
                  ><lazy-component
                    v-for="(design, i) in designs"
                    :key="`${i}-${design.id}`"
                    :design="design"
                    @lightbox="index = parseInt(`${i}`)"
                  ></lazy-component
                ></masonry>
              </v-row>

              <infinite-loading
                ref="infiniteLoading"
                slot="append"
                :identifier="identifier"
                spinner="ring-loader"
                force-use-infinite-wrapper="row-designs"
                @infinite="infiniteHandler"
              >
                <!-- <div slot="no-more">Plus de résultat</div>
                <div slot="no-results">Pas de résultat</div> -->
              </infinite-loading>
            </template>
          </div>
        </v-container>
        <!-- Modal  -->
        <keep-alive>
          <base-modal :dialog.sync="visible" @closeDialog="hideModal()" />
        </keep-alive>
        <!-- End Modal -->
      </v-container>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Circle8 from 'vue-loading-spinner/src/components/Circle8.vue'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import Avatar from 'vue-avatar'
export default {
  name: 'User',
  layout: 'designs-listing',
  components: {
    lazyComponent: () => import('@/components/designs/DesignCard.vue'),
    Circle8,
    CoolLightBox,
    Avatar,
  },
  async fetch() {
    const res = await this.$axios.$get(`/user/${this.userId}/findById`)
    this.user = res.data
    if (this.user.designs.length < 1) {
      this.noResultMessage = this.$i18n.t('user.noDesignResult')
    } else {
      this.noResultMessage = this.$i18n.t('user.noCriteriaResult')
    }
  },

  data() {
    return {
      designs: [],
      searching: true,
      loader: null,
      loadingSubmit: false,
      loaderPage: false,
      filters: {
        has_team: 0,
        has_comments: 0,
        q: '',
        orderBy: 'likes',
        userId: `${this.$route.params.id}`,
        page: 1,
        nbResults: 6,
      },
      itemsOrderBy: [
        { title: this.$i18n.t('search.latestFirst'), value: 'latest' },
        { title: this.$i18n.t('search.mostLikedFirst'), value: 'likes' },
      ],
      fullscreen: false,

      identifier: new Date(),
      fab: false,
      index: null,
      itemsDesigns: [],
      user: {
        fields: {
          name: '',
          about: '',
          tagline: '',
        },
      },
      userId: this.$route.params.id,

      noResultMessage: '',
    }
  },
  fetchOnServer: false,
  computed: {
    queryString() {
      return Object.keys(this.filters)
        .map((k) => `${k}=${this.filters[k]}`)
        .join('&')
    },
    ...mapGetters(['visible', 'modalComponent', 'folder']),
    url() {
      return `/search/designs?${this.queryString}`
    },
    size() {
      const size = {
        xs: 'small',
        sm: 'small',
        md: 'small',
        lg: 'small',
        xl: 'small',
      }[this.$vuetify.breakpoint.name]
      return size ? { [size]: true } : {}
    },
    responsiveNbResults() {
      const responsiveNbResults = {
        xs: 1,
        sm: 3,
        md: 6,
        lg: 6,
        xl: 6,
      }[this.$vuetify.breakpoint.name]
      return responsiveNbResults
    },
  },
  mounted() {
    this.fetchData()
  },

  methods: {
    ...mapActions(['showModal', 'hideModal']),
    async fetchData() {
      this.itemsDesigns = []
      this.searching = true
      this.identifier = new Date()
      this.filters.page = 1
      this.filters.nbResults = this.responsiveNbResults
      const response = await this.$axios.$get(this.url)
      this.designs = response.data
      const noTitle = 'Sans Titre'
      this.designs.forEach((design) => {
        this.itemsDesigns.push({
          title: design.title ? design.title : noTitle,
          description: design.description,
          src: design.images.extralarge,
        })
      })
      this.searching = false
      this.filters.page += 1
    },
    infiniteHandler($state) {
      this.$axios
        .$get(this.url)
        .then((response) => {
          if (response.data.length > 0) {
            if (response.meta.current_page <= response.meta.last_page) {
              response.data.forEach((itemData) => {
                this.designs.push(itemData)
                this.itemsDesigns.push({
                  title: itemData.title === '' ? itemData.title : 'Sans Titre',
                  description: itemData.description,
                  src: itemData.images.extralarge,
                })
              })
              $state.loaded()
            } else {
              $state.loaded()

              $state.complete()
            }
          } else {
            $state.loaded()
            $state.complete()
          }
        })
        .catch((err) => {
          console.log(err)
        })
      this.filters.page += 1
    },
    to() {
      this.$router.go(-1)
    },
    backToResults() {
      this.filters = {
        has_team: 0,
        has_comments: 0,
        q: '',
        orderBy: 'likes',
        userId: `${this.$route.params.id}`,
        page: 1,
        nbResults: 6,
      }
      this.fetchData()
    },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
    slug() {
      const slug = this.sanitizeTitle(this.user.name)
      return slug
    },
  },
  head() {
    return {
      title: 'Zarbo, ' + this.user.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.user.about,
        },
        {
          property: 'artiste:tag',
          content: this.user.tagline,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://zarbo.fr/artistes/${this.slug}`,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.search-col {
  padding: 0 !important;
  margin-right: 2px;
}
.avatarUser {
  min-width: 280px;
}
.tagline {
  font-size: 24px;
}
.about {
  font-size: 16px;
}
.alert {
  text-align: center;
  margin: auto;
}
.v-application a {
  text-decoration: none;
}
.v-select__selections input {
  display: none;
}
.container {
  max-width: 100%;
  text-align: left;
}
.search-control {
  max-width: 100% !important;
  margin-top: 25px;
  margin-bottom: 0;
}
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
}

.image {
  height: 300px;
  width: 300px;
  display: block;
  background-color: red;
}

body,
html {
  height: 100%; /* REMOVING THIS FIXES THE ISSUE */
  scroll-behavior: smooth;
}
.cool-lightbox
  .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe
  .cool-lightbox__slide {
  opacity: 1 !important;
}
.row.row-design {
  display: contents !important;
}
</style>
