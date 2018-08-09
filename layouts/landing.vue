<template>
  <div class="container">
    <f-header-landing></f-header-landing>
    <nuxt/>
    <f-footer></f-footer>
  </div>
</template>
<script>
import FHeaderLanding from "~/components/HeaderLanding";
import FFooter  from "~/components/Footer";

export default {
  components: {
    FHeaderLanding,
    FFooter
  }
}
</script>
<style>
.container
{
  min-height: 100vh;
}
</style>
