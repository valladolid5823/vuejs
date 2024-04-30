<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <div class="q-px-md text-riht">
        <q-toggle
          label="Dark Mode"
          left-label
          v-model="value"
          @update:model-value="toggleDarkMode()"
          color="grey"
          class="q-ml-xs"
        />
      </div>
      <q-list class="q-mt-xl">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useQuasar } from "quasar";
const linksList = [
  {
    title: "Home",
    icon: "home",
    router: "home",
  },
  {
    title: "I Love Arrays",
    icon: "data_array",
    router: "i-love-arrays",
  },
  {
    title: "Rest API",
    icon: "api",
    router: "rest-api",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);

    const toggleDarkMode = () => {
      // Invert the current value of 'dark'
      $q.dark.toggle();
    };

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleDarkMode,
      value: ref(false),
    };
  },
});
</script>
