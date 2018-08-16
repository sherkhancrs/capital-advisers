<template>
    <div class="service-container">
        <div class="service-types">
          <div class="service mobile-hide" v-for="(service, index) in services" :key="service.id"  @mouseout="hoveroutService(index)" @mouseover="hoverService(index)">
            <nuxt-link :to="service.url"><div class="service-logo" :class="[service.hover === true ? 'logo-orange' : '']">
              <img  width="33px" height="33px" :src="getImgUrl(service.logo, index)" :alt="service.logo">
            </div></nuxt-link>
            <nuxt-link :to="service.url"><h3 class="service-name">{{service.name}}</h3></nuxt-link>
            <p>{{service.description}}</p>
						<nuxt-link :to="service.url"><button class="button-reverse" style="align-self: center;margin-top: 30px;">Button</button></nuxt-link>
          </div>
        </div>
    </div>
</template>
<script>
export default {
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
.service-container {
  margin: 68px 0 138px;
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
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  width: 327px;
  border-radius: 10px;
  height: 397px;
  margin-left: 10px;
  transition: 0.3s all ease-in-out;
}
.service:hover {
  transform: scale(1.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.06);
}
.service::after {
  opacity: 1;
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

@media (max-width: 40em) {
  .service-container {
    margin: 20px 0;
  }
  .service-types {
    flex-wrap: wrap;
  }
  .service {
    margin: 0;
  }
  .services {
    padding: 20px 5% 78px;
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
}

@media (min-width: 40em) and (max-width: 50em) {
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
    padding: 10% 5% 10% 5%;
  }
  .service {
    padding: 5%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    width: 60% !important;
    margin: 10px;
    border-radius: 10px;
    transition: 0.3s all ease-in-out;
    height: 412px;
  }
  .service-name {
    width: 100%;
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
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
  .s-item {
    max-width: 330px !important;
    min-width: 330px !important;
    height: 300px;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .s-item {
    max-width: 330px !important;
    min-width: 330px !important;
    height: 300px;
  }
}

@media only screen and (min-device-width: 414px) and (max-device-width: 736px) {
  .s-item {
    max-width: 360px !important;
    min-width: 360px !important;
    height: 300px;
  }
}

@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3) {
  .s-item {
    max-width: 315px !important;
    min-width: 315px !important;
    height: 300px;
  }
}
</style>


