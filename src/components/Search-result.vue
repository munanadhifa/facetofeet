<template>
  <div class="search-res">
      <NavbarSearch/>

    <h1 class="recc">Pencarian “millenial” ditemukan 3 artikel</h1>

    <div class="news-rec">
      <v-row>
        <v-col>
          <v-img :src="require('../assets/Bitmap.png')" class="news1"></v-img>
        </v-col>
        <v-col>
          <p class="txt-news1">Tips Makeup bagi Kamu yang Memiliki Bibir Tipis</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img :src="require('../assets/Bitmap.png')" class="news2"></v-img>
        </v-col>
        <v-col>
          <p class="txt-news2">Tips Makeup bagi Kamu yang Memiliki Bibir Tipis</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-img :src="require('../assets/Bitmap.png')" class="news3"></v-img>
        </v-col>
        <v-col>
          <p class="txt-news3">Tips Makeup bagi Kamu yang Memiliki Bibir Tipis</p>
        </v-col>
      </v-row>
  </div>
  </div>
</template>

<script>
import NavbarSearch from '../layouts/navbar-search.vue'
export default {
components: {
  NavbarSearch
}
}
</script>

<style scoped>

.recc{
position: absolute;
height: 19px;
left: 19px;
top: 100px;
font-family: AvenirNext;
font-size: 16px;
line-height: 120%;
color: #000000;
}

.news1{
  position: absolute;
left: 4.29%;
right: 72.88%;
top: 20%;
bottom: 70.59%;
border-radius: 10px;
}

.txt-news1{
  position: absolute;
left: 30%;
right: 5.56%;
top: 20%;
bottom: 72.5%;
width: 220px;
font-family: AvenirNext;
font-size: 13px;
line-height: 19px;
color: #474747;
}

.news2{
  position: absolute;
left: 4.29%;
right: 72.88%;
top: 32%;
border-radius: 10px;
}

.txt-news2{
  position: absolute;
left: 30%;
right: 5.56%;
top: 32%;
bottom: 72.5%;
width: 220px;
font-family: AvenirNext;
font-size: 13px;
line-height: 19px;
color: #474747;
}

.news3{
  position: absolute;
left: 4.29%;
right: 72.88%;
top: 45%;
border-radius: 10px;
}

.txt-news3{
  position: absolute;
left: 30%;
right: 5.56%;
top: 45%;
bottom: 72.5%;
width: 220px;
font-family: AvenirNext;
font-size: 13px;
line-height: 19px;
color: #474747;
}
</style>