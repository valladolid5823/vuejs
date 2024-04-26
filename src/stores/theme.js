// Import necessary functions and modules
import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

// Define a store for managing theme-related state
export const useThemeStore = defineStore('theme', {
  // Define the initial state of the store
  state: () => ({
    // Initialize the 'dark' property with the value retrieved from local storage
    dark: LocalStorage.getItem('dark-mode'),
  }),

  // Define actions to modify the state
  actions: {
    // Action to toggle the dark mode
    toggleDarkMode() {
      // Invert the current value of 'dark'
      this.dark = !this.dark;
      // Update the 'dark-mode' item in local storage with the new value
      LocalStorage.setItem('dark-mode', this.dark)
    },
  },
});
