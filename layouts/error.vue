<template>
  <div class="container">
      <div class="error" v-if="error.statusCode === 404">
        <h1>404</h1>
				<h2>Извините, страница не найдена</h2>
				<nuxt-link class="link" to="/">Назад к главной странице</nuxt-link>
    	</div>
      <div class="error" v-else>
				<nuxt-link class="link" to="/">Назад к главной странице</nuxt-link>
			</div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "empty"
};
</script>
<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 40px;
  text-align: center;
}
h2 {
	font-size: 36px;
	margin-top: 0;
	text-align: center;
}
.link {
  cursor: pointer;
  padding: 15px;
  background-color: #ef741c;
  color: white;
  border-radius: 5px;
}
@media (max-width: 40em) {
  h1 {
    font-size: 23px;
  }
  h2 {
    font-size: 20px;
  }
}
@media (min-width: 40em) and (max-width: 50em) {
	h1 {
    font-size: 36px;
  }
  h2 {
    font-size: 32px;
  }
}
</style>
