<template>
  <v-toolbar flat>
    <v-row>
      <v-col>
        <v-btn text class="next" to="/">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-img
          :src="require('../assets/logo-ftf.png')"
          style="position: absolute; margin-left:-80px;top: 20%; bottom: 20%; width:90px"
          transition="scale-transition"
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
        />
      </v-col>

      <v-col>
        <v-img
          :src="require('../assets/icon1.png')"
          @click="sheet = !sheet"
          style="position: absolute; right: 3.89%; top: 30%; bottom: 30%;"
        />
        <v-bottom-sheet v-model="sheet">
          <v-sheet class="text-center" height="200px">
            <v-row>
              <v-col>
                <p class="share">Share</p>
              </v-col>
              <v-col>
                <v-btn class="close" text color="black" @click="sheet = !sheet">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col style="margin-top:40px">
                <v-avatar color="#72DCFF" size="50"></v-avatar>
                <v-img :src="require('../assets/twit-putih.png')" class="img-chip1"></v-img>
                <p class="twit">Twitter</p>
              </v-col>
              <v-col style="margin-top:40px; margin-left:-50px">
                <v-avatar color="#00A3FF" size="50"></v-avatar>
                <v-img :src="require('../assets/fb-putih.png')" class="img-chip2"></v-img>
                <p class="fb">Facebook</p>
              </v-col>
              <v-col style="margin-top:40px; margin-left:-50px">
                <v-avatar color="#11DA00" size="50"></v-avatar>
                <v-img :src="require('../assets/wa-putih.png')" class="img-chip3"></v-img>
                <p class="wa">Whatsapp</p>
              </v-col>
              <v-col style="margin-top:40px; margin-left:-50px">
                <v-avatar color="#858585" size="50"></v-avatar>
                <v-img :src="require('../assets/comment.png')" class="img-chip4"></v-img>
                <p class="com">Comment</p>
              </v-col>
            </v-row>
          </v-sheet>
        </v-bottom-sheet>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    sheet: false
  })
};
</script>

<style>
@media only screen and (max-width: 800px) {
  .img-chip1 {
    width: 25px;
    height: 25px;
    margin-top: -38px;
    margin-left: 45px;
  }

  .img-chip2 {
    width: 25px;
    height: 25px;
    margin-top: -38px;
    margin-left: 44px;
  }

  .img-chip3 {
    width: 25px;
    height: 25px;
    margin-top: -39px;
    margin-left: 44px;
  }

  .img-chip4 {
    width: 25px;
    height: 25px;
    margin-top: -40px;
    margin-left: 43px;
  }

  .twit {
    position: absolute;
    width: 39px;
    height: 18px;
    left: 37px;
    top: 600px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    color: #474747;
  }

  .fb {
    position: absolute;
    width: 58px;
    height: 18px;
    left: 115px;
    top: 600px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    color: #474747;
  }

  .wa {
    top: 600px;
    position: absolute;
    width: 59px;
    height: 18px;
    left: 205px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    color: #474747;
  }

  .com {
    top: 602px;
    position: absolute;
    width: 58px;
    height: 18px;
    left: 290px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    color: #474747;
  }
  .next {
    margin-left: -20px;
  }

  .share {
    position: absolute;
    width: 41px;
    height: 22px;
    left: 160px;
    top: 490px;
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }

  .close {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 320px;
    top: 485px;
  }

  @media only screen and (device-width: 411px) and (device-height: 731px) {
    .share{
      margin-top: 60px;
      margin-left: 20px;
    }
    .close{
      margin-top: 60px;
    }
    .twit{
      margin-top: 65px;
      margin-left: 5px;
    }
    .img-chip1{
      margin-left: 50px;
    }
    .fb{
      margin-top: 65px;
      margin-left: 15px;
    }
    .img-chip2{
      margin-left: 47px;
    }
    .wa{
      margin-top: 65px;
      margin-left: 20px;
    }
    .img-chip3{
      margin-left: 50px;
    }
    .com{
      margin-top: 65px;
      margin-left: 30px;
    }
    .img-chip4{
      margin-left: 48px;
    }
  }

    @media only screen and (device-width: 411px) and (device-height: 823px) {
    .share{
      margin-top: 150px;
      margin-left: 20px;
    }
    .close{
      margin-top: 150px;
    }
    .twit{
      margin-top: 150px;
      margin-left: 5px;
    }
    .img-chip1{
      margin-left: 50px;
    }
    .fb{
      margin-top: 150px;
      margin-left: 15px;
    }
    .img-chip2{
      margin-left: 47px;
    }
    .wa{
      margin-top: 150px;
      margin-left: 20px;
    }
    .img-chip3{
      margin-left: 50px;
    }
    .com{
      margin-top: 150px;
      margin-left: 30px;
    }
    .img-chip4{
      margin-left: 48px;
    }
  }

    @media only screen and (device-width: 414px) and (device-height: 736px) {
    .share{
      margin-top: 60px;
      margin-left: 20px;
    }
    .close{
      margin-top: 60px;
    }
    .twit{
      margin-top: 65px;
      margin-left: 5px;
    }
    .img-chip1{
      margin-left: 50px;
    }
    .fb{
      margin-top: 65px;
      margin-left: 15px;
    }
    .img-chip2{
      margin-left: 47px;
    }
    .wa{
      margin-top: 65px;
      margin-left: 20px;
    }
    .img-chip3{
      margin-left: 50px;
    }
    .com{
      margin-top: 65px;
      margin-left: 30px;
    }
    .img-chip4{
      margin-left: 48px;
    }
  }

    @media only screen and (device-width: 375px) and (device-height: 812px) {
    .share{
      margin-top: 130px;
      margin-left: 20px;
    }
    .close{
      margin-top: 130px;
    }
    .twit,
    .fb,
    .wa,
    .com{
      margin-top: 140px;
    }

  }

  @media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
    .img-chip1 {
      width: 25px;
      height: 25px;
      margin-top: -38px;
      margin-left: 38px;
    }

    .img-chip2 {
      width: 25px;
      height: 25px;
      margin-top: -38px;
      margin-left: 36px;
    }

    .img-chip3 {
      width: 25px;
      height: 25px;
      margin-top: -39px;
      margin-left: 38px;
    }

    .img-chip4 {
      width: 25px;
      height: 25px;
      margin-top: -40px;
      margin-left: 36px;
    }
    .share {
      top: 386px;
      left: 140px;
    }

    .close {
      top: 380px;
      left: 260px;
    }

    .twit {
      top: 500px;
      left: 30px;
    }
    .fb {
      top: 500px;
      left: 95px;
    }
    .wa {
      top: 500px;
      left: 170px;
    }
    .com {
      top: 500px;
      left: 245px;
    }
  }
}
</style>