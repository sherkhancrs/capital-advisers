<template>
    <div class="footer">
			<div class="urls-container">
				<div class="urls" v-if="urls" v-for="item in urls" :key="item.key">
					<div class="url-header" v-if="item">{{item.name}}</div>
					<div class="links">
						<nuxt-link :to="`${link.url}`" class="url"  :class="{location:link.name.startsWith('Esentai')}" v-for="link in item.list" :key="link.id">{{link.name}}</nuxt-link>
					</div>
				</div>
			</div>
			<div class="hr"></div>	
			<p class="brand-name">CapitalAdvisors.kz © 2018</p>
		</div>
</template>
<script>
export default {
  data() {
    return {
      urls: [
        {
          name: "COMPANY",
          list: [
            { name: "Главная", url: "/" },
            { name: "О нас", url: "/about" },
            { name: "Услуги", url: "/services" },
            { name: "Блог", url: "/blog" },
            { name: "Контакты", url: "/contacts" }
          ]
        },
        {
          name: "SERVICES",
          list: [
            { name: "Invest holding", url: "" },
            { name: "Trading recomendation", url: "" },
            { name: "Handge Fund", url: "" }
          ]
        },
        {
          name: "LOCATION",
          list: [{ name: "Esentai Tower, Almaty, 050000" }]
        },
        {
          name: "CONNECTED",
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
  height: 327px;
  padding: 48px 200px 62px;
}
.urls-container {
  display: flex;
  justify-content: space-between;
}
.urls {
  width: 237px;
}
.url-header {
	border-bottom: 2px solid #ef741c;
	color: white;
  font-size: 16px;
  padding-bottom: 6px;
  font-family: "SFUI-Bold"
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
}
@media (max-width: 40em) {
  .footer {
		padding: 0;
		height: 100%;
		margin-top: 40px;
	}
	.urls-container {
		flex-direction: column;
		align-items: center;
	}
	.urls {
		margin-top: 30px;
	}
	.brand-name {
		text-align: center;
	}
}
</style>
