<template>
  <q-page class="q-pa-lg">
    <h1 class="q-ma-none text-dark">{{ heading }}</h1>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    let heading = ref("My Vue App");
    return {
      heading,
    };
  },
});
</script>
