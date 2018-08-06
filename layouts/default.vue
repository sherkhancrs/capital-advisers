<template>
  <div class="container">
    <f-header></f-header>
    <nuxt/>
    <f-footer></f-footer>
  </div>
</template>
<script>
import FHeader from "~/components/Header";
import FFooter  from "~/components/Footer";

export default {
  components: {
    FHeader,
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
