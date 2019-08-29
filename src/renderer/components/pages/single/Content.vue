<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-side-icon>
        <v-icon>queue_music</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title v-html="post.title"></v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md9>
          <v-card-title primary-title>
            <component :is="isPlayer" :data="post.audioVideo.items" v-if="post.audioVideo"/>
          </v-card-title>
          <blockquote class="blockquote" v-html="post.content"></blockquote>
        </v-flex>
        <v-flex xs12 sm12 md3>
          <side-bar-audio :posts="post.categories.nodes[0].posts.nodes"></side-bar-audio>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
import SideBarAudio from './Sidebar'
import audioPlayer from './Audio'
import videoPlayer from './Video'

export default {
  components: {
    SideBarAudio,
    audioPlayer,
    videoPlayer
  },
  props: ['post'],
  data: () => ({
    loop: 'none'
  }),
  computed: {
    isPlayer() {
      switch (this.post.audioVideo.key) {
        case 'audio':
          return 'audioPlayer'
        case 'video':
          return 'videoPlayer'
        default:
          return ''
      }
    }
  },
  created() {
    console.log(`this.post`, this.post)
  }
}
</script>
