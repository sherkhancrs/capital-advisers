<template>
    <div class="blogs-layout">
        <input type="text" class="input" placeholder="Type to search ...">
				<div class="blogs-container">
					<div class="blog-panel" v-for="blog in 10" :key="blog.id">
						<div class="blog-image"></div>
						<div class="blog-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry dummy text of the printing and typesetting industry</div>
						<p class="read-more">read more</p>
					</div>
				</div>
    </div>
</template>
<script>
export default {
  layout: "blog",
  beforeMount() {
    this.$store.dispatch("loadPosts");
  }
};
</script>
<style scoped>
.input {
  width: 100%;
  height: 50px;
  border: 1px solid #f8f8f8;
  border-radius: 7px;
	padding: 16px 25px;
	outline: none;
}
.blogs-layout {
  margin: 45px 0;
}
.blogs-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
}
.blog-panel {
  width: 311px;
  margin-left: 45px;
  margin-top: 80px;
}
.blog-panel:first-child {
  margin-left: 0;
  width: 668px;
  margin-top: 0;
}
.blog-panel:nth-child(2) {
  margin-top: 0;
}
.blog-panel:nth-of-type(3n + 0) {
  margin-left: 0;
}
.blog-image {
  border-radius: 10px;
  background-color: #ef741c;
  height: 180px;
}
.blog-description {
  margin-top: 23px;
  font-size: 19px;
  line-height: 19px;
  height: 58px;
  overflow: hidden;
}
.read-more {
  color: #ef741c;
  margin: 0;
}
@media (max-width: 40em) {
	.blogs-container {
		justify-content: center;
	}
	.blog-panel {
		margin-top: 30px !important;
		margin-left: 0;
	}
}
</style>
