<template>
    <div class="hero" :style="{ 'background-image': 'linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.3) 100%),url(' + post.image + ')' }">
      <div class="header-container">
        <div class="logo"></div>
        <div class="header-menu">
          <nuxt-link class="header-menu-item" v-for="item in menu" :key="item.id" :to="item.url">
            {{item.name}}
          </nuxt-link>
        </div>
        <div class="menu-bar web-hide" @click="toggleMenu"></div>
      </div>
      
      <div class="menus" v-show="menuShow">
        <nuxt-link @click="toggleMenu" class="header-menu-item" v-for="item in menu" :key="item.id" :to="item.url">
            {{item.name}}
        </nuxt-link>
      </div>
      <div class="hero-content">
				<div class="slug-header-container">
					<h1 class="slug-header">{{post.title}}</h1>
                    <p class="slug-text">{{post.published_date | formatDate}}</p>
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
      menuShow: false,
      menu: [
        { name: "Главная", url: "/" },
        { name: "О нас", url: "/about" },
        { name: "Услуги", url: "/services" },
        { name: "Блог", url: "/blog" },
        { name: "Контакты", url: "/contacts" },
        { name: "FAQ", url: "/faq" }
      ]
    };
	},
	computed: {
    post() {
      return this.$store.state.postDetail;
    },
		title() {
			if (this.$route.params.slug === "commerce") {
				return "Торговые Рекомендации";
			} else return "Инвистиционный Консалтинг";
		}
	},
	methods: {
    getImgUrl(name, index) {
      return require(`~/assets/icons/${name}-white.png`);
    },
    toggleMenu() {
      this.menuShow = !this.menuShow;

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
.header-container {
  padding: 20px 200px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
}
.header-menu {
  display: flex;
  align-items: center;
}
.header-menu-item {
  font-size: 17px;
  margin-left: 45px;
  padding: 15px 15px;
  cursor: pointer;
  border: 1px solid transparent;
  font-family: "SFUI-Bold","Lato-Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: none;
  color: white;
}
.header-menu-item:hover {
  border: 1px solid white;
}
.header-menu-item:first {
  margin-left: 0;
}
.hero-content {
  background: transparent;
  padding: 70px 200px 60px;
}
.hero {
	color: #ffffff;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
}
/* @supports (backdrop-filter: blur(5px)) or (-webkit-backdrop-filter: blur(5px)) {
  .hero {
    background: url("https://newevolutiondesigns.com/images/freebies/galaxy-wallpaper-29.jpg") no-repeat;
  }
} */
.logo {
  width: 175px;
  height: 50px;
  background-color: black;
  border-radius: 20px;
}
h1 {
  font-size: 28px;
}
.hero-description {
  font-size: 18px;
  line-height: 40px;
  width: 60%;
}
.page-header {
  font-size: 34px;
  margin: 0;
}
.page-description {
  font-size: 17px;
  line-height: 19px;
  width: 464px;
  margin-top: 40px;
}
.line {
	width: 56px;
	height: 6px;
	background-color: #ef741c;
	margin: 20px 0 30px;
}
.slug-header {
	font-size: 34px;
	margin: 0;
}
.slug-header-container {
    width: 60%;
}
.slug-text {
    margin: 0;
    margin-top: 30px;
    line-height: 22px;
    font-size: 20px;
}
@media (max-width: 40em) {
  .header-container {
    padding: 0;
  }
  .hero-content {
    padding: 50px 5%;
  }
  .header-menu-item {
    margin: 0;
    padding: 0;
    font-size: 13px;
  }
  .slug-header-container{
    width: 100%;
    overflow-wrap: break-word;
  }
  .menus a {
  color: black;
  }
}
@media (min-width: 40em) and (max-width: 50em) {
  .header-container {
    padding: 0;
  }
  .hero-content {
    padding: 50px 5%;
  }
  .header-menu-item {
    margin: 0;
    padding: 0;
    font-size: 13px;
  }
  .slug-header-container{
    width: 100%;
    overflow-wrap: break-word;
  }
  .menus a {
  color: black;
  }
}
</style>
