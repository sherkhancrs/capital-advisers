<template>
  <div>
    <div class="main-header">
      <div class="container">
        <div class="row middle-xs" style="height:100vh;">
          <div class="col-xs-12">
            <h1 class="bolded d-none d-block-md" >ВАШ ПЕРСОНАЛЬНЫЙ <br>ИНВЕСТИЦИОННЫЙ СОВЕТНИК</h1>
            <h3 class="bolded d-block d-none-md" >ВАШ ПЕРСОНАЛЬНЫЙ <br>ИНВЕСТИЦИОННЫЙ СОВЕТНИК</h3>
            <h4 class="thined">
              Мы даем объективные, беспристрастные советы, <br>
              которые помогают нашим клиентам принимать правильные решения
            </h4>
            <button class="button-reverse button-transparent">ОКРЫТЬ СЧЕТ</button>
            <br>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row" style="margin-top:-30px;">
          <div class="col-xs-12 center-xs">
            <svg width="23px" height="12px" viewBox="0 0 23 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: Sketch 51.1 (57501) - http://www.bohemiancoding.com/sketch -->
                <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                    <g id="icon/arow/down/active" transform="translate(-18.000000, -24.000000)" stroke="#FFFFFF">
                        <g id="Group">
                            <path d="M29.3303389,33.8796321 L29.3390716,33.8708994 L38.9846176,24.2253534 L39.209971,24 L39.6606777,24.4507068 L39.4353244,24.6760601 L29.7897784,34.3216061 L29.564425,34.5469595 L29.3303389,34.3128734 L29.0962527,34.5469595 L28.8708994,34.3216061 L19.2253534,24.6760601 L19,24.4507068 L19.4507068,24 L19.6760601,24.2253534 L29.3216061,33.8708994 L29.3303389,33.8796321 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </g>
            </svg>
            <br><br>
          </div>
        </div>
      </div>
    </div>
    <div class="about-us">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>О нас</h1>
            <h3 class="thined">Мы признаем, что выбор «правильного» партнера по управлению капиталом это очень индивидуальное решение, которое может предоставить вам и вашей семье финансовый мир и безопасность. Не существует компании, которая идеально подходит для всех, поэтому мы в DN | Capital Advisors предлагаем Вам самим выбрать финансового советника из нашего основного капитала — опытных и квалифицированных специалистов. Поскольку выбор «правильного» советника окажет значительное влияние на вас и вашу семью на долгие годы, мы бы хотели обратить внимание на наш основной критерий формирования команды — мы выбираем людей, конгруэтных с ценностями и принципами компании. Мы приветствуем Вас, чтобы понять и принять наш подход.
            </h3>
          </div>
        </div>
      </div>
    </div>
    <f-service></f-service>
      <div class="bigger-better">
        <h1>Больше, лучше</h1>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-4 col-md-4" v-for="item in biggerBetters" :key="item.id">
                <div class="bb-item">
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
      </div>
      <div class="container why">
        <div class="row center-xs">
          <h1>Почему мы?</h1>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-4" v-for="item in reasons" :key="item.id">
              <div class="reason-header"><p class="reason-name">{{item.name}}</p></div>
              <div class="reason-description">{{item.description}}</div>
            </div>
        </div>
        </div>
  </div>  
</template>
<script>
import FService from "~/components/Service";
import countTo from "vue-count-to";

export default {
  components: {
    FService,
    countTo
  },
  data() {
    return {
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

<style scoped lang='less'>
* {
  word-break: all;
  box-sizing: border-box;
}
.main-header {
  background-image: url("~/assets/images/bg2.png");
  background-position: center center;
  background-size: cover;
}
.about-us {
  padding-top: 70px;
  padding-bottom: 100px;
  background-color: #f9f9f9;
}
.bigger-better {
  background-color: #595959;
  padding: 80px 0 80px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bb-container {
  display: flex;
  margin-top: 55px;
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
.suf {
  margin-left: -15px;
}
.bb-name {
  margin-left: -5px;
}
.why {
  padding-top: 70px;
  padding-bottom: 100px;
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
  color: black;
  margin-left: 26px;
  line-height: 20px;
  font-family: "SFUI-Light";
}
</style>

