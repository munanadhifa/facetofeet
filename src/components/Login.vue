<template>
  <div class="login">
    <NavbarAcc />

    <h1 class="txt-login" >Login</h1>

    <div class="form">
      <v-text-field
        v-model="first"
        label="Email"
        solo
        class="email-form"
        
      ></v-text-field>
      <v-text-field
        v-model="first"
        label="Password"
        solo
        class="pass-form"
      ></v-text-field>
    </div>

    <div class="text-center">
      <v-btn rounded dark class="btn-login" style="background: #fe5c96;">Login</v-btn>
    </div>

    <p class="or">atau dengan</p>

    <div class="text-center">
      <v-btn rounded dark class="btn-facebook" style="background: #5879BE;">Login dengan facebook</v-btn>
    </div>

    <v-btn text class="forgot">Forgot your password?</v-btn>
     <v-btn text class="account" to="/register">Don't have an account? Register Now</v-btn>
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
.txt-login {
  position: absolute;
  font-family: AvenirNext;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #000000;
  margin-left: 40px;
  margin-top: 40px;
}

.email {
  width: 300px;
  margin-top: 100px;
  margin-left: 40px;
}

.btn-login {
  /* border: 2px solid #fe5c96; */
  box-sizing: border-box;
  border-radius: 100px;
  border-radius: 100px;
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  width: 300px;
  margin-left: -10px;
}

.or {
  position: absolute;
  width: 76px;
  height: 18px;
  left: 150px;
  top: 390px;
  font-family: AvenirNext;
  font-size: 15px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ababab;
}

.btn-facebook{
position: absolute;
box-sizing: border-box;
border-radius: 100px;
width: 300px;
margin-top: 80px;
margin-left: -150px;
}

.forgot {
  position: absolute;
width: 267px;
height: 65px;
margin-left: 60px;
top: 550px;
font-family: AvenirNext;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
color: #000000;
font-weight: bold;
}

.account{
  position: absolute;
width: 267px;
height: 27px;
margin-left: 60px;
top: 600px;
font-family: AvenirNext;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
color: #000000;
}

.email-form{
  width:320px;
   margin-left:20px; 
   margin-top:100px
}

.pass-form{
  width: 320px; 
  margin-left: 20px;
   margin-top: 10px;
}
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
.email-form,
.pass-form{
  width: 280px;
}

.btn-login{
  margin-left: 5px;
}

.or{
  margin-left: -20px;
}

.btn-facebook{
  margin-left: -150px;
}

.forgot{
  margin-top: -40px;
  margin-left: 35px;
}

.account{
      margin-top: -60px;
    margin-left: 28px;
}
}
</style>