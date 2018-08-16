<template>
  <div>
    <div class="main-header">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-12">
            <h1 class="bolded">ВАШ ПЕРСОНАЛЬНЫЙ <br>ИНВЕСТИЦИОННЫЙ СОВЕТНИК</h1>
            <h4 class="thined">
              Мы даем объективные, беспристрастные советы, <br>
              которые помогают нашим клиентам принимать правильные решения
            </h4>
            <button class="button-reverse">ОКРЫТЬ СЧЕТ</button>
            <br>
          </div>
        </div>
      </div>
    </div>
    <div class="about-us">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>О нас</h1>
            <h3 class="thined">Мы признаем, что выбор «правильного» партнера по управлению капиталом — это очень индивидуальное решение, которое может предоставить вам и вашей семье финансовый мир и безопасность. Не существует компании, которая идеально подходит для всех, поэтому мы в DN | Capital Advisors предлагаем Вам самим выбрать финансового советника из нашего основного капитала — опытных и квалифицированных специалистов. Поскольку выбор «правильного» советника окажет значительное влияние на вас и вашу семью на долгие годы, мы бы хотели обратить внимание на наш основной критерий формирования команды — мы выбираем людей, конгруэтных с ценностями и принципами компании. Мы приветствуем Вас, чтобы понять и принять наш подход.
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>


<script>
export default {
  layout: 'v2'
}
</script>

<style scoped lang='less'>
.main-header{
  background-image: url('~/assets/images/bg2.png');
  background-position: center center;
  background-size: cover;
  .container{
    .row{
      height: 100vh;
    }
  }
}
.about-us{
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>

