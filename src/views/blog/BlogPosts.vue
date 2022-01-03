<template>
  <div>
    <h1>Blog Posts</h1>
    <input type="text" v-model="search" />
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, computed } from "@vue/reactivity";

export default {
  name: "BlogPosts",
  setup() {
    const search = ref("");
    const names = ref(["Leah", "Bill", "Bobby", "Julie"]);

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { names, search, matchingNames };
  },
};
</script>

<style></style>
