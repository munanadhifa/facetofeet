<template>
  <div class="event">
    <div>
      <v-row>
        <v-col>
          <h4 class="event-txt">Event</h4>
        </v-col>
        <v-col>
          <v-icon class="next">mdi-arrow-right</v-icon>
        </v-col>
      </v-row>
    </div>

    <div>
      <v-img
        :src="require('../assets/Rectangle-1.png')"
        class="event-img"
        
      ></v-img>
      <p class="txt-e">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
      <v-row>
        <v-col>
          <v-icon class="jam" color="grey">mdi-clock</v-icon>
        </v-col>
        <v-col>
          <p class="menit">5 Menit lalu</p>
        </v-col>
      </v-row>
    </div>

    <news style="margin-top:-130px" />
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
  .event-img{
    width: 321px;
    height: 200.47px;
    border-radius: 10px;
    left: 25px;
  }
.event-txt {
  position: absolute;
  width: 58px;
  height: 30px;
  left: 25px;
  font-family: AvenirNext;
  font-size: 22px;
  line-height: 120%;
  color: #f1055a;
}

.next {
  margin-left: 100px;
}

.txt-e {
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
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
.event-img{
  width: 321px;
    height: 200.47px;
    border-radius: 10px;
    left: 18px;
}
}
</style>