<template>
  <aplayer
    v-if="lists.length"
    class="audio-page__audio"
    :audio="lists"
    :loop.sync="loop"
    :lrcType="0"
  ></aplayer>
</template>
<script>
export default {
  props: ['data'],
  data: () => ({
    loop: 'none'
  }),
  computed: {
    lists() {
      return this.data.map((audio) => ({ url: audio.link, name: audio.title, artist: '' }))
    }
  },
  created() {}
}
</script>
