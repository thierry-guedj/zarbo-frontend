<template>
  <v-list-item-title>
    <div class="comment-thumb float-left mr-3">
      <!-- <v-avatar>
        <img
          :src="comment.user.avatars.small"
          :username="comment.user.name"
          width="40px"
        />
      </v-avatar> -->
      <nuxt-link
        :to="
          localePath({
            name: 'designs.user',
            params: { id: comment.user.id },
          })
        "
        ><avatar
          :username="comment.user.name"
          :src="comment.user.avatars.medium"
          class="mx-3 mt-3"
          :size="50"
        ></avatar
      ></nuxt-link>
    </div>
    <div class="comment-meta mb-3">
      <h4 class="font-14 fw-500 mb-2">
        <nuxt-link
          :to="
            localePath({
              name: 'designs.user',
              params: { id: comment.user.id },
            })
          "
          >{{ comment.user.name }}
        </nuxt-link>
      </h4>
      <p class="font-10 fw-100 mb-2">
        {{ comment.body }}
      </p>
      <span
        class="fw-100 d-flex justify-content-between align-end text-grey caption"
      >
        {{ comment.created_at_dates.created_at_human }}
        <span v-if="$auth.loggedIn && $auth.user.id == comment.user.id">
          <a class="text-danger" @click.prevent="destroyComment">
            <v-btn
              v-bind="size"
              class="mx-2"
              icon
              dark
              color="blue-grey darken-1"
            >
              <v-icon v-bind="size" dark>delete_forever</v-icon>
            </v-btn>
          </a>
        </span>
      </span>
    </div>
  </v-list-item-title>
</template>

<script>
import Avatar from 'vue-avatar'
export default {
  name: 'DesignComment',
  components: {
    Avatar,
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  computed: {
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
  },
  methods: {
    destroyComment() {
      this.$axios
        .delete(`/comments/${this.comment.id}`)
        .then((res) => this.$emit('deleted', this.comment.id))
        .catch((e) => console.log(e))
    },
  },
}
</script>

<style lang="scss" scoped>
.v-list-item__title {
  font-size: 0.8rem;
  white-space: initial !important;
}
.v-application .caption {
  font-size: 0.75rem !important;
  font-weight: 109;
  letter-spacing: 0.0333333333em !important;
  line-height: 1.25rem;
}
.vue-avatar--wrapper {
  min-width: 50px;
}
</style>
