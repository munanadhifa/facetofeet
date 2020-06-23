<template>
  <div>
    <v-app-bar flat fixed color="white">
      <v-row>
        <v-col cols="6">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('../assets/logo-ftf.png')"
            transition="scale-transition"
            style="position: absolute; left: 4.44%; right: 63.99%; top: 20%; bottom: 20%;"
          />
        </v-col>

        <v-col cols="6">
          <v-btn
            icon
            color="black"
            style=" left: -20%; top: 0%; bottom: 0%; margin-left:130px "
            to="/search"
          >
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

 <div class="bit-new-portocard-row">
      <div class="text-center">
        <v-btn rounded class="btn-home" dark to="/">Home</v-btn>
      </div>
      
      <h5
        style="margin-left: 20px; font-family: Avenir; font-style: normal;font-weight: normal; font-size: 15px; line-height: 16px; "
      >Shop</h5>
      <h5
        style="margin-left: 20px; font-family: Avenir; font-style: normal;font-weight: normal; font-size: 15px; line-height: 16px;"
      >Beauty</h5>
      <h5
        style="margin-left: 20px; font-family: Avenir; font-style: normal;font-weight: normal; font-size: 15px; line-height: 16px;"
      >Kwave</h5>
      <h5
        style="margin-left: 20px; font-family: Avenir; font-style: normal;font-weight: normal; font-size: 15px; line-height: 16px;"
      >Review</h5>
      <h5
        style="margin-left: 20px; font-family: Avenir; font-style: normal;font-weight: normal; font-size: 15px; line-height: 16px;"
      >Fashion</h5>
      <h5
        style="margin-left: 20px; font-family: Avenir; font-style: normal;font-weight: normal; font-size: 15px; line-height: 16px;"
      >Hijab</h5>
      <h5
        style="margin-left: 20px; font-family: Avenir; font-style: normal;font-weight: normal; font-size: 15px; line-height: 16px;"
      >Lifestyle</h5>
      <h5
        style="margin-left: 20px; font-family: Avenir; font-style: normal;font-weight: normal; font-size: 15px; line-height: 16px;"
      >Event</h5>
      <h5
        style="margin-left: 20px; font-family: Avenir; font-style: normal;font-weight: normal; font-size: 15px; line-height: 16px;"
      >Video</h5>
    </div>
   
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

  .bit-new-portocard-row {
    align-items: center;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 20px;
    margin-top: 70px;
    margin-left: -30px;
  }


.btn-home {
  background: linear-gradient(88.11deg, #ff86b1 13.76%, #ffb9d2 92.76%);
  margin-left: 30px;
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 16px;
}
</style>