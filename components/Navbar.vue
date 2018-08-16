<template>
<div>
  <div class="header-container" :class="{dark: menuShow}">
    <div class="logo"></div>
    <div class="header-menu">
    	<nuxt-link class="header-menu-item" v-for="item in menu" :key="item.id" :to="item.url">
    	{{item.name}}
    	</nuxt-link>
    </div>    
    <div class="menu-bar web-hide" @click="toggleMenu">
      <div class="menu-icon"></div>
      <div class="menu-icon"></div>
      <div class="menu-icon"></div>
    </div>
  </div>
  <div class="menus" v-show="menuShow">
    <nuxt-link @click.native="toggleMenu" class="header-menu-item" v-for="item in menu" :key="item.id" :to="item.url">
    {{item.name}}
    </nuxt-link>
  </div>
</div>
</template>

<script>
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
  methods: {
    toggleMenu() {
      this.menuShow = !this.menuShow;
      console.log("toggle");
    }
  }
};
</script>
<style>
.header-container {
  padding: 20px 200px;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}
.logo {
  width: 175px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3) ;
  border-radius: 20px;
}
.menu-icon {
	width: 25px;
	height: 2px;
	background-color: #ffffff;
  margin: 4px 0;
  z-index: 10;
}
.menus {
	display: flex;
	flex-direction: column;
  position: fixed;
  top: 0;
  /* background-color: #f9f9f9; */
  background-color: rgba(0, 0, 0, 0.9);
	width: 100%;
	margin-top: 50px;
	z-index: 9;
}

.menus a {
	padding: 15px !important;
	width: 100%;
	font-size: 17px !important;
	color: white !important;
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
  font-family: "SFUI-Bold", "Lato-Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: none;
  color: white;
}
.header-menu-item:hover {
  border: 1px solid white;
}
.header-menu-item:first {
  margin-left: 0;
}
.dark {
  background-color: rgba(0, 0, 0, 0.9) !important;
}
@media (max-width: 40em) {
  .web-hide {
		display: inherit;
	}
	.mobile-hide {
		display: none !important;
	}
	.header-menu {
		display: none !important;
  }
  .header-menu-item {
    margin: 0;
    padding: 0;
    font-size: 13px;
  }
	.header-container {
    position: fixed;
    top: 0;
		width: 100%;
		justify-content: space-between;
    z-index: 9;
    padding: 0;
	}
	.menu-bar {
		width: 50px;
		height: 50px;
    float: right;
    display: flex !important;
    flex-direction: column !important;
		align-items: center !important;
		justify-content: center;
	}
}
@media (min-width: 40em) and (max-width: 50em) {
  .web-hide {
		display: flex;
	}
	.tablet-hide {
		display: none;
	}
	/* .mobile-hide {
		display: none !important;
	} */
	.header-menu {
		display: none !important;
  }
  .header-menu-item {
    margin: 0;
    padding: 0;
    font-size: 13px;
  }
	.header-container {
    position: fixed;
    top: 0;
		width: 100%;
		justify-content: space-between;
    z-index: 9;
    padding: 0;
	}
  .menu-bar {
		width: 50px;
		height: 50px;
    float: right;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
	}
	.slug-header-container {
		margin-top: 50px;
	}
}
</style>
