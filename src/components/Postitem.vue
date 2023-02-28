<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Name </strong> {{ post.title }}</div>
      <div><strong>Body</strong> {{ post.body }}</div>
    </div>
    <div class="postBtns">
      <MyButton @click="$router.push(`/posts/${post.id}`)">Open</MyButton>
      <MyButton @click="$emit('removePost',post.id)">Remove</MyButton>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 2px solid orange;
  margin-top: 15px;
}
.postBtns{
  display: flex;
  gap: 5px;
}
</style>
