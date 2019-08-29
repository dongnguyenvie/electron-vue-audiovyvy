<template>
  <v-layout row wrap>
    <v-flex xs12>
      <content-audio :post="post" v-if="post.title"></content-audio>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import * as type from '@/store/actionTypes'
import ContentAudio from './Content'

export default {
  components: {
    ContentAudio
  },
  computed: {
    ...mapGetters('post', {
      post: type.singlePost.getters.CONTENT_POST
    })
  },
  methods: {
    ...mapActions('post', {
      fetchContentPost: type.singlePost.actions.FETCH_POST_BY_ID
    }),
    _fetchData() {
      const { id } = this.$route.query
      this.fetchContentPost(id)
    }
  },
  created() {
    this._fetchData()
  },
  watch: {
    $route: '_fetchData'
  }
}
</script>
