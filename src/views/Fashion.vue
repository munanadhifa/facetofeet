<template>
  <div class="Fashion">
    <div>
      <v-row>
        <v-col>
          <h4 class="fashion-txt">Fashion</h4>
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

     <div class="kecantikan1">
      <v-row>
        <v-col>
          <v-img :src="require('../assets/Bitmap2.png')" class="foto-k1" />
        </v-col>
        <v-col>
          <p class="makeup">Tips Makeup</p>
          <v-row>
            <v-col style="margin-top:240px;">
              <v-icon color="grey" style="top: 170px;" class="clock">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam-1">5 menit lalu</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="kecantikan2">
      <v-row>
        <v-col>
          <v-img :src="require('../assets/Bitmap2.png')" class="foto-k2" />
        </v-col>
        <v-col>
          <p class="makeup-2">Tips Makeup</p>
          <v-row>
            <v-col style="margin-top:255px">
              <v-icon color="grey" class="clock">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam2">5 menit lalu</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="kecantikan3">
      <v-row>
        <v-col>
          <v-img :src="require('../assets/Bitmap2.png')" class="foto-k3" />
        </v-col>
        <v-col>
          <p class="makeup-3">Tips Makeup</p>
          <v-row>
            <v-col style="margin-top:255px">
              <v-icon color="grey" class="clock">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam3">5 menit lalu</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (max-width: 800px) {
.fashion-txt {
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

.beauty-1 {
    position: absolute;
    width: 152px;
    height: 110px;
    left: 17px;
    border-radius: 10px;
  }

  .beauty-2 {
    position: absolute;
    width: 153px;
    height: 110px;
    left: 187px;

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
    left: 190px;
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
    height: 110px;
    left: 17px;
    border-radius: 10px;
    margin-top: 170px;
  }

  .beauty-4 {
    position: absolute;
    width: 153px;
    height: 110px;
    left: 187px;
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

   .foto-k1 {
    position: absolute;
    border-radius: 10px;
    width: 170px;
    margin-top: 320px;
    margin-left: 20px;
  }

  .makeup {
    position: absolute;
    font-family: AvenirNext;
    font-size: 20px;
    margin-left: 5px;
    line-height: 22px;
    color: #474747;
    margin-top: 320px;
  }

  .jam-1 {
    position: absolute;
    width: 102px;
    height: 8.85px;
    margin-top: 415px;
    margin-left: -70px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 14px;
    color: #ababab;
  }

  .foto-k2,
  .foto-k3,
  .foto-k4{
    position: absolute;
    border-radius: 10px;
    width: 170px;
    margin-left: 20px;
    margin-top: 170px;
  }

  

  .makeup-2,
  .makeup-3{
    position: absolute;
    font-family: AvenirNext;
    font-size: 20px;
    line-height: 22px;
    color: #474747;
    margin-top: 180px;
  }


    .jam2,
    .jam3{
    position: absolute;
    width: 102px;
    height: 8.85px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 14px;
    color: #ababab;
    margin-top: 263px;
    margin-left: -65px;
  }

  .kecantikan3 {
    margin-top: -160px;
  }
}

  @media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
    .makeup,
    .makeup-2,
    .makeup-3{
      margin-left: 20px;
    }

    .clock{
      margin-left: 20px;
    }

    .jam-1,
    .jam2,
    .jam3{
      margin-left: -40px;
    }

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
    
    .foto-k1,
  .foto-k2,
  .foto-k3,
  .foto-k4{
    width: 160px;
  }

  }

</style>