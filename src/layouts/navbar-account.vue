<template>
   <v-toolbar flat>
      <v-row>
        <v-col cols="2"> 
          <v-btn text class="next" to="/account" >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="2">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('../assets/logo-ftf.png')"
            transition="scale-transition"
            style="position: absolute; left: 40px; width: 150px; right: 63.99%; top: 20%; bottom: 20%;"
          />
        </v-col>

        
      </v-row>
    </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
.next {
  margin-left: -20px;
}
</style>