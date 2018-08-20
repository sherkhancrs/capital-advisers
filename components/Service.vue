<template>
    <div class="container">
      <div class="row center-xs">
        <div class="col-xs-10">
          <div class="row service-types start-xs">
            <div class="col-xs-12 col-md-4" v-for="(service, index) in services" :key="service.id" >
                <nuxt-link :to="service.url">
                  <div class="service" @mouseout="hoveroutService(index)" @mouseover="hoverService(index)">
                    <nuxt-link :to="service.url"><div class="service-logo" :class="[service.hover === true ? 'logo-orange' : '']">
                      <img  width="33px" height="33px" :src="getImgUrl(service.logo, index)" :alt="service.logo">
                    </div></nuxt-link>
                    <nuxt-link :to="service.url"><h3 class="service-name">{{service.name}}</h3></nuxt-link>
                    <p style="color: #565656">{{service.description}}</p>
                    <nuxt-link :to="service.url"><button class="button-reverse" style="align-self: center;margin-top: 30px;">Перейти</button></nuxt-link>
                  </div>
                </nuxt-link>
            </div>
          </div>
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
            "Клиенты DN | Capital Advisors заслуживают всесторонней поддержки на пути достижении своих финансовых целей. Мы предлагаем объективную консультационную оценку и прокладываем тропинку к получению макимально эффективного результата в соответствии с целями, практикуя индивидуальный подход.",
          hover: false
        },
        {
          url: "services/commerce",
          logo: "commerce",
          name: "Торговые Рекомендации",
          description:
            "DN | Capital Advisors помогает клиентам справиться с волатильностью рынка, предоставляя ценные торговые рекомендации для разных сегментов. Наши рекомендации формируются путем идеального сочетания фундаментального и технического анализа, проводимого нашими опытными аналитиками. Мы предоставляем ежемесячные, а также ежеквартальные подписки для наших клиентов в соответствии с их потребностями.",
          hover: false
        },
        {
          url: "services/commerce2",
          logo: "combo-chart",
          name: "Хедж-Фонд",
          description:
            "В DN |Capital Advisors мы понимаем стремление клиентов к постоянному росту, и готовы обеспечить еще более высокую доходность с течением времени. Хедж-фонд, как инструмент, помогает диверсифицировать инвестиционные портфели клиентов и эффективно управлять рисками.",
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
  margin-bottom: 100px;
}
.service {
  padding: 25px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: 0.3s all ease-in-out;
  margin-bottom: 5%;
}
.service:hover {
  transform: scale(1.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.06);
}
.service::after {
  opacity: 1;
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
  .service-types {
    flex-wrap: wrap;
  }
  .service {
    margin: 0.5rem;
  }
}

@media (min-width: 40em) and (max-width: 50em) {
  .service {
  }
}
</style>
