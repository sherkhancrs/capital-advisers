<template>
  <div class="layout-wrapper">
    <div class="row">
      <div class="about">
        <h1>О Нас</h1>
        <p class="text-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at metus id velit euismod ornare. Donec urna purus, tincidunt vitae sollicitudin sit amet, congue eget purus. Aenean at nibh non arcu tincidunt aliquet. Sed ornare mi quis est posuere vestibulum. Nulla felis libero, bibendum a orci ac, faucibus ullamcorper dolor. Ut varius ipsum at metus faucibus molestie. Nullam sagittis commodo risus, vel tincidunt neque pulvinar ac. Morbi ultrices ligula mauris, nec mollis tellus euismod facilisis. Cras a consequat lacus, ut auctor ligula.Nunc mattis erat sed odio faucibus, id semper mi ultrices. Duis volutpat, est vel vehicula varius, mi mi dignissim augue, vel lacinia purus mauris a enim. Donec odio ligula, luctus id maximus sit amet, convallis et nibh. Sed faucibus erat et purus sodales, non lobortis leo facilisis. Integer turpis odio, vehicula vel semper in, placerat at magna. Donec pretium consectetur magna, eu hendrerit leo. Pellentesque et leo ut dolor ornare ornare. Morbi scelerisque massa vel metus elementum, a mattis odio dictum. Fusce tristique, erat et lobortis tempor, magna tortor interdum urna, sit amet dapibus nunc diam commodo eros. Ut rutrum eros ut leo maximus mattis. Maecenas sit amet euismod felis, et gravida lectus.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="services">
        <h1>Услуги</h1>
        <div class="service-types">
        <div v-swiper:mySwiper="swiperOption" class="web-hide">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(service, index) in services" :key="service.id">
              <div class="s-item">
                <nuxt-link :to="service.url">
                <div class="service-logo">
                  <img  width="33px" height="33px" :src="getImgUrl(service.logo, index)" alt="">
                </div>
                </nuxt-link>
                <nuxt-link :to="service.url"><h3 class="service-name">{{service.name}}</h3></nuxt-link>
                <p class="service-name">{{service.description}}</p>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>



          <div class="service mobile-hide" v-for="(service, index) in services" :key="service.id"  @mouseout="hoveroutService(index)" @mouseover="hoverService(index)">
            <nuxt-link :to="service.url"><div class="service-logo" :class="[service.hover === true ? 'logo-orange' : '']">
              <img  width="33px" height="33px" :src="getImgUrl(service.logo, index)" :alt="service.logo">
            </div></nuxt-link>
            <nuxt-link :to="service.url"><h3 class="service-name">{{service.name}}</h3></nuxt-link>
            <p class="service-description">{{service.description}}</p>
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
            <h1 class="bb-item-name">
              <span class="pre">{{item.pre}}</span>
              <countTo class="bb-name" ref="counter" :startVal='startVal' :endVal='parseInt(item.name)' :duration='3000' :autoplay="false"></countTo>
              <span class="suf">{{item.suf}}</span>
            </h1>
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
import countTo from "vue-count-to";

export default {
  layout: "landing",
  components: {
    countTo
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      ready: false,
      startVal: 0,
      decimals: 0,
      duration: 2.5,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: ""
      },
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
          name: "10",
          pre: "$",
          suf: "+",
          description:
            "Praesent eget suscipit enim. Nunc id accumsan tortor, gravida sollicitudin lorem. Cras felis dui, bibendum a leo non, consequat aliquam quam. Fusce vestibulum lorem ex, in rhoncus turpis varius et. Pellentesque auctor, lectus a accumsan feugiat, ipsum lorem volutpat turpis, id pharetra eros purus eget leo."
        },
        {
          name: "20",
          pre: "",
          suf: "%",
          description:
            "Praesent eget suscipit enim. Nunc id accumsan tortor, gravida sollicitudin lorem. Cras felis dui, bibendum a leo non, consequat aliquam quam. Fusce vestibulum lorem ex, in rhoncus turpis varius et. Pellentesque auctor, lectus a accumsan feugiat, ipsum lorem volutpat turpis, id pharetra eros purus eget leo."
        },
        {
          name: "30",
          pre: "",
          suf: "+",
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
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
      var bb = document.querySelector(".bigger-better");
      var services = document.querySelector(".services");
      var c = 0;
      if (window.scrollY + 300 >= bb.offsetTop) {
        this.$store.commit("INC_COUNTER");
        if (this.$store.state.counter <= 1) {
          this.start();
        }
      }
    },
    start() {
      var c = document.querySelector("#count");
      for (var x = 0; x < 3; x++) {
        this.$refs.counter[x].start();
      }
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("RESET_COUNTER");
    next();
  }
};
</script>

<style scoped>
.about {
  background-color: #f9f9f9;
  padding: 80px 200px 80px;
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
  padding: 80px 200px 80px;
  background-color: #ffffff;
}
.service {
  padding: 25px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin-left: 60px;
  border-radius: 10px;
  transition: 0.3s all ease-in-out;
  height: 412px;
}
.service:hover {
  margin-top: -40px;
  transform: scale(1.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.06);
}
.service:first-child {
  margin-left: 0;
}
.service-logo {
  width: 77px;
  height: 77px;
  background-color: #f0f0f0;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-orange {
  background-color: #ef741c;
}

.service-description {
  line-height: 25px;
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
  padding: 80px 200px 80px;
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
  font-family: "SFUI-Bold", "Lato-Regular", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
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

.suf {
  margin-left: -15px;
}
.bb-name {
  margin-left: -5px;
}
@media (max-width: 40em) {
  .swiper-wrapper {
    display: flex;
  }
  .swiper-pagination {
    position: relative;
    display: inherit;
  }
  .s-container {
    display: flex;
  }
  .s-item {
    width: 100%;
    max-width: 280px;
    min-width: 280px;
    height: 300px;
    margin: 5px;
    background-color: #ef741c;
    padding: 15px;
    background-color: white;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.06);

  }
  .service-types {
    overflow: hidden;
    display: flex;
    flex-direction: row;
  }
  .service-container {
    display: flex;
    width: 100% !important;
    min-width: 280px;
    margin-bottom: 10px;
  }
  .about {
    padding: 10% 5%;
  }
  .services {
    padding: 10% 5%;
  }
  .bigger-better {
    padding: 10% 5%;
  }
  .bb-container {
    flex-wrap: wrap;
  }
  .bb-item {
    margin-left: 0;
  }
  .partners-block {
    padding: 10% 5%;
    flex-wrap: wrap;
  }
  .reasons-container {
    width: 100%;
  }
  .offset-20 {
    width: 0;
  }
  .partners-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10% 5% 10% 0;
  }
  .service {
    padding: 5%;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
    width: 100%;
    margin: 0;
    border-radius: 10px;
    transition: 0.3s all ease-in-out;
    height: 412px;
  }
  .service:first-child {
    margin-left: 0;
  }
  .service-logo {
    width: 77px;
    height: 77px;
    background-color: #f0f0f0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo-orange {
    background-color: #ef741c;
  }

  .service-description {
    line-height: 25px;
  }
}
</style>
