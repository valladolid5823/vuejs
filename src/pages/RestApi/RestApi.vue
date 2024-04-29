<template>
  <div class="q-pa-lg rest-api">
    <h5 class="q-ma-none text-dark">Hello, {{ home.form.name }}</h5>

    <div class="images row q-mt-lg">
      <div v-for="(image, index) in images" :key="index" class="col-6 col-sm-6 q-pa-xs">
        <img :src="image" alt="Image 1" class="full-width" />
      </div>
    </div>
    <div class="q-mt-lg">
      <q-btn
        :loading="btnLoadingState"
        @click="fetchRandomImages(6)"
        no-caps
        label="Fetch Random Images"
        flat
        class="bg-primary text-dark button"
      />
    </div>
  </div>
</template>

<script src="./scripts/RestApi.js"></script>
<style>
@import "./styles/RestApi.scss";
</style>
