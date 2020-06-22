<template>
  <div class="register">
    <NavbarAcc />

    <h1 class="txt-register">Register</h1>

    <div class="text-center">
      <v-btn rounded dark class="btn-facebook" style="background: #5879BE;">Register dengan facebook</v-btn>
    </div>

    <p class="or">atau dengan</p>

    <div class="form">
      <v-text-field v-model="first" label="Nama" solo class="form-nama"></v-text-field>
      <v-text-field
        v-model="first"
        label="Email"
        solo
        class="form-email"
        
      ></v-text-field>
      <v-text-field
        v-model="first"
        label="Password"
        solo
        class="form-pass"
        
      ></v-text-field>
      <v-text-field
        v-model="first"
        label="Re-Password"
        solo
        class="form-repass"
        
      ></v-text-field>
    </div>

    <div class="text-center">
      <v-btn rounded dark class="btn-login" style="background: #fe5c96;">Login</v-btn>
    </div>

    <v-btn text class="account" to="/login">Already have an account ? Login Now</v-btn>
  </div>
</template>

<script>
import NavbarAcc from "../layouts/navbar-account.vue";

export default {
  components: {
    NavbarAcc
  }
};
</script>

<style scoped>
@media only screen and (max-width: 800px) {

  .form-nama {
    width: 320px;
    margin-left: 20px;
    margin-top: 200px;
  }
  .form-email,
  .form-pass,
  .form-repass{
    width: 320px; margin-left: 20px; margin-top: -10px;
  }
  .txt-register {
    position: absolute;
    font-family: AvenirNext;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: -0.015em;
    color: #000000;
    margin-left: 30px;
    margin-top: 40px;
  }

  .btn-facebook {
    position: absolute;
    box-sizing: border-box;
    border-radius: 100px;
    width: 300px;
    margin-top: 90px;
    margin-left: -150px;
  }

  .btn-login {
    position: absolute;
    box-sizing: border-box;
    border-radius: 100px;
    width: 300px;
    margin-left: -150px;
  }

  .or {
    position: absolute;
    width: 76px;
    height: 18px;
    left: 150px;
    top: 200px;
    font-family: AvenirNext;
    font-size: 15px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ababab;
  }

  .account {
    position: absolute;
    top: 610px;
    left: 30px;
    font-family: AvenirNext;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.015em;
    color: #000000;
  }
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  .btn-facebook,
  .btn-login{
    margin-left: -150px;
  }

  .or {
    margin-left: -20px;
  }

  .form-nama,
  .form-email,
  .form-pass,
  .form-repass{
    width: 290px;
  }

  .account{
    margin-left: -20px;
  }


}
</style>