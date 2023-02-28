<template>
  <nav class="navbar">
    <div style="cursor: pointer;" @click="$router.push('/')">Vue 3 Without Vuex</div>
    <div class="navbarBtns">
      <MyButton @click="$router.push('/posts')">Posts</MyButton>
      <MyButton @click="$router.push('/about')">About</MyButton>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background: lightgray;
  box-shadow: 2px 2px 4px gray;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbarBtns{
    display: flex;
    gap: 5px;
}
</style>
