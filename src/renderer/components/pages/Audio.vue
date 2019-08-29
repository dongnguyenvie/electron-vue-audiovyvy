<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-layout>
        <v-card>
          <v-toolbar>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title v-html="post.title"></v-toolbar-title>
          </v-toolbar>
        </v-card>
        <v-card>
          <v-card-title primary-title>
            <aplayer class="audio-page__audio" :audio="post.audio" :loop.sync="loop" :lrcType="0"></aplayer>
          </v-card-title>
          <blockquote class="blockquote" v-html="post.content"></blockquote>
        </v-card>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import * as TYPE from '@/store/actionTypes'

export default {
  data: () => ({
    loop: 'none'
  }),
  computed: {
    ...mapGetters({
      post: `singleAudio/${TYPE.GET_POST}`
    })
  },
  methods: {
    ...mapActions({
      fetchContent: `singleAudio/${TYPE.FETCH_CONTENT_FOR_SINGLE_AUDIO}`
    })
  },
  created() {
    const { id } = this.$route.query
    this.fetchContent({ id })
  }
}
</script>
