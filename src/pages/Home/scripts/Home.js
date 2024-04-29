import { defineComponent, ref, onMounted } from "vue";
import { useHomeStore } from "src/stores/Home/home";
export default defineComponent({
  name: "Home",
  setup() {
    // Access the home store using a custom hook
    const home = useHomeStore();

    // Function to check the input value and update state accordingly
    const checkInputValue = () => {
      // Check if the name input field is not empty
      if (home.form.name) {
        // Update the home store state indicating that a name value is present
        home.isNameHasValue = true;
      } else {
        // Update the home store state indicating that no name value is present
        home.isNameHasValue = false;
      }
    }

    // Check immediately if input has no value
    onMounted(() => {
      checkInputValue()
    })

    return {
      home,
      checkInputValue
    };
  },
});
