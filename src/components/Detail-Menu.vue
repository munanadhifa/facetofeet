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


}
</style>