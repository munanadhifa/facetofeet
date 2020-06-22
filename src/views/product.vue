<template>
  <div class="product">
    <v-row>
      <v-col>
        <v-img :src="require('../assets/product.png')" class="prod"></v-img>
        <p class="txt-prod">Juicy Lasting Tint</p>
        <p class="txt-disc">Rp. 197.000</p>
        <p class="txt-price">Rp. 150.000</p>
      </v-col>

      <v-col>
        <v-img :src="require('../assets/product.png')" class="prod2"></v-img>
        <p class="txt-prod2">Juicy Lasting Tint</p>
        <p class="txt-disc2">Rp. 197.000</p>
        <p class="txt-price2">Rp. 150.000</p>
      </v-col>

      <v-col>
        <v-img :src="require('../assets/product.png')" class="prod3"></v-img>
        <p class="txt-prod3">Juicy Lasting Tint</p>
        <p class="txt-disc3">Rp. 197.000</p>
        <p class="txt-price3">Rp. 150.000</p>
      </v-col>

      <v-col>
        <v-img :src="require('../assets/product.png')" class="prod4"></v-img>
        <p class="txt-prod4">Juicy Lasting Tint</p>
        <p class="txt-disc4">Rp. 197.000</p>
        <p class="txt-price4">Rp. 150.000</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .txt-prod {
    position: absolute;
    width: 149px;
    height: 68px;
    left: 22px;
    top: 2480px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
    color: #353535;
  }

  .txt-prod2 {
    position: absolute;
    width: 149px;
    height: 68px;
    left: 190px;
    top: 2480px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
    color: #353535;
  }

  .txt-prod3 {
    position: absolute;
    width: 149px;
    height: 68px;
    left: 22px;
    top: 2740px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
    color: #353535;
  }

  .txt-prod4 {
    position: absolute;
    width: 149px;
    height: 68px;
    left: 190px;
    top: 2740px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
    color: #353535;
  }

  .prod {
    position: absolute;
    width: 152px;
    height: 152px;
    left: 19px;
    border-radius: 10px;
  }

  .prod2 {
    position: absolute;
    width: 152px;
    height: 152px;
    left: 191px;
    border-radius: 10px;
  }

  .prod3 {
    position: absolute;
    width: 152px;
    height: 152px;
    left: 19px;
    top: 2580px;
    border-radius: 10px;
  }

  .prod4 {
    position: absolute;
    width: 152px;
    height: 152px;
    left: 191px;
    top: 2580px;
    border-radius: 10px;
  }
  .txt-disc {
    margin-top: 200px;
    color: #ababab;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
    width: 102px;
    height: 8.85px;
    margin-left: 45px;
    text-decoration: line-through;
  }

  .txt-disc2 {
    margin-top: 200px;
    color: #ababab;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
    width: 102px;
    height: 8.85px;
    margin-left: 10px;
    text-decoration: line-through;
  }

  .txt-disc3 {
    margin-top: 200px;
    color: #ababab;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
    width: 102px;
    height: 8.85px;
    margin-left: 45px;
    text-decoration: line-through;
  }

  .txt-disc4 {
    margin-top: 200px;
    color: #ababab;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
    width: 102px;
    height: 8.85px;
    margin-left: 10px;
    text-decoration: line-through;
  }

  .txt-price {
    color: #ff5e98;
    position: absolute;
    width: 149px;
    height: 68px;
    margin-left: 20px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
  }

  .txt-price2 {
    color: #ff5e98;
    position: absolute;
    width: 149px;
    height: 68px;
    margin-left: -13px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
  }

.txt-price3 {
    color: #ff5e98;
    position: absolute;
    width: 149px;
    height: 68px;
    margin-left: 20px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
  }

  .txt-price4 {
    color: #ff5e98;
    position: absolute;
    width: 149px;
    height: 68px;
    margin-left: -13px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 120%;
    text-align: center;
  }
}
@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  .prod,
  .prod3{
    width: 140px;
    height: 140px;
  }

  .prod2,
  .prod4{
    width: 140px;
    height: 140px;
    margin-left: -20px;
  }

  .txt-prod{
    left: 15px;
  }

  .txt-disc{
    margin-top: 180px;
    margin-left: 35px;
  }

  .txt-price{
     margin-left: 12px;
  }

  .txt-prod2{
    left: 165px;
  }

  .txt-disc2{
    margin-top: 180px;
    margin-left: 15px;
  }

  .txt-price2{
    margin-left: -8px;
  }

  .txt-prod3{
    left: 15px;
    margin-top: -15px;
  }

  .txt-disc3{
    margin-left: 35px;
  }

  .txt-price3{
    margin-left: 12px;
  }

.txt-prod4{
  margin-left: -20px;
    margin-top: -15px;
}

  
}
</style>