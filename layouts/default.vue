<template>
  <div>
    <f-navbar></f-navbar>
      <nuxt/>
    <f-footer></f-footer>
  </div>
</template>
<script>
import FNavbar from "~/components/Navbar";
import FFooter from "~/components/Footer";

export default {
  components: {
    FNavbar,
    FFooter
  }
};
</script>
