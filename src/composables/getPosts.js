import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      const data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("No data available");
      } else {
        posts.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value, err.message);
    }
  };
  return { posts, error, load }; // need to return so it can be used in another component
};

export default getPosts;
