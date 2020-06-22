<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    color="#FF5E98"
    class="footer"
  >
    <v-btn to="/">
      <span>Home</span>
       <v-avatar >
         <v-icon>mdi-home</v-icon>
       </v-avatar>
    </v-btn>

    <v-btn>
      <span>Shop</span>
      <v-avatar>
         <v-icon>mdi-heart</v-icon>
       </v-avatar>
    </v-btn>

    <v-btn to="/channel">
      <span>Channel</span>
      <v-avatar>
         <v-icon>mdi-home</v-icon>
       </v-avatar>
    </v-btn>

     <v-btn to="/account">
      <span>Account</span>
      <v-avatar>
         <v-icon>mdi-account</v-icon>
       </v-avatar>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        activeBtn: 1,
      }
    },
  }
</script>

<style scoped>



</style>