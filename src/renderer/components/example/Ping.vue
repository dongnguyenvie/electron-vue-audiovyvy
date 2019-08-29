<template>
  <div>
    <h1>This is ping pages</h1>
    <ul>
      <li v-for="(item, index) in $store.state.ping.posts.data.posts.edges" :key="index">
        <div :id="item.node.id">
          <p>{{item.node.title}}</p>
          <div v-html="item.node.content"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('ping/fetchPosts', 1)
    console.log(this.$store)
  },
  mounted() {
    console.log(this.$store.state.ping)
  }
}
</script>
