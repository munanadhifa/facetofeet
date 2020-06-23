<template>
  <v-container>

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

    <div class="news-1">
      <v-row>
        <v-col>
          <router-link to="/news-slider">
          <v-img
            :src="require('../assets/Bitmap.png')"
            style="border-radius:20px; margin-top:20px; margin-left:20px"
          />
          </router-link>
        </v-col>
        <v-col>
          <p class="tips">Tips Makeup</p>
          <v-row>
            <v-col style="margin-top:100px; margin-left:10px">
              <v-icon color="grey">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam-1">5 menit lalu</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="news-1">
      <v-row>
        <v-col>
          <v-img
            :src="require('../assets/Bitmap.png')"
            style="border-radius:20px; margin-top:20px; margin-left:20px"
          />
        </v-col>
        <v-col>
          <p class="tips">Tips Makeup</p>
          <v-row>
            <v-col style="margin-top:100px; margin-left:10px">
              <v-icon color="grey">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam-1">5 menit lalu</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div class="news-1">
      <v-row>
        <v-col>
          <v-img
            :src="require('../assets/Bitmap.png')"
            style="border-radius:20px; margin-top:20px; margin-left:20px"
          />
        </v-col>
        <v-col>
          <p class="tips">Tips Makeup</p>
          <v-row>
            <v-col style="margin-top:100px; margin-left:10px">
              <v-icon color="grey">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam-1">5 menit lalu</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div class="news-1">
      <v-row>
        <v-col>
          <v-img
            :src="require('../assets/Bitmap.png')"
            style="border-radius:20px; margin-top:20px; margin-left:20px"
          />
        </v-col>
        <v-col>
          <p class="tips">Tips Makeup</p>
          <v-row>
            <v-col style="margin-top:100px; margin-left:10px">
              <v-icon color="grey">mdi-clock</v-icon>
            </v-col>
            <v-col>
              <p class="jam-1">5 menit lalu</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <Kecantikan />
    <GayaHidup />
    <Event />
    <Video />
    <Fashion />
    <Tutorial />

    <div class="text-center">
      <v-btn rounded class="load" dark>Load More</v-btn>
    </div>

    <FooterHome style="margin-top:30px"/>

  </v-container>
</template>

<script>
import NavbarHome from '../layouts/navbar-home.vue'
import Kecantikan from "../views/Kecantikan.vue"
import GayaHidup from '../views/GayaHidup.vue'
import Event from "../views/Event.vue"
import Video from "../views/Video.vue";
import Fashion from "../views/Fashion.vue";
import Tutorial from "../views/Tutorial.vue";
import FooterHome from "../layouts/footer-home.vue"

export default {
  data() {
    return {
      active: ""
    };
  },
  methods: {
    makeActive: function(item) {
      this.active = item;
    }
  },
  components: {
    NavbarHome,
    Kecantikan,
    GayaHidup,
    Event,
    Video,
    Fashion,
    Tutorial,
    FooterHome
  }
};
</script>

<style scoped>

@media only screen and (max-width: 800px) {
  .load {
    background: linear-gradient(88.11deg, #ff86b1 13.76%, #ffb9d2 92.76%);
    border-radius: 100px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font: 15px/1.3 "Open Sans", sans-serif;
    color: #5e5b64;
    text-align: center;
  }

  a,
  a:visited {
    outline: none;
    color: #389dc1;
  }

  a:hover {
    text-decoration: none;
  }

  section,
  footer,
  header,
  aside,
  nav {
    display: block;
  }

  nav a:first-child {
    border-radius: 2px 0 0 2px;
  }

  nav a:last-child {
    border-radius: 0 2px 2px 0;
  }

  nav.home .home,
  nav.projects .projects,
  nav.services .services,
  nav.contact .contact {
    background-color: #e35885;
    /* border-radius: 25px;
    height: 30px;
    width: 70px; */
  }

  p {
    font-size: 22px;
    font-weight: bold;
    color: #7d9098;
  }

  p b {
    color: #ffffff;
    display: inline-block;
    padding: 5px 10px;
    background-color: #c4d7e0;
    border-radius: 2px;
    text-transform: uppercase;
    font-size: 18px;
  }
  .resource {
    margin: 20px 0;
  }

  .menu {
    align-items: center;
    display: inline-blocks;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 20px;
  }

  .home {
    position: absolute;
    left: 18px;
    top: 70px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
  }

  .shop {
    position: absolute;
    left: 80px;
    top: 70px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
  }

  .kwave {
    position: absolute;
    left: 220px;
    top: 70px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
  }

  .review {
    position: absolute;
    left: 280px;
    top: 70px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
  }

  .fashion {
    position: absolute;
    left: 380px;
    top: 70px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
  }

  .class-atas {
    overflow: auto;
    white-space: nowrap;
  }

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

  .text-1,
  .text-2,
  .text-3 {
    font-family: AvenirNext;
    font-size: 15px;
    line-height: 120%;
    color: #353535;
    width: 200px;
    margin-left: 40px;
    margin-top: 10px;
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

  .tips {
    position: absolute;
    font-family: AvenirNext;
    font-size: 20px;
    line-height: 22px;
    color: #474747;
    margin-top: 40px;
    margin-left: 10px;
  }

  .jam-1 {
    position: absolute;
    width: 102px;
    height: 8.85px;
    margin-top: 105px;
    margin-left: -60px;
    /* top: 4px; */
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 14px;
    color: #ababab;
  }

  .news-1 {
    margin-top: 20px;
  }
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2){
  .jam-1{
    margin-left: -40px;
  }
}
</style>
