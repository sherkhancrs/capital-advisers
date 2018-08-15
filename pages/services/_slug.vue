<template>
    <div>
        <div class="intro-panel">
            <div class="intro-panel-col">
                <p class="intro-panel-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset</p>
            </div>
            <div class="intro-panel-col panel-image">
							<div class="intro-panel-image"></div>
						</div>
        </div>
				<div class="content">
					<h2>Lorem ipsum is simply dummy</h2>
					<ul>
						<li>Lorem ipsum is simply dummy text of the printing and typesetting industry</li>
						<li>Lorem ipsum is simply dummy text of the printing and typesetting industry</li>
						<li>Lorem ipsum is simply dummy text of the printing and typesetting industry</li>
					</ul>
				</div>
    </div>
</template>
<script>
export default {
  layout: "service",
  computed: {
    name() {
      return this.$route.params.slug;
    }
  }
};
</script>
<style scoped>
.intro-panel {
  display: flex;
  padding-top: 95px;
}
.intro-panel-col {
  width: 48%;
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
}

@media (max-width: 40em) {
  .intro-panel {
    flex-direction: column-reverse;
    padding-top: 50px;
  }
  .intro-panel-col {
    width: 100%;
  }
  .panel-image {
    margin-left: 0;
  }
  .intro-panel-text {
    margin-top: 20px;
  }
  h2 {
    width: 100%;
    font-size: 1.6em;
  }
  .content {
    margin-top: 50px;
  }
}
</style>

