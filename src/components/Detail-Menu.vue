<template>
  <div class="detailmenu">
    <NavbarHome/>

      <div class="bit-new-photocard">
      <div class="foto-1">
        <v-img :src="require('../assets/Rectangle-1.png')" style="margin-left:20px; width:200px"></v-img>
        <p class="text-1">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
      </div>

      <div class="foto-2">
        <v-img :src="require('../assets/foto-2.png')" style="margin-left:20px; width:200px"></v-img>
        <p class="text-2">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
      </div>

      <div class="foto-3">
        <v-img :src="require('../assets/Rectangle-1.png')" style="margin-left:20px; width:200px"></v-img>
        <p class="text-3">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
      </div>

       <div class="foto-4">
        <v-img :src="require('../assets/Rectangle-1.png')" style="margin-left:20px; width:200px"></v-img>
        <p class="text-4">Girls, Ini 5 Manfaat Bagi Kecantikan ...</p>
      </div>
    </div>

     <div class="article-home">
      <div class="article-1">
        <router-link to="/news">
        <v-img
          :src="require('../assets/foto-4.jpg')"
          style="border-radius:20px; margin-top:20px; width:300px; margin-left:10px"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
          <v-row>
            <v-col style="margin-top:-10px">
              <v-icon class="clock" color="white">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam">5 menit lalu</p>
            </v-col>
          </v-row>

          <p class="txt">Ini Alasan Mengapa Jangan Membasuh Wajah di Bawah Shower</p>
          <v-divider class="border-article" style="border-color: #E83967;"></v-divider>
        </v-img>
        </router-link>
      </div>

      <div class="article-2">
        <v-img
          :src="require('../assets/foto-4.jpg')"
          style="border-radius:20px; margin-top:20px; width:300px; margin-left:20px"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
          <v-row>
            <v-col style="margin-top:-10px">
              <v-icon class="clock" color="white">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam">5 menit lalu</p>
            </v-col>
          </v-row>

          <p class="txt">Ini Alasan Mengapa Jangan Membasuh Wajah di Bawah Shower</p>
          <v-divider class="border-article" style="border-color: #E83967;"></v-divider>
        </v-img>
      </div>
    </div>

    <News style="margin-top:-140px"/>

    <div>
      <v-row>
        <v-col>
          <h4 class="beauty-txt">Beauty</h4>
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

    <news/>
    <news style="margin-top:-160px"/>

    <br>
    <br>
    <br>
    

    <Footer/>
  </div>
</template>

<script>
import NavbarHome from '../layouts/navbar-home.vue'
import News from '../views/news.vue'
import Footer from '../layouts/footer-home.vue'
export default {
components: {
  NavbarHome,
  News,
  Footer
}
}
</script>

<style scoped>
@media only screen and (max-width: 800px) {
    .bit-new-photocard {
    align-items: center;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 20px;
    margin-top: 20px;
    margin-left: -20px;
    /* width: 600px; */
  }

  .text-1,
  .text-2,
  .text-3,
  .text-4{
    font-family: AvenirNext;
    font-size: 15px;
    line-height: 120%;
    color: #353535;
    width: 200px;
    margin-left: 40px;
    margin-top: 10px;
  }

  .article-home {
    align-items: center;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 20px;
    margin-top: -10px;
    margin-left: -20px;
    /* width: 600px; */
  }

  .jam {
    position: absolute;
    width: 102px;
    height: 9px;
    left: 220px;
    top: 10px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 14px;
    color: #ffffff;
  }

  .clock {
    position: absolute;
    width: 9.18px;
    height: 9.2px;
    left: 190px;
    margin-left: 10px;
    border-radius: 10px;
    margin-top: 20px;
  }

  .txt {
    position: absolute;
    width: 245.69px;
    height: 57.96px;
    left: 35px;
    top: 95px;
    font-family: AvenirNext;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;
  }

  .border-article {
    position: absolute;
    width: 73.48px;
    height: 1.38px;
    left: 130.94px;
    border: 3px solid #e83967;
    border-radius: 10px;
    margin-top: 170px;
    margin-left: -10px;
  }
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
  .beauty-txt{
    position: absolute;
width: 74px;
height: 26px;
left: 16px;
font-family: AvenirNext;
font-size: 22px;
line-height: 120%;
/* or 26px */
color: #F1055A;

  }

  .beauty {
      margin-top: 10px;
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