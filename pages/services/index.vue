<template>
    <div class="service-container">
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
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
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
  box-shadow: 0 25px 50px rgba(0,0,0,0.2);
  width: 327px;
  border-radius: 10px;
  height: 397px;
  margin-left: 10px;
  transition: 0.3s all ease-in-out;
}
.service:hover {
  transform: scale(1.1);
  box-shadow: 0 25px 50px rgba(0,0,0,0.06);
  z-index: 3;
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
}
</style>


