<template>
  <div class="news">
    <NavbarNews />

    <v-img :src="require('../assets/pink-rectangle.png')" class="image-style">
      <p class="lifestyle">Lifestyle</p>
    </v-img>

    <p class="txt">Wangi Aromaterapi Ini Bisa Mengusir Rasa Malas Saat Work From Home!</p>
    <p class="txt-calendar">Monday, 23/03/2020 11:11 WIB by Febri</p>

    <hr
      style="position: absolute; width: 375px; height: 0px; left: 0px;top: 244px; border: 1px solid #D8D8D8;"
    />

    <h3 class="artikel">Artikel</h3>

    <div class="image">
      <v-img :src="require('../assets/image-news.png')" style="top:230px"></v-img>
      <p class="soompi">Soompi</p>
    </div>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      controls
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333; margin-top:250px"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>Salah satu anggota boy grup Super Junior, Choi Siwon, memang dikenal mempunyai sifat dermawan. Kepeduliannya terhadap sesama manusia lantas menjadikannya sebagai duta Unicef untuk Asia Timur dan Asia Pasifik. Merespon kejadian memperihatinkan akibat Covid-19 yang saat ini tengah melanda seluruh negara di dunia, Choi Siwon berikan semangat dan dukungan melalui Instagram.</p>
      </b-carousel-slide>
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <hr
      style="position: absolute;
width: 330px;
height: 0px;
left: 15px;
top: 800px;

border: 1px solid #D8D8D8;"
    />

    <p class="artikel-2">Artikel</p>

    <hr
      style="position: absolute;
width: 330px;
height: 0px;
left: 15px;
top: 850px;

border: 1px solid #D8D8D8;"
    />

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

    <h1 class="recommend">Recommended for you</h1>
    <News style="margin-top:320px" />
    

  </div>
</template>

<script>
import NavbarNews from "../layouts/navbar-news.vue";
import News from "../views/news.vue";

export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = false;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  components: {
    NavbarNews,
    News
  }
};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .chip1 {
    width: 27px;
    height: 27px;
    border-radius: 12px;
    left: 19px;
    top: 140px;
  }

  .img-chip1 {
    width: 15px;
    height: 18px;
    top: 155px;
    margin-left: 25px;
  }

  .chip2 {
    width: 27px;
    height: 27px;
    border-radius: 12px;
    left: 60px;
    top: 134px;
  }

  .img-chip2 {
    width: 15px;
    height: 18px;
    top: 149px;
    margin-left: 65px;
  }

  .chip3 {
    width: 95px;
    height: 27px;
    border-radius: 12px;
    left: 100px;
    top: 127px;
  }

  .img-chip3 {
    width: 15px;
    height: 15px;
    top: 130px;
    margin-left: 110px;
  }

  .com {
    position: absolute;
    width: 60px;
    height: 18px;
    top: 104px;
    left: -60px;
    font-family: AvenirNext;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
  }

  .artikel {
    position: absolute;
    width: 85px;
    height: 18px;
    left: 155px;
    top: 270px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height */
    color: #979797;
  }

  .artikel-2 {
    margin-top: 70px;
    text-align: center;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height */
    color: #979797;
  }

  .image-style {
    width: 90px;
    left: 140px;
    top: 20px;
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

  .soompi {
    position: absolute;
    width: 42px;
    height: 16px;
    left: 9px;
    top: 565px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #ababab;
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
    top: 900px;
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
    left: 40px;
    top: 70px;
  }

  .rectangle-2 {
    position: absolute;
    width: 91px;
    top: 70px;
    margin-left: 50px;
  }

  .rectangle-3 {
    position: absolute;
    width: 91px;
    top: 70px;
    margin-left: 80px;
  }

  .rectangle-4 {
    position: absolute;
    width: 91px;
    top: 100px;
    margin-left: -180px;
  }

  .rectangle-5 {
    position: absolute;
    width: 91px;
    top: 100px;
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
    left: 5px;
    top: 1px;
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 15px;
    color: #ffffff;
  }

  .share {
    position: absolute;
    width: 43px;
    height: 22px;
    left: 21px;
    top: 1000px;
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
    left: 35px;
    font-family: AvenirNext;
    font-size: 16px;
    line-height: 120%;
    color: #000000;
    top: 130px;
  }

  .next {
    top: 115px;
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

  .recommend {
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
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  .image-style {
    left: 120px;
  }
  .txt {
    margin-left: -25px;
  }
  .txt-calendar {
    margin-left: -25px;
  }
  .rectangle {
    left: 10px;
  }
  .rectangle-3 {
    margin-left: 90px;
  }
  .rectangle-4 {
    margin-left: -160px;
  }
  .rectangle-5 {
    margin-left: -120px;
  }
  .rectangle-6 {
    margin-left: -80px;
  }
  .prod,
  .prod2,
  .prod3,
  .prod4 {
    width: 140px;
    height: 140px;
  }
  .prod2,
  .prod4 {
    margin-left: -20px;
  }
}
</style>
