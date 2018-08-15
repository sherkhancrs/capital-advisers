<template>
  <div class="container">
    <f-header-service></f-header-service>
    <div class="layout">
      <nuxt/>
    </div>
    <f-footer></f-footer>
  </div>
</template>
<script>
import FHeaderService from "~/components/HeaderService";
import FFooter from "~/components/Footer";

export default {
  components: {
    FHeaderService,
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
