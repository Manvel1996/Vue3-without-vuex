<template>
  <form @submit.prevent>
    <h4>Add New Post</h4>
    <MyInput v-focus v-model.trim="post.title" type="text" placeholder="Name" />
    <MyInput v-model.trim="post.body" type="text" placeholder="Body" />
    <MyButton style="align-self: flex-end; margin-top: 15px" @click="createPost"
      >Create Post</MyButton
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
