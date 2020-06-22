<template>
  <div class="Tutorial">
    <div>
      <v-row>
        <v-col>
          <h4 class="tutorial-txt">Tutorial</h4>
        </v-col>
        <v-col>
          <v-icon class="next">mdi-arrow-right</v-icon>
        </v-col>
      </v-row>
    </div>

      <div>
      <v-row>
        <v-col>
          <v-img :src="require('../assets/Bitmap.png')" class="ghidup-1" />
          <p class="textg-1">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
        </v-col>
        <v-col>
          <v-img :src="require('../assets/Bitmap.png')" class="ghidup-2" />
          <p class="textg-2">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
        </v-col>
      </v-row>
    </div>
      <news/>
      <news style="margin-top:-150px"/>
  </div>
</template>

<script>
import news from './news.vue'

export default {
components: {
  news
}
}
</script>

<style scoped>
@media only screen and (max-width: 800px) {
.tutorial-txt {
  position: absolute;
  position: absolute;
width: 60px;
height: 26px;
left: 25px;
  font-family: AvenirNext;
  font-size: 22px;
  line-height: 120%;
  color: #f1055a;
}

.next {
  margin-left: 100px;
}

.ghidup-1 {
  position: absolute;
  width: 152px;
  height: 110px;
  border-radius: 10px;
  margin-left: 25px;
}

.ghidup-2 {
  position: absolute;
  width: 153px;
  height: 110px;
  left: 200px;
  border-radius: 10px;
}

.textg-1 {
  position: absolute;
  width: 149px;
  height: 43px;
  left: 20px;
  margin-left: 10px;
  font-family: AvenirNext;
  font-size: 13px;
  line-height: 120%;
  color: #353535;
  margin-top: 120px;
}

.textg-2 {
  position: absolute;
  width: 150px;
  height: 43px;
  left: 205px;
  font-family: AvenirNext;
  font-size: 13px;
  line-height: 120%;
  color: #353535;
  margin-top: 120px;
}
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  .ghidup-1{
    width: 140px;
    margin-left: 20px;
  }
  .ghidup-2{
    width: 140px;
    margin-left: -30px;
  }

  .textg-2{
    margin-left: -30px;
  }
}

</style>