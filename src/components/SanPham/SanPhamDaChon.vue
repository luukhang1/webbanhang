<template>
  <div class="product-choice" >
    <div v-for="list in listProductChoices" :key="list.id" class="anim">
      {{list}}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    listProductChoices: Array | Function
  },
  created() {
    console.log(this.listProductChoices, this.$store.state.dataProductChoice, 'dsdsd')
  }
}
</script>
<style scoped>
.ngoc{
  animation: ngoc 10s;
  animation-iteration-count: infinite;
}
@-webkit-keyframes ngoc {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
.product-choice{
  width: 100%;
  height: 300px;
  border: 1px solid;
  border-radius: 15px;
}
</style>