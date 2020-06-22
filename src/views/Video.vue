<template>
  <div class="video">
       <div>
      <v-row>
        <v-col>
          <h4 class="video-txt">Video</h4>
        </v-col>
        <v-col>
          <v-icon class="next">mdi-arrow-right</v-icon>
        </v-col>
      </v-row>
    </div>

     <div>
      <v-img
        :src="require('../assets/Rectangle-1.png')"
        class="video-img"
      ></v-img>
      <p class="txt-v">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
      <v-row>
        <v-col>
          <v-icon class="jam" color="grey">mdi-clock</v-icon>
        </v-col>
        <v-col>
          <p class="menit">5 Menit lalu</p>
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
              <v-icon color="grey" class="clock">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam-1">5 menit lalu</p>
            </v-col>
          </v-row>
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
              <v-icon color="grey" class="clock">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam-1">5 menit lalu</p>
            </v-col>
          </v-row>
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
              <v-icon color="grey" class="clock">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam-1">5 menit lalu</p>
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

.video-txt {
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

.video-img{
  margin-left:30px; width:300px; margin-top:10px
}

.txt-v {
  position: absolute;
  width: 314.66px;
  height: 78.37px;
  left: 55px;
  margin-top: 10px;
  font-family: AvenirNext;
  font-size: 15px;
  line-height: 120%;
  color: #353535;
}

.jam {
  margin-top: 20px;
  margin-left: 50px;
}

.menit {
  position: absolute;
  width: 102px;
  height: 8.85px;
  left: 76px;
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: #ababab;
  margin-top: 25px;
}

 .foto-k1 {
    position: absolute;
    border-radius: 10px;
    width: 170px;
    margin-top: 150px;
    margin-left: 20px;
  }

  .makeup {
    position: absolute;
    font-family: AvenirNext;
    font-size: 20px;
    margin-left: 5px;
    line-height: 22px;
    color: #474747;
    margin-top: 160px;
  }

  .jam-1 {
    position: absolute;
    width: 102px;
    height: 8.85px;
    margin-top: 245px;
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
  }

  

  .makeup-2,
  .makeup-3,
  .makeup-4{
    position: absolute;
    font-family: AvenirNext;
    font-size: 20px;
    line-height: 22px;
    color: #474747;
    margin-top: 15px;
  }


    .jam2,
    .jam3,
    .jam4{
    position: absolute;
    width: 102px;
    height: 8.85px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 14px;
    color: #ababab;
    margin-top: 95px;
    margin-left: -65px;
  }

  .kecantikan1 {
    margin-top: -130px;
  }

  @media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
    .makeup,
    .makeup-2,
    .makeup-3,
    .makeup-4{
      margin-left: 30px;
    }

    .clock{
      margin-left: 30px;
    }

    .jam-1,
    .jam2,
    .jam3,
    .jam4{
      margin-left: -25px;
    }

    .video-img{
  width: 270px;
  margin-left: 30px;
}
  }
</style>