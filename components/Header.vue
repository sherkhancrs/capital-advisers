<template>
    <div class="hero">
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
        <h1 class="page-header">Service</h1>
        <p class="page-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
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
  padding: 90px 200px;
}
.hero {
  background-color: #595959;
  background-size: 100% 100%;
  background-position-y: -80%;
  color: #ffffff;
}
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
@media (max-width: 40em) {
  .header-container {
    padding: 0;
  }
  .hero-content {
    padding: 100px 5%;
  }
  .header-menu-item {
    margin: 0;
    padding: 0;
    font-size: 13px;
  }
  .page-description {
    width: 100%;
  }
}
@media (min-width: 40em) and (max-width: 50em) {
  .header-container {
    padding: 0;
  }
  .hero-content {
    padding: 100px 5%;
  }
  .header-menu-item {
    margin: 0;
    padding: 0;
    font-size: 13px;
  }
  .page-description {
    width: 100%;
  }
}
</style>
