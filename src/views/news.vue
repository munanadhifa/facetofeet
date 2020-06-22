<template>
  <div class="news">
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

    <div class="kecantikan2">
      <v-row>
        <v-col>
          <v-img :src="require('../assets/Bitmap2.png')" class="foto-k2" />
        </v-col>
        <v-col>
          <p class="makeup-2">Tips Makeup</p>
          <v-row>
            <v-col style="margin-top:90px">
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
            <v-col style="margin-top:90px">
              <v-icon color="grey" class="clock">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam3">5 menit lalu</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="kecantikan4">
      <v-row>
        <v-col>
          <v-img :src="require('../assets/Bitmap2.png')" class="foto-k4" />
        </v-col>
        <v-col>
          <p class="makeup-4">Tips Makeup</p>
          <v-row>
            <v-col style="margin-top: 90px;">
              <v-icon color="grey" class="clock">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam4">5 menit lalu</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
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
.foto-k4 {
  position: absolute;
  border-radius: 10px;
  width: 170px;
  margin-left: 20px;
}

.makeup-2,
.makeup-3,
.makeup-4 {
  position: absolute;
  font-family: AvenirNext;
  font-size: 20px;
  line-height: 22px;
  color: #474747;
  margin-top: 15px;
}

.jam2,
.jam3,
.jam4 {
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
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  .makeup,
  .makeup-2,
  .makeup-3,
  .makeup-4 {
    margin-left: 20px;
  }
  .jam-1,
  .jam2,
  .jam3,
  .jam4 {
    margin-left: -40px;
  }
  .clock {
    margin-left: 20px;
  }

  .foto-k1,
  .foto-k2,
  .foto-k3,
  .foto-k4{
    width: 160px;
  }
}
</style>