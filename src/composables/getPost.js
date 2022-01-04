import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      const data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) {
        throw Error("That post does not exist");
      } else {
        post.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value, err.message);
    }
  };
  return { post, error, load }; // need to return so it can be used in another component
};

export default getPost;
