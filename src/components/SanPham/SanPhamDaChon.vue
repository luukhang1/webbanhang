<template>
  <div class="product-choice"  v-if="listProductChoices && listProductChoices.length > 0">
    <div v-for="list in listProductChoices" :key="list">
      <div v-if="list && list.id" class="anim">
        <span>{{list.id}}</span>
        <i class="bi bi-trash" @click="remove(list.id)"></i>
        <span>{{list.name}}</span>
        <div style=" display: flex; flex-direction: column; justify-content: space-between">
          <span style="display: block; align-self: center">{{list.total}} </span>
          <span >{{list.price}}</span>
        </div>
      </div>
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
    if (!this.listProductChoices.length)
        // eslint-disable-next-line vue/no-mutating-props
      this.listProductChoices = []
  },
  methods: {
    remove(id) {
      this.$emit('removeProductChoice', id)
    }
  }
}
</script>
<style scoped>
.anim{
  height: 80px;
  border: 1px solid rgb(0,0,0,0.5);
  background-color: white;
  border-radius: 8px;
  box-shadow: inset 0 0 6px rgb(0,0,0,0.03);
  display: flex;
  justify-content: space-between;
}
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
  overflow: auto;
  width: 100%;
  height: 300px;
  border: 1px solid;
  border-radius: 15px;
  background-color: rgb(0,0,0,0.03);

}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  margin: 10px;
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
}
</style>
