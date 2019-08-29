<template>
  <div class="ping">
   <aplayer :audio="audio" :lrcType="3" />
  </div>
</template>
<script>
// import Ping from '@/components/example/Ping.vue'
// import Ping from '@/components/audioManager/Player.vue'

export default {
  components: {
  },
  data: () => ({
    audio: [
      {
        name: 'The Party We Have Never Seen',
        artist: 'Nana Takahashi',
        url: 'https://cdn.moefe.org/music/mp3/thepartywehaveneverseen.mp3',
        cover: 'https://p1.music.126.net/IwclpJu4gaqhSZrKunEFWg==/3297435379408525.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thepartywehaveneverseen.lrc'
      },
      {
        name: 'The Party We Have Never Seen',
        artist: 'Nana Takahashi',
        url: 'https://cdn.moefe.org/music/mp3/thepartywehaveneverseen.mp3',
        cover: 'https://p1.music.126.net/IwclpJu4gaqhSZrKunEFWg==/3297435379408525.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thepartywehaveneverseen.lrc'
      },
      {
        name: 'The Party We Have Never Seen',
        artist: 'Nana Takahashi',
        url: 'https://cdn.moefe.org/music/mp3/thepartywehaveneverseen.mp3',
        cover: 'https://p1.music.126.net/IwclpJu4gaqhSZrKunEFWg==/3297435379408525.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thepartywehaveneverseen.lrc'
      }
    ]
  }),
  created() {
    this.$store.state.loading = false
  }
}
</script>
