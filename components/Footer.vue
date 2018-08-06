<template>
    <div class="footer">
			<div class="logo"></div>
			<div class="footer-content">
				<div class="footer-content-item">
					<div class="footer-content-item-header">Обзор</div>
					<div class="footer-urls">
						<div class="urls-first">
							<div class="url" v-for="url in review.slice(0,5)" :key="url.id">{{url.name}}</div>
						</div>
						<div class="urls-second">
							<div class="url" v-for="url in review.slice(5)" :key="url.id">{{url.name}}</div>
						</div>
						
					</div>
				</div>
				<div class="footer-content-item">
					<div class="footer-content-item-header">Социальные сети</div>
					<div class="footer-urls">
						<div class="urls-first">
							<div class="url" v-for="url in socialMedia" :key="url.id">{{url.name}}</div>
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
			review : [
				{name : "Главная" , url : ""},
				{name : "О нас" , url : ""},
				{name : "Услуги" , url : ""},
				{name : "Блог" , url : ""},
				{name : "Контакты" , url : ""},
				{name : "Bonds" , url : ""},
				{name : "Commodities" , url : ""},
				{name : "Investments" , url : ""},
				{name : "Retirement" , url : ""},
				{name : "Stocks" , url : ""}
			],
			socialMedia : [
				{name : "Facebook" , url : ""},
				{name : "Twitter" , url : ""},
				{name : "Linkeind" , url : ""},
				{name : "Google+" , url : ""}
			]
		};
	}
};
</script>
<style scoped>
.footer {
  background-color: #595959;
  height: 575px;
  padding: 85px 200px 15px;
}
.footer-content {
  display: flex;
  margin-top: 65px;
}
.footer-content-item {
  width: 50%;
}
.footer-content-item-header {
  color: #ef741c;
	font-size: 18px;
	font-family: "SFUI-Bold";
}
.footer-urls {
	margin-top: 50px;
	display: flex;
}
.url {
	color: #ffffff;
	margin-top: 20px;
}
.url:first-child {
	margin-top: 0;
}
.urls-second {
	margin-left: 120px;
}
</style>
