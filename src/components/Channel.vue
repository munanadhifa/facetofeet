<template>
  <div class="channel">
    <NavbarHome />

    <h1 class="txt-channel">Channel</h1>

    <div class="menu-channel">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:20px; margin-top:40px"></v-avatar>
          <v-img :src="require('../assets/icon2.png')" class="icon2"></v-img>
        </v-col>

        <v-col>
          <p class="beauty">Beauty</p>
        </v-col>
      </v-row>
    </div>

    <div class="menu-channel">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:20px;">
          </v-avatar>
          <v-img :src="require('../assets/icon2.png')" class="icon2"></v-img>
        </v-col>

        <v-col>
          <p class="kwave">K-wave</p>
        </v-col>
      </v-row>
    </div>

    <div class="menu-channel">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:20px;">
          </v-avatar>
          <v-img :src="require('../assets/icon2.png')" class="icon2"></v-img>
        </v-col>

        <v-col>
          <p class="review">Review</p>
        </v-col>
      </v-row>
    </div>

    <div class="menu-channel">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:20px;">
          </v-avatar>
          <v-img :src="require('../assets/icon2.png')" class="icon2"></v-img>
        </v-col>

        <v-col>
          <p class="fashion">Fashion</p>
        </v-col>
      </v-row>
    </div>

    <div class="menu-channel">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:20px;">
          </v-avatar>
          <v-img :src="require('../assets/icon2.png')" class="icon2"></v-img>
        </v-col>

        <v-col>
          <p class="hijab">Hijab</p>
        </v-col>
      </v-row>
    </div>

    <div class="menu-channel">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:20px">
          </v-avatar>
          <v-img :src="require('../assets/icon2.png')" class="icon2"></v-img>
        </v-col>

        <v-col>
          <p class="lifestyle">Lifestyle</p>
        </v-col>
      </v-row>
    </div>

    <div class="menu-channel">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:20px;">
          </v-avatar>
          <v-img :src="require('../assets/icon2.png')" class="icon2"></v-img>
        </v-col>

        <v-col>
          <p class="event">Event</p>
        </v-col>
      </v-row>
    </div>

    <div class="menu-channel">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:20px;">
          </v-avatar>
          <v-img :src="require('../assets/icon2.png')" class="icon2"></v-img>
        </v-col>

        <v-col>
          <p class="video">Video</p>
        </v-col>
      </v-row>
    </div>

    <FooterHome style="margin-top:210px" />
  </div>
</template>

<script>
import NavbarHome from "../layouts/navbar-home";
import FooterHome from "../layouts/footer-home";

export default {
  components: {
    NavbarHome,
    FooterHome
  }
};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .icon2 {
    width: 20px;
    height: 20px;
    margin-left: 35px;
    margin-top: -35px;
  }
  .txt-channel {
    position: absolute;
    width: 58px;
    height: 18px;
    left: 19px;
    top: 67px;
    font-family: AvenirNext;
    font-size: 15px;
    line-height: 120%;
    color: #474747;
  }

  .beauty {
    position: absolute;
    width: 288px;
    height: 304px;
    left: 80px;
    top: 110px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .kwave {
    position: absolute;
    width: 288px;
    height: 304px;
    left: 80px;
    top: 175px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .review {
    position: absolute;
    width: 288px;
    height: 304px;
    left: 80px;
    top: 235px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .fashion {
    position: absolute;
    width: 288px;
    height: 304px;
    left: 80px;
    top: 290px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .hijab {
    position: absolute;
    width: 288px;
    height: 304px;
    left: 80px;
    top: 350px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .lifestyle {
    position: absolute;
    width: 288px;
    height: 304px;
    left: 80px;
    top: 409px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .event {
    position: absolute;
    width: 288px;
    height: 304px;
    left: 80px;
    top: 470px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .video {
    position: absolute;
    width: 288px;
    height: 304px;
    left: 80px;
    top: 530px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
}
</style>