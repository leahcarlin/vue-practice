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
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
  <div v-if="posts.length">
    <BlogPosts v-if="showPosts" :posts="posts" />
  </div>
  <div v-else>Loading...</div>
  <button @click="showPosts = !showPosts">Toggle Posts</button>
  <button @click="posts.pop()">Delete a Post</button>
</template>

<script>
import BlogPosts from "./BlogPosts.vue";
import getPosts from "../../composables/getPosts";
import { ref, reactive } from "@vue/reactivity"; // import the parts from vue that you need to use
export default {
  name: "Blog",
  components: { BlogPosts },
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

    const showPosts = ref(true);

    const { posts, error, load } = getPosts(); // assign to function so that you can use variables
    load();

    return {
      name,
      age,
      blog,
      handleClick,
      updateBlog,
      blogTwo,
      updateBlogTwo,
      posts,
      showPosts,
      error,
    };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
