<template>
  <div v-if="posts.length > 0">
    <h3>Posts List</h3>
    <TransitionGroup name="postsList">
      <Postitem :post="post" v-for="post in posts"  :key="post.id" @removePost="$emit('removePost',post.id)"/>
    </TransitionGroup>
  </div>
  <div v-else class="emptyList" >Posts list is empty</div>
</template>

<script>
import Postitem from "./Postitem.vue";

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: { Postitem },
};
</script>

<style scoped>
.emptyList{
  color:red;
  margin: 30px auto;
  width: 200px;
  font-size: 25px;
}
.postsList-move,
.postsList-enter-active,
.postsList-leave-active {
  transition: all 0.5s ease;
}
.postsList-enter-from,
.postsList-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
