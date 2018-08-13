<template>
    <div class="hero">
      <div class="header-container">
        <div class="logo"></div>
        <div class="header-menu">
          <nuxt-link class="header-menu-item" v-for="item in menu" :key="item.id" :to="item.url">
            {{item.name}}
          </nuxt-link>
        </div>
      </div>
      <div class="hero-content">
				<div class="slug-header-container">
					<h1 class="slug-header">About Us</h1>
                    <p class="slug-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus odio vitae arcu bibendum rutrum non at augue. Suspendisse semper nisl a suscipit dignissim. In ac nunc at magna pellentesque sodales sit amet fermentum neque. Maecenas mi sapien, porttitor sit amet quam sed, aliquet sagittis ligula. Ut egestas, ante malesuada accumsan ultrices, neque nisl luctus orci, in tempor ligula tellus in libero</p>
				</div>
      </div>
    </div>
    
</template>
<script>
export default {
  data() {
    return {
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
		title() {
			if (this.$route.params.slug === "commerce") {
				return "Торговые Рекомендации";
			} else return "Инвистиционный Консалтинг";
		}
	},
	methods: {
    getImgUrl(name, index) {
      return require(`~/assets/icons/${name}-white.png`);
    }
  }
};
</script>
<style scoped>
.header-container {
  padding: 20px 200px;
  background: rgba(0, 0, 0, 0.1);
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
    background: #f9f9f9;
    background-size: 100% 100%;
	color: #000000;
	backdrop-filter: blur(20px);
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
}
</style>
