<template>
  <h1>Blog</h1>
  <h2>Refs</h2>
  <p>My name is {{ name }}. I'm {{ age }} years old.</p>
  <p>Posts: {{ blog.posts }} - Comments: {{ blog.comments }}</p>
  <input type="text" v-model="name" />
  <button @click="handleClick">Click Me</button>
  <button @click="updateBlog">Add +1 to posts</button>
  <h2>Reactive</h2>
  <p>Posts: {{ blogTwo.posts }} - Comments: {{ blogTwo.comments }}</p>
  <button @click="updateBlogTwo">Add +1 to comments</button>
</template>

<script>
import { ref, reactive } from "@vue/reactivity"; // import the parts from vue that you need to use
export default {
  name: "Blog",
  setup() {
    const name = ref("Leah"); // these are now reactive values
    const age = ref(34);
    const blog = ref({ posts: 4, comments: 3 });
    const blogTwo = reactive({ posts: 6, comments: 10 });

    const handleClick = () => {
      name.value = "Bill";
    };

    const updateBlog = () => {
      blog.value.posts += 1;
    };

    const updateBlogTwo = () => {
      blogTwo.comments += 1;
    };
    return {
      name,
      age,
      blog,
      handleClick,
      updateBlog,
      blogTwo,
      updateBlogTwo,
    };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
