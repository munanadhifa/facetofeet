<template>
  <div class="beauty">
    <div>
      <v-row>
        <v-col>
          <h4 class="kecantikan">Kecantikan</h4>
        </v-col>
        <v-col>
          <v-icon class="next">mdi-arrow-right</v-icon>
        </v-col>
      </v-row>
    </div>

    <div>
      <v-row style="margin-top: 20px;">
        <v-col>
          <v-img :src="require('../assets/Bitmap.png')" class="beauty-1" />
          <p class="textb-1">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
        </v-col>
        <v-col>
          <v-img :src="require('../assets/Bitmap.png')" class="beauty-2" />
          <p class="textb-2">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
        </v-col>
        <v-row>
          <v-col>
            <v-icon class="jam" color="grey">mdi-clock</v-icon>
          </v-col>
          <v-col>
            <p class="menit">5 Menit lalu</p>
          </v-col>
        </v-row>
      </v-row>
    </div>

    <div>
      <v-row>
        <v-col>
          <v-img :src="require('../assets/Bitmap.png')" class="beauty-3" />
          <p class="textb-3">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
        </v-col>
        <v-col>
          <v-img :src="require('../assets/Bitmap.png')" class="beauty-4" />
          <p class="textb-4">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
        </v-col>
      </v-row>
    </div>

    <news style="margin-top:170px"/>
  </div>



</template>

<script>
import news from './news.vue'
export default {
  components: {
    news
  }
};
 </script>

<style scoped>
@media only screen and (max-width: 800px) {
  .kecantikan {
    position: absolute;
    width: 113px;
    height: 26px;
    left: 30px;
    font-family: AvenirNext;
    font-size: 22px;
    line-height: 120%;
    color: #f1055a;
  }

  .next {
    position: absolute;
    margin-left: 100px;
  }

  .beauty {
      margin-top: 10px;
  }

  .beauty-1 {
    position: absolute;
    width: 152px;
    left: 30px;
    border-radius: 10px;
  }

  .beauty-2 {
    position: absolute;
    width: 153px;
    left: 80px;
    border-radius: 10px;
  }

  .textb-1 {
    position: absolute;
    width: 149px;
    height: 43px;
    margin-left: 20px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    color: #353535;
    margin-top: 115px;
  }

  .textb-2 {
    position: absolute;
    width: 149px;
    height: 43px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    color: #353535;
    margin-top: 115px;
    left: 80px;
  }

  .jam {
    position: absolute;
    border-radius: 10px;
    margin-top: 150px;
    /* margin-left: -200px; */
    left: -220px;
  }

  .menit {
    position: absolute;
    width: 102px;
    height: 8.85px;
    left: 45px;
    margin-top: 155px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    color: #ababab;
  }

  .beauty-3 {
    position: absolute;
    width: 152px;
    left: 17px;
    border-radius: 10px;
    margin-top: 170px;
  }

  .beauty-4 {
    position: absolute;
    width: 153px;
    left: 10px;
    border-radius: 10px;
    margin-top: 170px;
  }

  .textb-3 {
    position: absolute;
    width: 149px;
    height: 43px;
    left: 20px;
    margin-top: 285px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    color: #353535;
  }

  .textb-4 {
    position: absolute;
    width: 150px;
    height: 43px;
    left: 190px;
    margin-top: 285px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    color: #353535;
  }



  /* .kecantikan1 {
    margin-top: 40px;
    margin-left: 150px;
  }

  .kecantikan2,
  .kecantikan3,
  .kecantikan4 {
    margin-top: 10px;
    margin-left: 150px;
  } */
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  .beauty-1,
  .beauty-3{
    width: 140px;
  }
  .beauty-2,
  .beauty-4{
    width: 140px;
    margin-left: -15px;
  }

  .textb-2,
  .textb-4{
    margin-left: -15px;
  }
}
</style>