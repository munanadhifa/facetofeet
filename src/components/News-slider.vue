<template>
  <div class="news">

    <NavbarNews/>

     <v-img :src="require('../assets/pink-rectangle.png')" style="width:90px; left:140px; top:20px">
      <p class="lifestyle">Lifestyle</p>
    </v-img>

    <p class="txt">Wangi Aromaterapi Ini Bisa Mengusir Rasa Malas Saat Work From Home!</p>
    <p class="txt-calendar">Monday, 23/03/2020 11:11 WIB by Febri</p>
    






    <h1 class="tag">Tag</h1>
    <div class="tag-image">
      <v-row>
        <v-col cols="2">
          <v-img :src="require('../assets/tag.png')" class="rectangle">
            <p class="suju">Super Junior</p>
          </v-img>
        </v-col>

        <v-col cols="2">
          <v-img :src="require('../assets/tag.png')" class="rectangle-2">
            <p class="suju">Super Junior</p>
          </v-img>
        </v-col>

        <v-col cols="2">
          <v-img :src="require('../assets/tag.png')" class="rectangle-3">
            <p class="suju">Super Junior</p>
          </v-img>
        </v-col>

        <v-col cols="2">
          <v-img :src="require('../assets/tag.png')" class="rectangle-4">
            <p class="suju">Super Junior</p>
          </v-img>
        </v-col>

        <v-col cols="2">
          <v-img :src="require('../assets/tag.png')" class="rectangle-5">
            <p class="suju">Super Junior</p>
          </v-img>
        </v-col>

        <v-col cols="2">
          <v-img :src="require('../assets/tag.png')" class="rectangle-6">
            <p class="suju">Super Junior</p>
          </v-img>
        </v-col>
      </v-row>
    </div>

     <h1 class="share">Share</h1>


<div>
      <v-row>
        <v-col>
          <h4 class="check">Check out this product</h4>
        </v-col>
        <v-col>
          <v-icon class="next">mdi-arrow-right</v-icon>
        </v-col>
      </v-row>
    </div>
      <div class="product">
      <v-row>
        <v-col>
          <v-img :src="require('../assets/product.png')" class="prod"></v-img>
        </v-col>

        <v-col>
          <v-img :src="require('../assets/product.png')" class="prod2"></v-img>
        </v-col>

        <v-col>
          <v-img :src="require('../assets/product.png')" class="prod3"></v-img>
        </v-col>

        <v-col>
          <v-img :src="require('../assets/product.png')" class="prod4"></v-img>
        </v-col>
      </v-row>
    </div>

    <h1 class="recommend">Recommended for you</h1>
    <News style="margin-top: 1180px;"/>
  </div>
</template>

<script>
import NavbarNews from '../layouts/navbar-news.vue'
import News from '../views/news.vue'
export default {
components: {
  NavbarNews,
  News
}
}
</script>

<style scoped>
.lifestyle {
  position: absolute;
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #000000;
  left: 20px;
  top: 5px;
}

.txt {
  position: absolute;
  width: 330px;
  height: 82px;
  top: 120px;
  left: 20px;
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #000000;
}

.txt-calendar {
  position: absolute;
  width: 175px;
  height: 32px;
  top: 210px;
  left: 100px;
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #a2a2a2;
}

.tag {
  position: absolute;
  width: 27px;
  height: 22px;
  left: 22px;
  top: 600px;
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}

.rectangle {
  position: absolute;
  width: 91px;
  height: 25px;
  left: 20px;
  top: 630px;
}

.rectangle-2 {
  position: absolute;
  width: 91px;
  height: 25px;
  top: 630px;
  margin-left: 50px;
}

.rectangle-3 {
  position: absolute;
  width: 91px;
  height: 25px;
  top: 630px;
  margin-left: 80px;
}

.rectangle-4 {
  position: absolute;
  width: 91px;
  height: 25px;
  top: 670px;
  margin-left: -180px;
}

.rectangle-5 {
  position: absolute;
  width: 91px;
  height: 25px;
  top: 670px;
  margin-left: -150px;
}

.rectangle-6 {
  position: absolute;
  width: 91px;
  height: 25px;
  top: 670px;
  margin-left: -115px;
}

.suju {
  position: absolute;
  width: 63px;
  height: 15px;
  left: 15px;
  top: 5px;
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 15px;
  color: #ffffff;
}

.share {
  position: absolute;
  width: 43px;
  height: 22px;
  left: 21px;
  top: 750px;
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}

.check {
  position: absolute;
  width: 167px;
  height: 19px;
  left: 20px;
top: 850px;
  font-family: AvenirNext;
  font-size: 16px;
  line-height: 120%;
  color: #000000;
}

.next {
  top: 730px;
  margin-left: 100px;
}

.prod {
  position: absolute;
  width: 152px;
  height: 152px;
  left: 19px;
  top: 900px;
  border-radius: 10px;
}

.prod2 {
  position: absolute;
  width: 152px;
  height: 152px;
  left: 191px;
  top: 900px;
  border-radius: 10px;
}

.prod3 {
  position: absolute;
  width: 152px;
  height: 152px;
  left: 19px;
  top: 1180px;
  border-radius: 10px;
}

.prod4 {
  position: absolute;
  width: 152px;
  height: 152px;
  left: 191px;
  top: 1180px;
  border-radius: 10px;
}

.recommend{
position: absolute;
width: 170px;
height: 19px;
left: 19px;
top: 1450px;
font-family: AvenirNext;
font-size: 16px;
line-height: 120%;
color: #000000;
}
</style>