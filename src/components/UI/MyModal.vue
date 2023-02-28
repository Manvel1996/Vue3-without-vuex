<template>
  <div class="myModal" v-if="show" @click="hideModal">
    <div class="modalContent" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods:{
    hideModal(){
        this.$emit('update:show', false)
    }
  }
};
</script>

<style scoped>
.myModal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
}
.modalContent{
    background: white;
    padding: 15px;
    min-width: 250px;
    min-height: 50px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
}
</style>
