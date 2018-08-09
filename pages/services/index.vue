<template>
    <div style="margin: 68px 0 138px;">
        <div class="service-types">
          <div class="service" v-for="(service, index) in services" :key="service.id"  @mouseout="hoveroutService(index)" @mouseover="hoverService(index)">
            <nuxt-link :to="service.url"><div class="service-logo" :class="[service.hover === true ? 'logo-orange' : '']">
              <img  width="50px" height="50px" :src="getImgUrl(service.logo, index)" :alt="service.logo">
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
  box-shadow: 0 13px 20px 12px #eeeeee;
  width: 327px;
  border-radius: 10px;
  height: 397px;
  margin-left: 10px;
  transition: 0.3s all ease-in-out;
}
.service:hover {
  transform: scale(1.2);
  z-index: 3;
}
.service::after {
	opacity: 1;
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
</style>


