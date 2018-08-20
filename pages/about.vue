<template>
<div>
<div class="main-header">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-12">
            <h1 class="bolded">О нас</h1>
            <h3 class="thined" style="color: #565656">
              Мы признаем, что выбор «правильного» партнера по управлению капиталом — это очень индивидуальное решение, которое может предоставить вам и вашей семье финансовый мир и безопасность. Не существует компании, которая идеально подходит для всех, поэтому мы в DN | Capital Advisors предлагаем Вам самим выбрать финансового советника из нашего основного капитала — опытных и квалифицированных специалистов. Поскольку выбор «правильного» советника окажет значительное влияние на вас и вашу семью на долгие годы, мы бы хотели обратить внимание на наш основной критерий формирования команды — мы выбираем людей, конгруэтных с ценностями и принципами компании. Мы приветствуем Вас, чтобы понять и принять наш подход.
            </h3>
          </div>
        </div>
      </div>
    </div>
  <div class="container c">
    <div class="row">
      <div class="col-xs">
        <h1>Наша Команда</h1>
      </div>
    </div>
    <div class="row" style="margin-top: 20px;">
      <div class="col-xs-12 col-sm-6 col-md-3"  v-for="member in 4" :key="member.id">
        <div class="member">
						<div class="member-photo"></div>
						<p class="name">Marc Zuckerberg</p>
						<p class="job">Founder & CEO</p>
					</div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {};
</script>
<style scoped>
.main-header {
  padding-top: 140px;
  padding-bottom: 100px;
  background-color: #f9f9f9;
}
h1 {
  font-size: 34px;
}
.member {
  margin-bottom: 20px;
}
.member-photo {
  max-width: 191px;
  height: 191px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
}
p {
  font-size: 15px;
  margin: 0;
  line-height: 19px;
}
.name {
  margin-top: 22px;
}
.job {
  color: #ef741c;
}
.c {
  padding-top: 70px;
  padding-bottom: 70px;
}
@media (max-width: 40em) {
  .member {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .member-photo {
    width: 100%;
  }
}
@media (min-width: 40em) and (max-width: 50em) {
  .member {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .member-photo {
    width: 100%;
  }
}
</style>
