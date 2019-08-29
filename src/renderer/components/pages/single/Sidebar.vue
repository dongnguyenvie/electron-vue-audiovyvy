<template>
  <v-layout row wrap>
    <v-card-title primary-title>
      <div>
        <div class="headline text-uppercase">Truyện liên quan</div>
      </div>
    </v-card-title>
    <v-flex
      v-for="(post, _i) in posts"
      :key="_i"
      xs12
      class="mb-3"
      cursorPointer
      @click="_goToPost(post)"
    >
      <v-card>
        <v-layout row>
          <v-flex xs3>
            <v-img :src="post.featuredImage.sourceUrl" contain></v-img>
          </v-flex>
          <v-flex xs9>
            <v-card-actions class="pa-3" v-html="post.title"></v-card-actions>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ['posts'],
  methods: {
    _goToPost(post) {
      this.$router.push({ name: 'post', params: { slug: `${post.uri}.html` }, query: { id: post.id } })
    }
  },
  created() {
    console.log('side bar', this.posts)
  }
}
</script>
