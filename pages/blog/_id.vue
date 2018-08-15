<template>
    <div class="blog-layout">
        <p class="text">{{post.body}}</p>
    </div>
</template>
<script>
export default {
  layout: "blogdetail",
  beforeMount() {
    this.$store.dispatch("loadPostDetail", this.$route.params.id);
  },
  computed: {
    post() {
      return this.$store.state.postDetail;
    }
  }
};
</script>
<style scoped>
.blog-layout {
  padding: 80px 0;
}
.text {
  font-size: 19px;
  line-height: 23px;
}
</style>
