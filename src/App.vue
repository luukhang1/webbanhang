<template>
  <MainWeb>

  </MainWeb>
</template>

<script>

import MainWeb from "./components/MainWeb.vue";
export default {
  name: 'App',
  components: {MainWeb},
  data() {
    return {
      ngoc: this.$store.state.ngoc
    }
  },
  created() {
    console.log(this.ngoc,222)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  animation-name: ngoc222;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
/*@-webkit-keyframes ngoc {*/
/*  from {*/
/*    background-color: #42b983;*/
/*    height: 0;*/
/*    opacity: 0;*/
/*  }*/
/*  to {*/
/*    height: 100vh;*/
/*    opacity: 1;*/
/*  }*/
/*}*/
@keyframes ngoc222 {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 0.5;
  }

}
</style>
