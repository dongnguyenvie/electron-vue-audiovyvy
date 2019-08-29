<template>
  <v-navigation-drawer :value="drawer" fixed clipped app>
    <v-list dense>
      <v-list-tile v-for="item in nav.headerMenu" :key="item.text" @click.prevent>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
      <v-list>
        <v-list-tile v-for="(author, index) in authors.nodes" :key="index" avatar @click.prevent>
          <v-list-tile-avatar>
            <img
              :src="`https://randomuser.me/api/portraits/men/${Math.ceil(Math.random() * 100)}.jpg`"
              alt
            >
          </v-list-tile-avatar>
          <v-list-tile-title v-text="author.name"></v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-subheader class="mt-3 grey--text text--darken-1">CATEGORY</v-subheader>

      <v-list-tile v-for="(category, index) in categories.nodes" :key="index" @click.prevent>
        <v-list-tile-action>
          <v-icon>video_library</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ category.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile class="mt-3" @click.prevent>
        <v-list-tile-action>
          <v-icon color="grey darken-1">add_circle_outline</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
      </v-list-tile>
      <v-list-tile @click.prevent>
        <v-list-tile-action>
          <v-icon color="grey darken-1">settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import nav from '@/_nav'
import { mapGetters, mapActions } from 'vuex'
import * as type from '@/store/actionTypes'

export default {
  data: () => ({
    nav
  }),
  props: ['drawer'],
  computed: {
    ...mapGetters('category', {
      categories: type.category.getters.CATEGORIES
    }),
    ...mapGetters('author', {
      authors: type.author.getters.AUTHORS
    })
  },
  methods: {
    ...mapActions('category', {
      fetchCategories: type.category.actions.FETCH_ALL
    }),
    ...mapActions('author', {
      fetchAuthors: type.author.actions.FETCH_ALL
    })
  },
  created() {
    this.fetchCategories()
    this.fetchAuthors()
  }
}
</script>
