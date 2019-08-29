<template>
  <div>
    <v-toolbar flat height="90">
      <v-toolbar flat height="40">
        <v-progress-linear height="40" v-model="trackProgress" @click="updateSeek($event)"></v-progress-linear>
      </v-toolbar>
      <v-btn flat icon @click="toggleMute">
        <template v-if="!this.muted">
          <v-icon v-if="this.volume >= 0.5">volume_up</v-icon>
          <v-icon v-else-if="this.volume > 0">volume_down</v-icon>
          <v-icon v-else>volume_mute</v-icon>
        </template>
        <v-icon v-show="this.muted">volume_off</v-icon>
      </v-btn>
      <v-slider v-model="volume" @input="updateVolume(volume)" max="1" step="0.1"></v-slider>
      {{this.volume * 100 + '%'}}
      <v-spacer></v-spacer>
      <v-btn outline fab small color="light-blue" @click="skipTrack('prev')">
        <v-icon>skip_previous</v-icon>
      </v-btn>
      <v-btn outline fab small color="light-blue" @click="stopTrack">
        <v-icon>stop</v-icon>
      </v-btn>
      <v-btn outline fab color="light-blue" @click="playTrack()">
        <v-icon large>play_arrow</v-icon>
      </v-btn>
      <v-btn outline fab small color="light-blue" @click="pauseTrack">
        <v-icon>pause</v-icon>
      </v-btn>
      <v-btn outline fab small color="light-blue" @click="skipTrack('next')">
        <v-icon>skip_next</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <!-- button Repeat -->
      <v-btn flat icon @click="toggleLoop">
        <v-icon color="light-blue" v-if="this.loop">repeat_one</v-icon>
        <v-icon color="blue-grey" v-else>repeat_one</v-icon>
      </v-btn>
      <v-btn flat icon @click="toggleShuffle">
        <v-icon color="light-blue" v-if="this.shuffle">shuffle</v-icon>
        <v-icon color="blue-grey" v-else>shuffle</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
import { Howler } from 'howler'

export default {
  props: ['progress', 'loop', 'shuffle'],
  data: () => ({
    volume: 0.5,
    trackProgress: 0,
    muted: false
  }),
  methods: {
    playTrack(index) {
      this.$emit('playtrack', index)
    },
    pauseTrack() {
      this.$emit('pausetrack')
    },
    stopTrack() {
      this.$emit('stoptrack')
    },
    skipTrack(direction) {
      this.$emit('skiptrack', direction)
    },
    updateVolume(volume) {
      Howler.volume(volume)
    },
    toggleLoop() {
      this.$emit('toggleloop', !this.loop)
    },
    toggleShuffle() {
      this.$emit('toggleshuffle', !this.shuffle)
    },
    toggleMute() {}
  },
  created: function() {
    Howler.volume(this.volume)
  }
}
</script>
