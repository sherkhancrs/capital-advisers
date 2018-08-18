<template>
  <div>
    <div class="back-image"></div>
    <div class="main-h">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-12">
            <img  width="58px" height="56px" :src="getImgUrl('consultation')" alt="">
            <div class="line"></div>
            <div class="slug-header-container">
              <h1 class="slug-header" >{{title}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container c">
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12 ">
          <p class="intro-panel-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset</p>
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
.main-h {
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
  .main-h {
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
  .main-h {
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

