<template>
  <div class="q-pa-lg row">
    <q-form class="col-3">
      <label class="text-weight-medium text-dark">Name:</label>
      <q-input
        class="transparent q-mt-sm main-input"
        outlined
        dense
        placeholder="Enter a name"
        v-model="home.form.name"
        @update:model-value="checkInputValue()"
      />
    </q-form>
  </div>
</template>

<script src="./scripts/Home.js"></script>
<style>
@import "./styles/Home.scss";
</style>
