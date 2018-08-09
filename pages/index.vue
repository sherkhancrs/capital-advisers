<template>
  <div class="layout-wrapper">
    <div class="row">
      <div class="about">
        <h1>О Нас</h1>
        <p class="text-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at metus id velit euismod ornare. Donec urna purus, tincidunt vitae sollicitudin sit amet, congue eget purus. Aenean at nibh non arcu tincidunt aliquet. Sed ornare mi quis est posuere vestibulum. Nulla felis libero, bibendum a orci ac, faucibus ullamcorper dolor. Ut varius ipsum at metus faucibus molestie. Nullam sagittis commodo risus, vel tincidunt neque pulvinar ac. Morbi ultrices ligula mauris, nec mollis tellus euismod facilisis. Cras a consequat lacus, ut auctor ligula.Nunc mattis erat sed odio faucibus, id semper mi ultrices. Duis volutpat, est vel vehicula varius, mi mi dignissim augue, vel lacinia purus mauris a enim. Donec odio ligula, luctus id maximus sit amet, convallis et nibh. Sed faucibus erat et purus sodales, non lobortis leo facilisis. Integer turpis odio, vehicula vel semper in, placerat at magna. Donec pretium consectetur magna, eu hendrerit leo. Pellentesque et leo ut dolor ornare ornare. Morbi scelerisque massa vel metus elementum, a mattis odio dictum. Fusce tristique, erat et lobortis tempor, magna tortor interdum urna, sit amet dapibus nunc diam commodo eros. Ut rutrum eros ut leo maximus mattis. Maecenas sit amet euismod felis, et gravida lectus. Sed scelerisque ex dui, nec feugiat metus tincidunt quis. Cras vestibulum vehicula felis et viverra. Aenean malesuada eget ante sed accumsan. Donec iaculis et velit eu faucibus.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="services">
        <h1>Услуги</h1>
        <div class="service-types">
          <div class="service" v-for="(service, index) in services" :key="service.id"  @mouseout="hoveroutService(index)" @mouseover="hoverService(index)">
            <nuxt-link :to="service.url"><div class="service-logo" :class="[service.hover === true ? 'logo-orange' : '']">
              <img  width="50px" height="50px" :src="getImgUrl(service.logo, index)" :alt="service.logo">
            </div></nuxt-link>
            <nuxt-link :to="service.url"><h3 class="service-name">{{service.name}}</h3></nuxt-link>
            <p>{{service.description}}</p>
          </div>
        </div>
        <div class="button-container">
          <nuxt-link to="services"><button class="button-reverse">Перейти</button></nuxt-link>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="bigger-better">
        <h1>Больше, лучше</h1>
        <div class="bb-container">
          <div class="bb-item" v-for="item in biggerBetters" :key="item.id">
            <h1 class="bb-item-name">{{item.name}}</h1>
            <div class="line"></div>
            <p class="bb-item-description">{{item.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="partners-block">
        <div class="reasons-container">
          <h1>Почему мы?</h1>
          <div class="reasons">
            <div class="reason" v-for="item in reasons" :key="item.id">
              <div class="reason-header"><p class="reason-name">{{item.name}}</p></div>
              <div class="reason-description">{{item.description}}</div>
            </div>
          </div>
        </div>
        <div class="offset-20"></div>
        <div class="partners-container">
          <h1>Патнеры</h1>
          <div class="partner" v-for="partner in partners" :key="partner.id">{{partner.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "landing",
  data() {
    return {
      services: [
        {
          url: "services/consultation",
          logo: "consultation",
          name: "Инвистиционный консалтинг",
          description:
            "Nunc mattis erat sed odio faucibus, id semper mi ultrices. Duis volutpat, est vel vehicula varius",
          hover: false
        },
        {
          url: "services/commerce",
          logo: "commerce",
          name: "Торговые Рекомендации",
          description:
            "Nunc mattis erat sed odio faucibus, id semper mi ultrices. Duis volutpat, est vel vehicula varius",
          hover: false
        },
        {
          url: "services/commerce2",
          logo: "combo-chart",
          name: "Инвистиционный консалтинг",
          description:
            "Nunc mattis erat sed odio faucibus, id semper mi ultrices. Duis volutpat, est vel vehicula varius",
          hover: false
        }
      ],
      biggerBetters: [
        {
          name: "$10+",
          description:
            "Praesent eget suscipit enim. Nunc id accumsan tortor, gravida sollicitudin lorem. Cras felis dui, bibendum a leo non, consequat aliquam quam. Fusce vestibulum lorem ex, in rhoncus turpis varius et. Pellentesque auctor, lectus a accumsan feugiat, ipsum lorem volutpat turpis, id pharetra eros purus eget leo."
        },
        {
          name: "20%",
          description:
            "Praesent eget suscipit enim. Nunc id accumsan tortor, gravida sollicitudin lorem. Cras felis dui, bibendum a leo non, consequat aliquam quam. Fusce vestibulum lorem ex, in rhoncus turpis varius et. Pellentesque auctor, lectus a accumsan feugiat, ipsum lorem volutpat turpis, id pharetra eros purus eget leo."
        },
        {
          name: "30+",
          description:
            "Praesent eget suscipit enim. Nunc id accumsan tortor, gravida sollicitudin lorem. Cras felis dui, bibendum a leo non, consequat aliquam quam. Fusce vestibulum lorem ex, in rhoncus turpis varius et. Pellentesque auctor, lectus a accumsan feugiat, ipsum lorem volutpat turpis, id pharetra eros purus eget leo."
        }
      ],
      reasons: [
        {
          name: "Коллаборация",
          description:
            "Praesent eget suscipit enim. Nunc id accumsan tortor, gravida sollicitudin lorem. Cras felis dui, bibendum a leo non, consequat aliquam quam. Fusce vestibulum lorem ex, in rhoncus turpis varius et. Pellentesque auctor, lectus a accumsan feugiat, ipsum lorem volutpat turpis, id pharetra eros purus eget leo."
        },
        {
          name: "Доверительные отношения",
          description:
            "Praesent eget suscipit enim. Nunc id accumsan tortor, gravida sollicitudin lorem. Cras felis dui, bibendum a leo non, consequat aliquam quam. Fusce vestibulum lorem ex, in rhoncus turpis varius et. Pellentesque auctor, lectus a accumsan feugiat, ipsum lorem volutpat turpis, id pharetra eros purus eget leo."
        },
        {
          name: "Объективность",
          description:
            "Praesent eget suscipit enim. Nunc id accumsan tortor, gravida sollicitudin lorem. Cras felis dui, bibendum a leo non, consequat aliquam quam. Fusce vestibulum lorem ex, in rhoncus turpis varius et. Pellentesque auctor, lectus a accumsan feugiat, ipsum lorem volutpat turpis, id pharetra eros purus eget leo."
        }
      ],
      partners: [
        { name: "Partner1", url: "" },
        { name: "Partner2", url: "" },
        { name: "Partner3", url: "" },
        { name: "Partner4", url: "" }
      ]
    };
  },
  methods: {
    getImgUrl(name, index) {
      if (this.services[index].hover === true) {
        return require(`~/assets/icons/${name}-white.png`);
      } else return require(`~/assets/icons/${name}.png`);
    },
    hoverService(index) {
      this.services[index].hover = true;
    },
    hoveroutService(index) {
      this.services[index].hover = false;
    }
  }
};
</script>

<style scoped>
.about {
  background-color: #f9f9f9;
  padding: 20px 200px 78px;
}
.text-description {
  margin-top: 60px;
  line-height: 30px;
}
.service-types {
  display: flex;
  margin-top: 70px;
}
.services {
  padding: 20px 200px 78px;
  background-color: #ffffff;
}
.service {
  padding: 25px;
  box-shadow: 0 13px 20px 12px #eeeeee;
  width: 300px;
  margin-left: 60px;
  border-radius: 10px;
  height: 512px;
  transition: 0.3s all ease-in-out;
}
.service:hover {
  margin-top: -40px;
}
.service:first-child {
  margin-left: 0;
}
.service-logo {
  width: 110px;
  height: 110px;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-orange {
  background-color: #ef741c;
}

.button-container {
  display: flex;
  justify-content: center;
}
.button-reverse {
  margin-top: 60px;
}
.bigger-better {
  background-color: #595959;
  padding: 70px 200px 78px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bb-container {
  display: flex;
  margin-top: 55px;
}
.bb-item {
  margin-left: 65px;
}
.bb-item:first-child {
  margin-left: 0;
}
.bb-item-name {
  font-size: 72px;
  color: #ef741c;
}
.bb-item-description {
  margin-top: 10px;
  color: #d3d3d3;
}
.line {
  width: 55px;
  height: 4px;
  background-color: #ffffff;
}
.partners-block {
  background-color: #ffffff;
  padding: 80px 200px 80px;
  display: flex;
}
.reasons-container {
  width: 50%;
}
.partners-container {
  width: 30%;
}
.offset-20 {
  width: 20%;
}
.reason {
  margin-top: 40px;
}
.reason:first-child {
  margin-top: 60px;
}
.reason-header {
  padding-bottom: 5px;
  border-left: 6px solid #ef741c;
  color: #505050;
}
.reason-name {
  margin-left: 20px;
  font-family: "SFUI-Bold";
}
.reason-description {
  color: #cecece;
  margin-left: 26px;
  line-height: 20px;
  font-family: "SFUI-Light";
}
.partner {
  padding: 0 55px;
  background-color: white;
  box-shadow: 0 13px 20px 12px #eeeeee;
  width: 290px;
  height: 110px;
  border-radius: 10px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.partner:first-child {
  margin-top: 55px;
}
h1,
p {
  margin: 0;
}
</style>
