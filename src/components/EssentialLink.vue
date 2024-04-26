<template>
  <q-item
    clickable
    :to="router"
    :disable="router !== 'home' && !home.isNameHasValue"
    class="text-dark"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section >
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";
import { useHomeStore } from "src/stores/Home/home";
export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
    router: {
      type: String,
      default: "",
    },
  },

  setup() {
    const home = useHomeStore();
    return {
      home,
    };
  },
});
</script>
