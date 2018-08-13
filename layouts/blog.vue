<template>
  <div class="container">
    <blog-header></blog-header>
    <div class="layout">
      <nuxt/>
    </div>
    <f-footer></f-footer>
  </div>
</template>
<script>
import BlogHeader from "~/components/BlogHeader";
import FFooter from "~/components/Footer";

export default {
  components: {
    BlogHeader,
    FFooter
  }
};
</script>
<style>
.container {
  min-height: 100vh;
}
.layout {
  padding: 0 200px;
}
@media (max-width: 40em) {
	.layout {
    padding: 0 5%;
  }
}
</style>
