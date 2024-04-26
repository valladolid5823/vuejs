import { defineComponent, ref } from "vue";
import { useHomeStore } from "src/stores/Home/home";
import { api } from "src/boot/axios";
export default defineComponent({
  name: "RestApi",
  setup() {
    // Importing a hook called `useHomeStore` to access state and methods related to the home component.
    const home = useHomeStore();

    // Images container
    let images = ref([]);

    // Identifier for button loading state
    let btnLoadingState = ref(false);

    // Fetch random 6 images by default
    const fetchRandomImages = async (number = 6) => {

      // Enable btn loading state
      btnLoadingState.value = true;
      // Trigger a get request
      await api.get(`breeds/image/random/${number}`).then((response) => {
        // Collect unsuccessful images inserts
        let rejectedImages = 0;
        /**
         * Check if the link already exists in the array
         * If not, push the link into the array
         * 
         * Count rejected images
         */
        response.data.message.forEach(image => {
          images.value.includes(image) ? rejectedImages++ : images.value.push(image);
        });

        // Supply new images
        rejectedImages !== 0 && fetchRandomImages(rejectedImages);
      }).catch((error) => {
        alert('Error: ', error)
      }).finally((response) => {
        // Disable the btn loading state
        btnLoadingState.value = false;
      })
    }


    return {
      home,
      images,
      fetchRandomImages,
      btnLoadingState
    };
  },
});
