<template>
    <div class="hero">
      <div class="header-container">
        <div class="logo"></div>
        <div class="header-menu">
          <div class="header-menu-item" v-for="item in menu" :key="item.id">
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="hero-content">
        <h1>Ваш Персональный</h1>
        <h1>Инвестиционный Советник</h1>
        <p class="hero-description">Мы даем объективные, Nunc mattis erat sed odio faucibus, id semper mi ultrices. Duis volutpat, est vel vehicula varius, mi mi dignissim augue, vel lacinia purus mauris a enim.</p>
        <div class="action-buttons">
          <button class="button">НАШИ УСЛУГИ</button>
          <button class="button-reverse" style="margin-left: 30px">ОТКРЫТЬ СЧЕТ</button>
        </div>
      </div>
    </div>
    
</template>
<script>
export default {
  data() {
    return {
      menu: [
        { name: "Главная" },
        { name: "О нас" },
        { name: "Услуги" },
        { name: "Блог" },
        { name: "Контакты" }
      ]
    };
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
.header-menu {
  display: flex;
  align-items: center;
}
.header-menu-item {
  font-size: 17px;
  margin-left: 45px;
  padding: 15px 25px;
  cursor: pointer;
  border: 1px solid transparent;
  font-family: "SFUI-Bold";
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
  font-size: 28px;
}
.hero-description {
  font-size: 18px;
  line-height: 40px;
  width: 60%;
}
</style>
