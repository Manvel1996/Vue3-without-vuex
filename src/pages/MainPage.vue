<template>
  <div>
    <h1>Welcome to Vue 3</h1>
    <RouterLink to="/posts">Posts</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
};
</script>

<style></style>
