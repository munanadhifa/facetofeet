<template>
   <v-toolbar flat>
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
    </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>