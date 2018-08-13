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
        <h1>Ваш Персональный</h1>
        <h1>Инвестиционный Советник</h1>
        <p class="hero-description">Мы даем объективные, Nunc mattis erat sed odio faucibus, id semper mi ultrices. Duis volutpat, est vel vehicula varius, mi mi dignissim augue, vel lacinia purus mauris a enim.</p>
        <div class="action-buttons">
          <nuxt-link to="services"><button class="button">НАШИ УСЛУГИ</button></nuxt-link>
          <nuxt-link to="/"><button class="button-reverse open-account">ОТКРЫТЬ СЧЕТ</button></nuxt-link>
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
.hero-content {
  background: transparent;
  padding: 200px;
}
.hero {
  height: 50%;
  background: url("~/assets/images/bg1.jpg") no-repeat;
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
  font-size: 50px;
  margin: 0;
  line-height: 58px;
}
.hero-description {
  font-size: 20px;
  line-height: 40px;
  width: 60%;
}
.open-account {
  margin-left: 30px;
}
.action-buttons {
  display: flex;
}
@media (max-width: 40em) {
  .header-container {
    padding: 0;
  }
  .hero-content {
    padding: 50px 5%;
  }
  .hero-description {
    width: 100%;
  }
  .header-menu-item {
    margin: 0;
    padding: 0;
    font-size: 13px;
  }
  h1 {
    font-size: 30px;
    margin: 0;
    line-height: 38px;
  }
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  .open-account {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>
