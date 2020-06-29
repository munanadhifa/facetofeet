<template>
  <div class="detail">
    <NavbarNews />

    <v-img :src="require('../assets/pink-rectangle.png')" class="ls-image">
      <p class="lifestyle">Lifestyle</p>
    </v-img>

    <p class="txt">Wangi Aromaterapi Ini Bisa Mengusir Rasa Malas Saat Work From Home!</p>
    <p class="txt-calendar">Monday, 23/03/2020 11:11 WIB by Febri</p>

    <div class="image">
      <v-img :src="require('../assets/image-news.png')" style="top:170px"></v-img>
      <p class="txt-image">Soompi</p>
    </div>

    <p class="txt-news">
      Salah satu anggota boy grup Super Junior, Choi Siwon, memang dikenal mempunyai sifat dermawan. Kepeduliannya terhadap sesama manusia lantas menjadikannya sebagai duta Unicef untuk Asia Timur dan Asia Pasifik. Merespon kejadian memperihatinkan akibat Covid-19 yang saat ini tengah melanda seluruh negara di dunia, Choi Siwon berikan semangat dan dukungan melalui Instagram.
      <br />
      <br />Ada tiga foto yang diunggah oleh pria berusia 33 tahun tersebut. Masing-masing foto disertai caption yang berisikan kalimat penyemangat dalam berbeda bahasa. Menariknya, satu di antaranya menggunakan Bahasa Indonesia.
      <br />
      <br />Unggahan berbahasa Indonesia tersebut disertai foto yang menampilkan emoticon senyum. Foto yang digunakan Choi Siwon ternyata sangat berkaitan dengan caption yang dituliskannya. Foto tersebut menandakan tanda sukacita bahwa harapan untuk mengatasi Covid-19 dapat terwujud dengan segera. Berikut caption yang tertera di foto emoticon senyum pada Instagram siwonchoi.
      <br />
      <br />“Dengan dampak dari virus corona (Covid-19) dan dipenuhi dengan ketakutan untuk masa depan yang tidak pasti disertai kebingungan dan kesulitan besar. Tetapi kita percaya bahwa musim semi pasti akan datang setelah musim dingin, bencana pasti akan dipulihkan, diperbarui dan juga seperti halnya hati kita yang terluka akan sembuh, kita akan bangkit berdiri lagi.
    </p>

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
      <v-chip class="chip1" style="background-color: #72DCFF;"></v-chip>
      <v-img :src="require('../assets/twit-putih.png')" class="img-chip1"></v-img>
    </div>

    <div>
      <v-chip class="chip2" style="background-color:#00A3FF;"></v-chip>
      <v-img :src="require('../assets/fb-putih.png')" class="img-chip2"></v-img>
    </div>

    <div>
      <v-chip class="chip3" style="background-color:#858585;"></v-chip>
      <v-row>
        <v-col>
          <v-img :src="require('../assets/comment.png')" class="img-chip3"></v-img>
        </v-col>
        <v-col>
          <p class="com">Comment</p>
        </v-col>
      </v-row>
    </div>
    <!-- <div class="icon-share">
      <v-row>
        <v-col>
          <v-img :src="require('../assets/twit.png')" style="twitter"></v-img>
        </v-col>
      </v-row>
    </div>-->

    <h1 class="baca">Baca Juga</h1>
    <News class="news1" />

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

    <Product />

    <h1 class="recommend">Recommended for you</h1>
    <News style="margin-top:-100px" />
  </div>
</template>

<script>
import NavbarNews from "../layouts/navbar-news.vue";
import News from "../views/news.vue";
import Product from "../views/product.vue";

export default {
  components: {
    NavbarNews,
    News,
    Product
  }
};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .news1 {
    margin-top: 1030px;
  }

  .chip1 {
    width: 27px;
    height: 27px;
    border-radius: 12px;
    left: 19px;
    top: 1170px;
  }

  .img-chip1 {
    width: 15px;
    height: 18px;
    top: 1185px;
    margin-left: 25px;
  }

  .chip2 {
    width: 27px;
    height: 27px;
    border-radius: 12px;
    left: 60px;
    top: 1164px;
  }

  .img-chip2 {
    width: 15px;
    height: 18px;
    top: 1179px;
    margin-left: 65px;
  }

  .chip3 {
    width: 95px;
    height: 27px;
    border-radius: 12px;
    left: 100px;
    top: 1157px;
  }

  .img-chip3 {
    width: 15px;
    height: 15px;
    top: 1161px;
    margin-left: 110px;
  }

  .com {
    position: absolute;
    width: 60px;
    height: 18px;
    top: 1534px;
    left: 125px;
    font-family: AvenirNext;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
  }

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

  .ls-image {
    width: 90px;
    left: 140px;
    top: 20px;
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

  .txt-image {
    position: absolute;
    width: 42px;
    height: 16px;
    left: 9px;
    top: 510px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #ababab;
  }

  .txt-news {
    position: absolute;
    width: 320px;
    height: 459px;
    left: 20px;
    top: 540px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }

  .tag {
    position: absolute;
    width: 27px;
    height: 22px;
    left: 22px;
    top: 1381px;
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
    top: 1415px;
  }

  .rectangle-2 {
    position: absolute;
    width: 91px;
    height: 25px;
    top: 1415px;
    margin-left: 50px;
  }

  .rectangle-3 {
    position: absolute;
    width: 91px;
    height: 25px;
    top: 1415px;
    margin-left: 80px;
  }

  .rectangle-4 {
    position: absolute;
    width: 91px;
    height: 25px;
    top: 1450px;
    margin-left: -180px;
  }

  .rectangle-5 {
    position: absolute;
    width: 91px;
    height: 25px;
    top: 1450px;
    margin-left: -150px;
  }

  .rectangle-6 {
    position: absolute;
    width: 91px;
    height: 25px;
    top: 1450px;
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
    top: 1491px;
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }

  .baca {
    position: absolute;
    width: 76px;
    height: 19px;
    left: 19px;
    top: 1570px;
    font-family: AvenirNext;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
  }

  .check {
    position: absolute;
    width: 167px;
    height: 19px;
    left: 18px;
    font-family: AvenirNext;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
  }

  .next {
    margin-top: 5px;
    margin-left: 100px;
  }

  .recommend {
    position: absolute;
    width: 170px;
    height: 19px;
    left: 19px;
    top: 2830px;
    font-family: AvenirNext;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
  }
}

