<template>
  <div class="q-pa-lg i-love-arrays">
    <h5 class="q-ma-none text-dark">Hello, {{ home.form.name }}</h5>
    <q-form class="row q-mt-xl">
      <div class="col-4 flex items-center">
        <q-input
          outlined
          dense
          class="full-width main-input"
          v-model="inputNumbers"
          @update:model-value="handleInput()"
          placeholder="Enter comma-delimited numbers"
        >
          <template v-slot:append>
            <q-btn
              @click="handleSubmit()"
              label="Submit"
              class="bg-primary text-dark q-pa-sm button"
              no-caps
              dense
              flat
            />
          </template>
        </q-input>
      </div>
    </q-form>
    <div v-if="errorMessage" style="color: red">{{ errorMessage }}</div>
    <div v-if="sortedResults.length && inputNumbers" class="q-mt-md text-dark">
      <label>Number - Count</label>
      <ul class="q-pa-none">
        <li v-for="result in sortedResults" :key="result">
          {{ result.number }} - {{ result.count }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./scripts/ILoveArrays.js"></script>
<style>
@import "./styles/ILoveArrays.scss";
</style>
