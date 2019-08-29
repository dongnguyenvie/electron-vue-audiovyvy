<template>
  <div id="app">
    <router-view/>
    <div class="text-xs-center loading-io" v-if="loading">
      <v-progress-circular :size="50" color="#FF9800" indeterminate></v-progress-circular>
    </div>
  </div>
</template>
<script>
import $bus from '@/_eventBus'

export default {
  data: () => ({
    loading: true
  }),
  created() {
    $bus.$on('loading', (payload) => {
      this.loading = payload
    })
  }
}
</script>

<style lang="scss">
// font
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons');

// style all
@import '@/assets/scss/style.scss';
</style>
