<template>
  <Navbar/>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Navbar from './components/UI/Navbar.vue';
export default{
  components: { RouterView, Navbar }
}
</script>

<style>
.app {
  padding: 20px;
}
</style>
