<template>
  <div class="container">
    <f-header></f-header>
    <div class="layout">
      <nuxt/>
    </div>
    <f-footer></f-footer>
  </div>
</template>
<script>
import FHeader from "~/components/Header";
import FFooter from "~/components/Footer";

export default {
  components: {
    FHeader,
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
@media (min-width: 40em) and (max-width: 50em) {
  .layout {
    padding: 0 5%;
  }
}
</style>
