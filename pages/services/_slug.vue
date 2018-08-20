<template>
  <div>
    <div class="back-image"></div>
    <div class="service-h">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-12">
            <img  width="58px" height="56px" :src="getImgUrl(currentService.logo)" alt="">
            <div class="line"></div>
            <div class="slug-header-container">
              <h1 class="slug-header" >{{currentService.name}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container c">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 ">
          <p class="intro-panel-text">{{currentService.text}}</p>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <div class="intro-panel-image"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h2 class="intro-header">Lorem ipsum is simply dummy</h2>
        </div>
      </div>
      <div class="row">
          <ul>
              <li>Lorem ipsum is simply dummy text of the printing and typesetting industry</li>
              <li>Lorem ipsum is simply dummy text of the printing and typesetting industry</li>
              <li>Lorem ipsum is simply dummy text of the printing and typesetting industry</li>
          </ul>
      </div>
        <!-- <div class="intro-panel">
            <div class="intro-panel-col">
                
            </div>
            <div class="intro-panel-col panel-image">
							
						</div>
        </div> -->
				<!-- <div class="content">
					<h2>Lorem ipsum is simply dummy</h2>
					<ul>
						<li>Lorem ipsum is simply dummy text of the printing and typesetting industry</li>
						<li>Lorem ipsum is simply dummy text of the printing and typesetting industry</li>
						<li>Lorem ipsum is simply dummy text of the printing and typesetting industry</li>
					</ul>
				</div> -->
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
          hover: false,
          text: 'Мы независимы и свободны от влияния третьей стороны. Мы предлагаем объективные, беспристрастные советы, которые помогут нашим клиентам принимать важные решения. Как независимая консультационная  компания, основанная на вознаграждениях, мы выступаем в качестве фидуциария и не имеем никакого отношения к какой-либо брокерско-дилерской или инвестиционной группе, которая побуждает нас продавать их конкретные продукты. Эта независимость позволяет нам ориентироваться на потребности наших клиентов, а не на собственные. Что хорошо для наших клиентов, то хорошо и для нас.',
          ulHeader: "Индивидуальная инвестиционная стратегия в соответствии с вашими целями.",
          list: ["Major Purchase", "Build Wealth", "Safety Net"]
        },
        {
          url: "services/commerce",
          logo: "commerce",
          name: "Торговые Рекомендации",
          description:
            "DN | Capital Advisors помогает клиентам справиться с волатильностью рынка, предоставляя ценные торговые рекомендации для разных сегментов. Наши рекомендации формируются путем идеального сочетания фундаментального и технического анализа, проводимого нашими опытными аналитиками. Мы предоставляем ежемесячные, а также ежеквартальные подписки для наших клиентов в соответствии с их потребностями.",
          hover: false,
          text: "Common shares represent ownership in a company and a claim (dividends) on a portion of profits. Investors get one vote per share to elect the board members, who oversee the major decisions. Over the long term, common stock, by means of capital growth, yields higher returns than almost every other investment. If a company goes bankrupt and liquidates, the common shareholders will not receive money until the creditors, bondholders and preferred shareholders are paid. Research stocks that fit within your strategy and invest in stocks that have the potential to help you meet your specific goals.",
          ulHeader: "Develop a Diversified Asset Allocation Strategy",
          list: ["Invest in approximately 20 to 30 stocks in at least six to eight sectors with different investment characteristics.", "No more than 20% of the total value of your stock portfolio should be in any one sector.", "No more than 10% of the total value of your stock portfolio should be in any one stock.", "You should invest a minimum of approximately 3% to 4% of the total value of your stock portfolio in each stock."]
        },
        {
          url: "services/commerce2",
          logo: "combo-chart",
          name: "Хедж-Фонд",
          description:
            "В DN |Capital Advisors мы понимаем стремление клиентов к постоянному росту, и готовы обеспечить еще более высокую доходность с течением времени. Хедж-фонд, как инструмент, помогает диверсифицировать инвестиционные портфели клиентов и эффективно управлять рисками.",
          hover: false,
          text: "В DN |Capital Advisors мы понимаем стремление клиентов к постоянному росту, и готовы обеспечить еще более высокую доходность с течением времени. Хедж-фонд, как инструмент, помогает диверсифицировать инвестиционные портфели клиентов и эффективно управлять рисками.",
          ulHeader: "Investing in Mutual Funds",
          list: [""]
        }
      ]
    };
  },
  computed: {
    name() {
      return this.$route.params.slug;
    },
    title() {
			if (this.$route.params.slug === "commerce") {
				return "Торговые Рекомендации";
			} else if (this.$route.params.slug === "commerce2" ){
        return "Хэдж-Фонд";
      } else return "Инвистиционный Консалтинг";
    },
    currentService() {
      if (this.$route.params.slug === "commerce") {
				return this.services[1];
			} else if (this.$route.params.slug === "commerce2" ){
        return this.services[2];
      } else return this.services[0];
    }
  },
	methods: {
    getImgUrl(name) {
      return require(`~/assets/icons/${name}-white.png`);
    }
  }
}
</script>
<style scoped>
.c {
  margin-top: 70px;
  margin-bottom: 70px;
}
.intro-panel-text {
  font-size: 22px;
  line-height: 28px;
  text-align: justify;
  margin: 0;
}
.intro-panel-image {
  height: 260px;
  background-color: #ef741c;
  border-radius: 15px;
}
.intro-header {
  margin-top: 80px;
}
.panel-image {
  margin-left: 4%;
}
.content {
  margin-top: 181px;
  padding-bottom: 95px;
}
ul {
  list-style: none;
  padding-left: 40px;
}
li::before {
  content: "•";
  color: #ef741c;
  display: inline-block;
  width: 1em;
  margin-left: -2em;
}
li {
  margin-top: 20px;
  line-height: 20px;
  font-size: 20px;
}
h2 {
  font-size: 36px;
  width: 50%;
  text-align: justify;
  margin: 0;
}
.service-h {
  padding-top: 170px;
  padding-bottom: 100px;
  height: 100%;
  color: white;
}
.back-image {
  position: absolute;
  left: 0;
  right: 0;
  z-index: -2;
   display: block;
  background-image: url('http://www.legalexecutiveinstitute.com/wp-content/uploads/2016/04/blockchain.jpg');
  height: 100%;
   -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  height: 407px;
}
.line {
  background-color: #ef741c;
  width: 58px;
  height: 4px;
}
@media (max-width: 40em) {
  .service-h {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .intro-panel-image {
    margin-left: 0;
    margin-bottom: 40px;
  }
  .intro-panel-text {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h2 {
    width: 100%;
    font-size: 1.6em;
  }
  .content {
    margin-top: 50px;
  }
  .intro-header {
    margin-top: 15px;
  }
  .back-image {
    height: 300px;
  }
  li::before {
  content: "•";
  color: #ef741c;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
}
@media (min-width: 40em) and (max-width: 50em) {
  .service-h {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .intro-panel-image {
    margin-left: 0;
    margin-bottom: 40px;
  }
  .intro-panel-text {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h2 {
    width: 100%;
    font-size: 1.6em;
  }
  .content {
    margin-top: 50px;
  }
  .intro-header {
    margin-top: 15px;
  }
  .back-image {
    height: 365px;
  }
  li::before {
  content: "•";
  color: #ef741c;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
}
</style>

