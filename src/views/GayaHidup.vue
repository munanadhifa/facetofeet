<template>
  <div class="lifestyle">
    <div>
      <v-row>
        <v-col>
          <h4 class="gayahidup">Gaya Hidup</h4>
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
    <news class="news-txt" />
  </div>
</template>

<script>
import news from "./news.vue";
export default {
  components: {
    news
  }
};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .gayahidup {
    position: absolute;
    width: 121px;
    height: 26px;
    left: 26px;
    top: 2240px;
    font-family: AvenirNext;
    font-size: 22px;
    line-height: 120%;
    /* or 26px */
    color: #f1055a;
  }

  .next {
    margin-top: 5px;
    margin-left: 100px;
  }

  .ghidup-1 {
    position: absolute;
    width: 152px;
    height: 110px;
    top: 2290px;
    border-radius: 10px;
    margin-left: 25px;
  }

  .ghidup-2 {
    position: absolute;
    width: 153px;
    height: 110px;
    left: 200px;
    top: 2290px;
    border-radius: 10px;
  }

  .textg-1 {
    position: absolute;
    width: 149px;
    height: 43px;
    left: 20px;
    top: 2410px;
    margin-left: 10px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    color: #353535;
  }

  .textg-2 {
    position: absolute;
    width: 150px;
    height: 43px;
    left: 205px;
    top: 2410px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    color: #353535;
  }

  .makeup {
    position: absolute;
    left: 45.98%;
    right: 2.78%;
    top: 33.08%;
    bottom: 65.95%;

    font-family: AvenirNext;
    font-size: 16px;
    line-height: 22px;
    /* or 137% */

    color: #474747;
  }

  .jam-1 {
    position: absolute;
    width: 102px;
    height: 8.85px;
    margin-top: 85px;
    margin-left: -40px;
    /* top: 4px; */
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 14px;
    color: #ababab;
  }
  .news-txt{
    margin-top: -20px;
  }
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  .gayahidup{
    margin-top: -70px;
  }
  .next{
    margin-top: -10px;
  }
  .ghidup-1,
  .ghidup-2{
    top: 2220px;
  }
  .textg-1,
  .textg-2{
    top: 2340px;
  }
  .news-txt{
    margin-top: -10px;
  }

  .ghidup-1{
    width:140px;
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