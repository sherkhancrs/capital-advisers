<template>
  <div>
    <div class="main-h">
      <div class="container">
        <div class="row middle-xs">
          <div class="col-xs-12">
            <h1 class="bolded" >Услуги</h1>
            <h3 class="thined">
              Мы признаем, что выбор «правильного» партнера по управлению капиталом — это очень индивидуальное решение, которое может предоставить вам и вашей семье финансовый мир и безопасность.
            </h3>
          </div>
        </div>
      </div>
    </div>
  <f-service></f-service>
  </div>
</template>
<script>
import FService from "~/components/Service";

export default {
  components: {
    FService
  }  
}
</script>
<style>
.main-h {
  background-color: #595959;
  color: white;
  padding-top: 140px;
  padding-bottom: 100px;
}
</style>
