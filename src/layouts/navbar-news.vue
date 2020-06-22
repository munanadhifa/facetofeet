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
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/logo-ftf.png')"
          transition="scale-transition"
          style="position: absolute; margin-left:-100px;top: 20%; bottom: 20%;"
        />
      </v-col>

      <v-col>
        <v-btn
          icon
          color="black"
          style=" left: -20%; top: 0%; bottom: 0%; margin-left:130px"
          @click="sheet = !sheet"
        >
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
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
                <v-avatar color="#72DCFF" size="50">
                  <!-- <v-img :src="require('../assets/twit.png')"></v-img> -->
                </v-avatar>
                <p class="twit">Twitter</p>
              </v-col>
              <v-col style="margin-top:40px; margin-left:-50px">
                <v-avatar color="#00A3FF" size="50">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
                <p class="fb">Facebook</p>
              </v-col>
              <v-col style="margin-top:40px; margin-left:-50px">
                <v-avatar color="#11DA00" size="50">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
                <p class="wa">Whatsapp</p>
              </v-col>
              <v-col style="margin-top:40px; margin-left:-50px">
                <v-avatar color="#858585" size="50">
                  <v-icon>mdi-account</v-icon>
                </v-avatar>
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
.twit {
  position: absolute;
  width: 39px;
  height: 18px;
  left: 40px;
  top: 620px;
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
  left: 120px;
  top: 620px;
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #474747;
}

.wa{
top: 620px;
position: absolute;
width: 59px;
height: 18px;
left: 210px;
font-family: Avenir;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 18px;
text-align: center;
color: #474747;
}

.com{
  top: 620px;
  position: absolute;
width: 58px;
height: 18px;
left: 300px;
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
  top: 506px;
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
  top: 492px;
}
</style>