<template>
    <div class="footer">
			<div class="urls-container"></div>	
		</div>
</template>
<script>
export default {
	data() {
		return {
			company : [
				{name : "Главная" , url : ""},
				{name : "О нас" , url : ""},
				{name : "Услуги" , url : ""},
				{name : "Блог" , url : ""},
				{name : "Контакты" , url : ""},
			],
			socialMedia : [
				{name : "Twitter" , url : ""},
				{name : "Linkeind" , url : ""},
				{name : "Facebook" , url : ""},
				{name : "Google+" , url : ""}
			],
			services: [
				{name : "Invest holding" , url : ""},
				{name : "Trading recomendation" , url : ""},
				{name : "Handge Fund" , url : ""}
			],
			location: [
				{name : "Esentai Tower, Almaty, 050000"}
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
}
@media (max-width: 40em) {
	.footer {
		padding: 0;
	}
}
</style>
