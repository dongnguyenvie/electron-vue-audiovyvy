<template>
  <v-card-title primary-title>
    <iframe
      width="100%"
      height="330"
      :src="currentVideo"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen="allowfullscreen"
    ></iframe>
    <div class="text-center">
      <v-pagination v-model="selected" :length="data.length"></v-pagination>
    </div>
  </v-card-title>
</template>
<script>
export default {
  props: ['data'],
  data: () => ({
    selected: 1
  }),
  computed: {
    currentVideo() {
      return `https://www.youtube.com/embed/videoseries?list=${this.data[this.selected - 1]}&rel=0&fs=0&modestbranding=1`
    }
  },
  created() {
    console.log(`video screen`, this.data)
  }
}
</script>
