<template>
  <v-app id="inspire" light>
    <defaultNavigation :drawer="drawer"/>
    <v-toolbar color="grey darken-4" dense fixed clipped-left app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text" color="dark"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title white--text cursorPointer" @click="_goHome">AudioVyVy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px" class="white--text main__search">
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Search"
          class="hidden-sm-and-down"
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  components: {
    defaultNavigation: () => import('@/container/DefaultNavigation')
  },
  methods: {
    _goHome() {
      this.$router.push({ name: 'home-page' })
    }
  }
}
</script>
