<template>
  <v-toolbar flat>
    <v-row>
      <v-col cols="6">
        <v-btn text class="next" to="/">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="6">
        <v-text-field solo label="Search Now" prepend-inner-icon="mdi-magnify" class="txt-search"></v-text-field>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
.next {
  margin-left: -20px;
  margin-top: 65px;
}

.txt-search {
  margin-left: -250px;
  margin-top: 60px;
  width: 800px;
}
}

@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  .txt-search {
  margin-left: -220px;
  margin-top: 60px;
  width: 700px;
}
}
</style>