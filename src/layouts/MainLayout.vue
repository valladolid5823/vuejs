<template>
  <q-layout view="lHh Lpr lFf" :class="`${theme.dark ? 'dark-mode' : 'light-mode'} bg-white`">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="text-dark"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-dark" > Vuejs </q-toolbar-title>
        <div><q-icon @click="theme.toggleDarkMode" :name="theme.dark ? 'dark_mode' : 'light_mode'" class="text-dark cursor-pointer" size="sm"/> </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-secondary" >
      <q-list class="q-mt-xl">
        <!-- <q-item-label header> Essential Links </q-item-label> -->

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useThemeStore } from "src/stores/theme";
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
    const theme = useThemeStore();
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      theme
    };
  },
});
</script>
