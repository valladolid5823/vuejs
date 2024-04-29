// Importing the defineStore function from the 'pinia' library, which is used for creating a Vuex-like store.
import { defineStore } from 'pinia';

// Defining a new store called 'useHomeStore' using the defineStore function.
export const useHomeStore = defineStore('home', {
  // Defining the initial state of the store.
  state: () => ({
    // Initializing the 'form' object with a 'name' field set to an empty string.
    form: {
      name: ''
    },
    // Initializing a boolean variable 'isNameHasValue' with a value of false.
    isNameHasValue: false,
  }),
});