@media only screen and (device-width: 411px) and (device-height: 731px) {
  .ls-image{
    left: 150px;
  }
  .txt{
    left: 30px;
  }
  .txt-calendar{
    left: 110px;
  }
  .rectangle-4{
    margin-left: -195px;
  }
  .rectangle-5{
    margin-left: -166px;
  }
  .rectangle-6{
    margin-left: -136px;
  }
  .chip1{
    top: 1140px;
  }
  .chip2{
    top: 1133px;
  }
  .chip3{
    top: 1127px;
  }
  .img-chip1{
    top: 1155px;
  }
  .img-chip2{
    top: 1149px;
  }
  .img-chip3{
    top: 1131px;
  }
  .com{
    top: 1529px;
  }
}

@media only screen and (device-width: 411px) and (device-height: 823px) {
  .ls-image{
    left: 150px;
  }
  .txt{
    left: 30px;
  }
  .txt-calendar{
    left: 110px;
  }
  .rectangle-4{
    margin-left: -195px;
  }
  .rectangle-5{
    margin-left: -166px;
  }
  .rectangle-6{
    margin-left: -136px;
  }
  .chip1{
    top: 1140px;
  }
  .chip2{
    top: 1133px;
  }
  .chip3{
    top: 1127px;
  }
  .img-chip1{
    top: 1155px;
  }
  .img-chip2{
    top: 1149px;
  }
  .img-chip3{
    top: 1131px;
  }
  .com{
    top: 1529px;
  }
}
@media only screen and (device-width: 414px) and (device-height: 736px) {
.ls-image{
    left: 150px;
  }
  .txt{
    left: 30px;
  }
  .txt-calendar{
    left: 110px;
  }
  .rectangle-4{
    margin-left: -195px;
  }
  .rectangle-5{
    margin-left: -166px;
  }
  .rectangle-6{
    margin-left: -136px;
  }
  .chip1{
    top: 1140px;
  }
  .chip2{
    top: 1133px;
  }
  .chip3{
    top: 1127px;
  }
  .img-chip1{
    top: 1155px;
  }
  .img-chip2{
    top: 1149px;
  }
  .img-chip3{
    top: 1131px;
  }
  .com{
    top: 1529px;
  }
}

@media only screen and (device-width: 360px) and (device-height: 640px) {
  .com {
    top: 1525px;
  }
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {

  .news1 {
    margin-top: 1100px;
  }

  .baca {
    top: 1600px;
  }

  .chip1 {
    top: 1245px;
  }

  .img-chip1 {
    top: 1260px;
  }

  .chip2 {
    top: 1238px;
  }

  .img-chip2 {
    top: 1254px;
  }

  .chip3 {
    top: 1233px;
  }

  .img-chip3 {
    top: 1236px;
  }

  .com {
    top: 1572px;
  }
  .ls-image,
  .txt,
  .txt-calendar {
    margin-left: -25px;
  }

  .txt-image {
    margin-top: -35px;
  }

  .txt-news {
    margin-left: -10px;
    width: 300px;
    margin-top: -30px;
  }

  .tag {
    margin-top: 50px;
  }

  .rectangle,
  .rectangle-2,
  .rectangle-3 {
    margin-top: 50px;
  }

  .rectangle-2 {
    margin-left: 60px;
  }
  .rectangle-3 {
    margin-left: 100px;
  }

  .rectangle-4,
  .rectangle-5,
  .rectangle-6 {
    margin-top: 50px;
  }
  .rectangle-4 {
    margin-left: -150px;
  }

  .rectangle-5 {
    margin-left: -110px;
  }

  .rectangle-6 {
    margin-left: -70px;
  }

  .share {
    margin-top: 50px;
  }
}


</style>