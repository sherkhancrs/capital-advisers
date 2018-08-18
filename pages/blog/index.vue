<template>
<div>
    <div class="main-h">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-12">
            <h1 class="bolded" >Blog/News</h1>
            <h3 class="thined">
              Мы признаем, что выбор «правильного» партнера по управлению капиталом — это очень индивидуальное решение, которое может предоставить вам и вашей семье финансовый мир и безопасность.
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container c">
      <div class="row">
        <input  @keyup.enter="search" v-model="searchKey" type="text" class="input" placeholder="Type to search ...">
      </div>
      <div class="row" style="padding-top: 50px;" v-if="posts.results">
					<div v-if="posts.results.length > 0" class="blog-panel col-xs-12 col-sm-6 col-md-4" v-for="(post, index) in posts.results" :key="post.id">
						<nuxt-link :to="`/blog/${post.id}`">
              <div class="blog-image" :style="{ 'background-image': 'linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.3) 100%),url(' + post.image + ')', 'background-size': 'cover'}">
                  <h1 class="post-title" :class="{'first-post-title': index === 0}">{{post.title}}</h1>
                  <p class="post-description">{{post.published_date | formatDate }}</p>
              </div>
						</nuxt-link>
            
						<div class="blog-description">{{post.body}}</div>
						<nuxt-link :to="`/blog/${post.id}`"><p class="read-more">read more</p></nuxt-link>
					</div>
          <div class="col-xs" style="margin-top: 60px"><h3>Ничего не найдено</h3></div>
				
      </div>
      <div v-else class="row">
        <div class="col-xs" style="margin-top: 60px"><h3>Ничего не найдено</h3></div>
      </div>
      <div class="row center-xs">
        <paginate 
          v-if="posts.results"
          :page-count="parseInt(Math.ceil(posts.count/20))"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-link-class="'page-item'"
          :prev-link-class="'page-prev'"
          :next-link-class="'page-next'"
          :hide-prev-next="false"
          >
        </paginate>
      </div>
    </div>
  </div>
</template>
<script>
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

export default {
  data() {
    return {
      searchKey: ""
    };
  },
  beforeMount() {
    this.$store.dispatch("loadPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  filters: {
    formatDate: function(value) {
      if (!value) return "";
      return format(value, "DD MMM YYYY", { locale: ruLocale });
    }
  },
  methods: {
    search() {
      this.$store.dispatch("searchPosts", { search: this.searchKey });
    },
    clickCallback(pageNum) {
      this.$store.dispatch("loadPostsPage", (pageNum - 1) * 20);
    }
  }
};
</script>
<style scoped>
.c {
  margin-top: 70px;
  margin-bottom: 70px;
}
.main-h {
  background-color: #ef741c;
  padding-top: 140px;
  padding-bottom: 100px;
  color: white;
}
button {
  background-color: white !important;
}
.input {
  width: 100%;
  height: 50px;
  border: 1px solid #f8f8f8;
  border-radius: 10px;
  padding: 16px 25px;
  outline: none;
}
.blog-panel{
  margin-bottom: 30px;
}
.blog-panel:first-child{
  flex-basis: 66.66% !important;
  max-width: 66.66% !important;
}
.blog-image {
  display: flex;
  position: relative;
  padding: 21px;
  color: white;
  border-radius: 10px;
  height: 180px;
  background-repeat: no-repeat;
  background-size: 100% 180px;
}
.blog-description {
  margin-top: 23px;
  font-size: 19px;
  line-height: 19px;
  max-height: 58px;
  overflow: hidden;
}
.read-more {
  color: #ef741c;
  margin: 0;
  margin-top: 5px;
}
h1,
p {
  margin: 0;
}
.post-title {
  align-self: center;
  font-size: 20px;
  line-height: 20px;
  max-height: 80px;
  overflow: hidden;
}
.first-post-title {
  font-size: 35px;
  line-height: 35px;
  max-height: 105px;
}
.post-description {
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
}
@media (max-width: 40em) {
  .blog-panel:first-child {
    flex-basis: 100% !important;
    max-width: 100% !important;
    
  }
  .first-post-title {
    font-size: 20px;
    line-height: 20px;
    max-height: 80px;
  }
}
@media (min-width: 40em) and (max-width: 50em) {
  
  .blog-panel:first-child {
    flex-basis: 50% !important;
    max-width: 50% !important;
  }
  .first-post-title {
    font-size: 20px;
    line-height: 20px;
    max-height: 80px;
  }
}
</style>
