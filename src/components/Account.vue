<template>
  <div class="account">
    <div class="background-pink">
      <v-img
        alt="Vuetify Logo"
        class="ftf-putih"
        contain
        :src="require('../assets/logoftf-putih.png')"
        transition="scale-transition"
      />

      <h1 class="hello">Hello User</h1>

      <v-avatar color="#D4D4D4" size="130" class="acc">
        <v-icon>mdi-account</v-icon>
      </v-avatar>
    </div>

    <div class="text-center">
      <v-btn rounded dark class="btn-login" style="background: #fe5c96;" to="/login">Login</v-btn>
    </div>

    <div class="menu">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-top:320px; margin-left:50px">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </v-col>
        <v-col>
          <p class="about">About Us</p>
        </v-col>
      </v-row>
    </div>

    <div class="menu">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:50px; margin-top:-10px">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </v-col>

        <v-col>
          <p class="Privacy">Privacy Policy</p>
        </v-col>
      </v-row>
    </div>

    <div class="menu">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:50px; margin-top:-10px">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </v-col>

        <v-col>
          <p class="terms">Terms & Conditions</p>
        </v-col>
      </v-row>
    </div>

    <div class="menu">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:50px; margin-top:-10px">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </v-col>

        <v-col>
          <p class="subs">Subscribe our newsletter</p>
        </v-col>
      </v-row>
    </div>

    <div class="menu">
      <v-row>
        <v-col>
          <v-avatar color="#D4D4D4" size="50" style="margin-left:50px; margin-top:-10px">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </v-col>

        <v-col>
          <p class="contact">Contact Us</p>
        </v-col>
      </v-row>
    </div>

    <p class="find">Find us on</p>

    <div class="social">
      <v-row>
        <v-col>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('../assets/twit.png')"
            transition="scale-transition"
            style="position: absolute;width: 29px; height: 29px; left: 90px; top: 30px;"
          />
        </v-col>
        <v-col>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('../assets/fb.png')"
            transition="scale-transition"
            style="position: absolute;width: 29px; height: 29px; left: 50px; top: 30px;"
          />
        </v-col>
        <v-col>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('../assets/youtube.png')"
            transition="scale-transition"
            style="position: absolute;width: 29px; height: 29px; left: 10px; top: 30px;"
          />
        </v-col>
        <v-col>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('../assets/google.png')"
            transition="scale-transition"
            style="position: absolute;width: 29px; height: 29px; left: -30px; top: 30px;"
          />
        </v-col>
        <v-col>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('../assets/ig.png')"
            transition="scale-transition"
            style="position: absolute;width: 29px; height: 29px; left: -70px; top: 30px;"
          />
        </v-col>
      </v-row>
    </div>
    <FooterHome style="margin-top:70px" />
  </div>
</template>

<script>
import FooterHome from "../layouts/footer-home";

export default {
  components: {
    FooterHome
  }
};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  body {
    overflow-x: hidden;
  }

  .background-pink {
    position: absolute;
    width: 100%;
    height: 176px;
    left: 0px;
    top: 0px;
    background: #fe5c96;
  }

  .acc{
    margin-top:120px; 
    margin-left:120px
  }

  .ftf-putih {
    position: absolute;
    right: 43%;
    top: -30%;
    bottom: 20%;
  }

  .hello {
    position: absolute;
    left: 37%;
    right: 29.27%;
    top: 50%;
    bottom: 86.25%;
    font-family: AvenirNext;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.015em;
    color: #ffffff;
  }

  .btn-login {
    position: absolute;
    background: #fe5c96;
    border: 2px solid #fe5c96;
    box-sizing: border-box;
    border-radius: 100px;
    margin-top: 280px;
    margin-left: -50px;
    width: 100px;
  }

  .about {
    position: absolute;
    width: 288px;
    height: 190px;
    left: -80px;
    top: 340px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .Privacy {
    position: absolute;
    width: 288px;
    height: 190px;
    left: -80px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .terms {
    position: absolute;
    width: 288px;
    height: 190px;
    left: -80px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .subs {
    position: absolute;
    width: 288px;
    height: 190px;
    left: -80px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .contact {
    position: absolute;
    width: 288px;
    height: 190px;
    left: -80px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 250%;
    color: #474747;
  }

  .find {
    position: absolute;
    width: 62px;
    height: 18px;
    left: 150px;
    top: 650px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 15px;
    color: #ababab;
  }
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  body {
    overflow-x: hidden;
  }

  .btn-login {
    left: 160px;
  }

  .background-pink {
    position: absolute;
    width: 128%;
    height: 176px;
    left: 0px;
    top: 0px;
    background: #fe5c96;
  }

  .ftf-putih {
    position: absolute;
    right: 55%;
    top: -30%;
    bottom: 20%;
  }

  .hello{
    left: 27%;
  }

  .acc{
    margin-left: 95px;
  }

}
</style>