<template>
  <q-layout view="lHh Lpr lFf">
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

        <q-toolbar-title class="text-dark"> Vuejs </q-toolbar-title>
        <div>
          <q-icon
            @click="toggleDarkMode"
            :name="$q.dark.isActive ? 'dark_mode' : 'light_mode'"
            class="text-dark cursor-pointer"
            size="sm"
          >
            <q-tooltip class="text-no-wrap">
              Mode: {{ $q.dark.isActive ? "Dark" : "Light" }}
            </q-tooltip>
          </q-icon>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
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
    };
  },
});
</script>
