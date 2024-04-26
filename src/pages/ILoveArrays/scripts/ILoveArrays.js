
import { defineComponent, ref, computed } from "vue";
import { useHomeStore } from "src/stores/Home/home";
export default defineComponent({
  name: "ILoveArrays",
  setup() {
    // Importing a hook called `useHomeStore` to access state and methods related to the home component.
    const home = useHomeStore();

    // Declaring reactive variables for input, error message, and results.
    let inputNumbers = ref('');
    let errorMessage = ref('');
    let results = ref({});

    // Function to handle input: parsing input numbers, checking for validity, length of elements and updating error message if necessary.
    const handleInput = () => {
      const inputArray = inputNumbers.value.split(',').map(num => parseInt(num.trim()));
      if (inputArray.length > 50) {
        errorMessage.value = 'Please enter a maximum of 50 elements only';
        return;
      } else if (inputArray.some(num => isNaN(num) || num < 0 || num > 9)) {
        errorMessage.value = 'Please enter valid numbers from 0 to 9.';
        return;
      } else {
        errorMessage.value = '';
      }
    };

    // Function to handle form submission: calculating counts of each input number and updating results.
    const handleSubmit = () => {
      const inputArray = inputNumbers.value.split(',').map(num => parseInt(num.trim()));

      const counts = {};
      inputArray.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
      });
      results.value = counts;
    };

    // Computed property to sort the results object by numbers in descending order and counts in descending order.
    const sortedResults = computed(() => {
      const keyValuePairs = Object.entries(results.value);

      // Sort the array of key-value pairs by count and then by number, both in descending order.
      keyValuePairs.sort((a, b) => {
        // Sort by count in descending order.
        if (b[1] !== a[1]) {
          return b[1] - a[1];
        } else {
          // If counts are equal, sort by number in descending order.
          return b[0] - a[0];
        }
      });

      // Finalize the result
      const sortedResults = [];
      keyValuePairs.forEach(([key, value]) => {
        sortedResults.push({ number: key, count: value })
      });

      return sortedResults;
    });

    return {
      home,
      inputNumbers,
      errorMessage,
      results,
      handleInput,
      handleSubmit,
      sortedResults
    };
  },
});
