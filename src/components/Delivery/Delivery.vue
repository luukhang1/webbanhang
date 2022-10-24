<template>
  <div style="overflow: auto;height: 100%">
    <h1>Day la hang van chuyen</h1>
    <div  v-for="data in listDelivery" :key="data.code"  >
     <div class="delevery-class" v-if="data.totalPrice >0">
       <input type="radio" name="select">
       <img :src="getUrl(data.image)" class="img-price">
       <div class="discription">
         <div class="discription__custum">
           <span>{{data.code}}</span>
           <span>{{data.description}}</span>
         </div>
       </div>
       <span  class="price">{{data.totalPrice}}</span>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Delivery',
  props: {
    ishowLoading: Boolean,
    // eslint-disable-next-line vue/require-prop-type-constructor
    dataResponeCheckPrice: Array| Promise
  },
  data() {
    return {
      listDelivery: []
    }
  },
  created() {
    if (this.dataResponeCheckPrice && this.dataResponeCheckPrice.length && this.dataResponeCheckPrice.length >1) {
      for (const data of this.dataResponeCheckPrice) {
        for (const datum of data) {
          this.listDelivery.push(datum)
        }
      }
    }
    console.log(this.listDelivery)

  },
  methods: {
    getUrl(url) {
      return url
    },
    conso() {
      this.listDelivery = JSON.parse(JSON.stringify(this.dataResponeCheckPrice))
    }
  }

}
</script>
<style scoped>
.img-price{
  width: 100px;
  padding-left: 20px;
  padding-right: 20px;
  object-fit: contain;
}
.delevery-class{
  max-height: 50px;
  padding: 15px;
  display: flex;
  border-bottom: 1px solid;
}
.price{
  float: right;
  flex-basis: 100%;
  justify-self: end;
  text-align: end;
  color: #0048ff;
}
.discription{
  align-self: center;
  min-width: 150px;
  font-size: small;

}
.discription__custum{
  display: flex;
  width: max-content;
  flex-direction: column;
  align-items: start;
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