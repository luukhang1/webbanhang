<template>
  <div class="product" v-for="product in productList" :key="product.id" @click="choice(product)">
    <img src="https://cdn.mediamart.vn/images/product/-N2Yq4h.jpg">
    <div>
      <span style="display: block">{{product.name}}</span>
      <span style="color: #0048ff">{{product.price}}</span>
    </div>
  </div>

</template>
<script>
  export default {
    props: {
      productList: Array
    },
    created() {
    },
    methods:{
      // eslint-disable-next-line no-unused-vars
      choice(id) {
        console.log(this.$store.state.dataProductChoice)
        this.$emit('choiceProduct',id)
      }
    }
  }

</script>
<style scoped>
.product{
  display: flex;
  align-items: center;
  animation-name: show;
  animation-iteration-count: 1 ;
  animation-duration: 1s;
  width: 49%;
  height: 100px;
  border: 1px solid;
  border-radius: 15px;
}
@keyframes show {
  from {
    opacity: 0;
  }
  25% {
    width: 100px;
  }
  100%{
    width: 200px;
  }
  to {
    opacity: 1;
  }
}
.product:hover {
  cursor: pointer;
  border: 1px solid #0048ff;
  box-shadow: 0 0 10px 0px rgb(0,0,0,0.5);
}
.product img{
  max-width: 50%;
  max-height: 100%;
  border-radius: 20px;
}
</style>
