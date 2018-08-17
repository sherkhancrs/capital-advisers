<template>
  <div>
    <div class="main-h" :style="{ 'background-image': 'linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.3) 100%),url(' + post.image + ')' }">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-12">
            <h1 class="bolded d-none d-block-md" >{{post.title}}</h1>
            <h3 class="bolded d-block d-none-md" >{{post.title}}</h3>
            <h4 class="thined">
              {{post.published_date | formatDate}}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container c">
      <div class="row">
        <div class="col-xs">
          <p class="text">{{post.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

export default {
  beforeMount() {
    this.$store.dispatch("loadPostDetail", this.$route.params.id);
  },
  computed: {
    post() {
      return this.$store.state.postDetail;
    }
  },
  filters: {
    formatDate: function(value) {
      if (!value) return "";
      return format(value, "DD MMM YYYY", { locale: ruLocale });
    }
  }
};
</script>
<style scoped>
.c {
  margin-top: 70px;
  margin-bottom: 70px;
}
.text {
  font-size: 19px;
  line-height: 23px;
}
.main-h {
  background-color:rgba(0, 0, 0, .7);
  /* background-repeat: no-repeat; */
  background-position-x: center;
  background-size: contain;
  padding-top: 170px;
  padding-bottom: 100px;
  height: 100%;
  color: white;
}
@media (max-width: 40em) {
  .main-h {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
@media (min-width: 40em) and (max-width: 50em) {
  .main-h {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
</style>
