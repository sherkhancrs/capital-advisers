<template>
<div>
    <div class="main-h">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-12">
            <h1 class="bolded d-none d-block-md" >Услуги</h1>
            <h3 class="bolded d-block d-none-md" >Услуги</h3>
            <h4 class="thined">
              Мы признаем, что выбор «правильного» партнера по управлению капиталом — это очень индивидуальное решение, которое может предоставить вам и вашей семье финансовый мир и безопасность.
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container c">
      <div class="row">
        <input  @keyup.enter="search" v-model="searchKey" type="text" class="input" placeholder="Type to search ...">
      </div>
      <div class="row">
        <div class="blogs-container">
					<div class="blog-panel" v-for="(post, index) in posts.results" :key="post.id">
						<nuxt-link :to="`/blog/${post.id}`">
              <div class="blog-image" :style="{ 'background-image': 'linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.3) 100%),url(' + post.image + ')' }">
                  <h1 class="post-title" :class="{'first-post-title': index === 0}">{{post.title}}</h1>
                  <p class="post-description">{{post.published_date | formatDate }}</p>
              </div>
						</nuxt-link>
            
						<div class="blog-description">{{post.body}}</div>
						<nuxt-link :to="`/blog/${post.id}`"><p class="read-more">read more</p></nuxt-link>
					</div>
				</div>
      </div>
      <div class="row center-xs">
        <paginate 
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
      console.log(pageNum);
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
.blogs-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
}
.blog-panel {
  width: 311px;
  margin-left: 45px;
  margin-top: 80px;
}
.blog-panel:first-child {
  margin-left: 0;
  width: 668px;
  margin-top: 0;
}
.blog-panel:nth-child(2) {
  margin-top: 0;
}
.blog-panel:nth-of-type(3n + 0) {
  margin-left: 0;
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
  .blogs-container {
    justify-content: center;
  }
  .blog-panel {
    margin-top: 30px !important;
    margin-left: 0;
    width: 100% !important;
  }
  .first-post-title {
    font-size: 20px;
    line-height: 20px;
    max-height: 80px;
  }
  .row {
    padding: 2.5%;
  }
}
@media (min-width: 40em) and (max-width: 50em) {
  .blogs-container {
    justify-content: center;
  }
  .blog-panel {
    margin-top: 30px !important;
    margin-left: 0;
    width: 100%;
  }
  .first-post-title {
    font-size: 20px;
    line-height: 20px;
    max-height: 80px;
  }
  .blog-panel:first-child {
    margin-left: 0;
    width: 100%;
    margin-top: 0;
  }
  .row {
    padding: 1%;
  }
}
</style>
