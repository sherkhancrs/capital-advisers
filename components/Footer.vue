<template>
    <div class="footer">
      <div class="container" :class="{blurred: this.$store.state.showContactModal}">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12" v-for="item in urls" :key="item.key">
            <div class="urls" v-if="urls" >
              <div class="url-header" v-if="item">{{item.name}}</div>
              <div class="links">
                <nuxt-link :to="`${link.url}`" class="url"  :class="{location:link.name.startsWith('Esentai')}" v-for="link in item.list" :key="link.id">{{link.name}}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
			<div class="hr"></div>	
			<p class="brand-name">CapitalAdvisors.kz © 2018</p>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      urls: [
        {
          name: "Компания",
          list: [
            { name: "Главная", url: "/" },
            { name: "О нас", url: "/about" },
            { name: "Услуги", url: "/services" },
            { name: "Блог", url: "/blog" },
            { name: "Контакты", url: "/contacts" },
            { name: "FAQ", url: "/faq" }
          ]
        },
        {
          name: "Услуги",
          list: [
            { name: "Invest holding", url: "/services/financial-planning" },
            { name: "Trading recomendation", url: "/services/stocks" },
            { name: "Hedge Fund", url: "/services/hedge-fund" }
          ]
        },
        {
          name: "Локация",
          list: [{ name: "Esentai Tower, Almaty, 050000" }]
        },
        {
          name: "Социальные сети",
          list: [
            { name: "Twitter", url: "" },
            { name: "Linkeind", url: "" },
            { name: "Facebook", url: "" },
            { name: "Google+", url: "" }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.footer {
  background-color: #595959;
  padding: 48px 0;
}
.urls {
  width: 237px;
}
.url-header {
	border-bottom: 2px solid #ef741c;
	color: white;
  font-size: 16px;
  padding-bottom: 6px;
  font-family: "SFUI-Bold", "Lato-Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.links {
	display: flex;
	flex-direction: column;
}
.url {
  color: #e4e4e4;
  margin-top: 8px;
  font-size: 14px;
}
.location {
	width: 122px;
	font-size: 15px;
	line-height: 17px;
	margin-top: 20px;
}
.hr {
	width: 100%;
	height: 1px;
	background-color: #979797;
	margin-top: 65px;
}
.brand-name {
	font-size: 14px;
	color: #ffffff;
  margin-top: 20px;
  margin-bottom: 0;
}
@media (max-width: 40em) {
	.urls {
    margin-top: 30px;
    width: 98%;
	}
	.brand-name {
		text-align: center;
	}
}
@media (min-width: 40em) and (max-width: 50em) {
	.urls {
    margin: 30px;
	}
	.brand-name {
		text-align: center;
  }
  .container {
    width: 100%;
  }
}
</style>
