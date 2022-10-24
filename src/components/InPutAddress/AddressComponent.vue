<template>
  <div class="address">
    <div class="address-input">
      <div class="dfex-row">
        <div>
          <span @click="clickShowDictrictAddress()" class="address__border" id="district-address">Thanh Pho Nguoi Gui</span>
          <div class="address-list" id="add-11" v-show="showDictric" :class="[showDictric ? 'active' : '']">
            <ul >
              <li @click="updateSenderDistrictAddress(1)" class="district-value"><span>dia chi 1<i v-if="idDistrictSelected == 1" class="bi bi-check"></i></span></li>
              <li @click="updateSenderDistrictAddress(2)" class="district-value"><span>dia chi 1<i v-if="idDistrictSelected == 2" class="bi bi-check"></i></span></li>
            </ul>
          </div>
        </div>
        <div>
          <span @click="clickShowAddress()" class="address__border" id="ward-address">Phuong xa nguoi gui</span>
          <div class="address-list" id="id-1" v-show="showAddress" :class="[showAddress ? 'active' : '']">
            <ul >
              <li @click="updateSenderWardAddress(1)" class="district-value"><span>dia chi 1<i v-if="idWardSelected == 1" class="bi bi-check"></i></span></li>
              <li @click="updateSenderWardAddress(2)" class="district-value"><span>dia chi 1<i v-if="idWardSelected == 2" class="bi bi-check"></i></span></li>
            </ul>
          </div>
        </div>
        <div>
          <span @click="clickShowReceiverDistrictAddress()" class="address__border" id="distric-receiver-address">Thanh pho nguoi nhan</span>
          <div class="address-list" id="id-3" v-show="showReceiverAddress" :class="[showReceiverAddress ? 'active' : '']">
            <ul >
              <li @click="updateReceiverDistrictAddress(1)" class="district-value"><span>dia chi 1<i v-if="idDistrictReceiverSelected == 1" class="bi bi-check"></i></span></li>
              <li @click="updateReceiverDistrictAddress(2)" class="district-value"><span>dia chi 1<i v-if="idDistrictReceiverSelected == 2" class="bi bi-check"></i></span></li>
            </ul>
          </div>
        </div>
        <div>
          <span @click="clickShowReceiverWardAddress()" class="address__border" id="ward-receiver-address">Dia chi nguoi nhan</span>
          <div class="address-list" id="id-4" v-show="showReceiverWardAddress" :class="[showReceiverWardAddress ? 'active' : '']">
            <ul >
              <li @click="updateReceiverWardAddress(1)" class="district-value"><span>dia chi 1<i v-if="idWardReceiverSelected == 1" class="bi bi-check"></i></span></li>
              <li @click="updateReceiverWardAddress(2)" class="district-value"><span>dia chi 1<i v-if="idWardReceiverSelected == 2" class="bi bi-check"></i></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
import $ from 'jquery'
export default {
  name: 'AddressComponent',
  data() {
    return {
      idDistrictSelected: 1,
      idDistrictReceiverSelected: 1,
      idWardSelected: 1,
      idWardReceiverSelected: 1,
      showDictric: false,
      countClick: 1,
      countClick1: 1,
      countClick3: 1,
      countClick4: 1,
      showAddress: false,
      showReceiverAddress: false,
      showReceiverWardAddress: false,
      myValue: '',
      myOptions: ['op1', 'op2', 'op3'] // or [{id: key, text: value}, {id: key, text: value}]
    }
  },
  methods: {
    updateReceiverWardAddress(idDistrict) {
      this.idWardReceiverSelected = idDistrict
      this.countClick4 = 1
      this.showReceiverWardAddress = false
      this.$emit('changeReceiverAddess', this.idWardReceiverSelected, this.idDistrictReceiverSelected)
    },
    updateReceiverDistrictAddress(idDistrict) {
      this.idDistrictReceiverSelected = idDistrict
      this.countClick3 = 1
      this.showReceiverAddress = false
      this.$emit('changeReceiverAddess', this.idWardReceiverSelected, this.idDistrictReceiverSelected)
    },
    clickShowReceiverWardAddress() {
      if(this.countClick4 == 1) {
        this.showReceiverWardAddress = true
        this.countClick4 = 2
        const element = $('#id-4');
        const district = $('#ward-receiver-address');
        this.changeWidth(element, district.width())
      } else {
        this.showReceiverWardAddress = false
        this.countClick4 = 1
      }
    },
    clickShowReceiverDistrictAddress() {
      if(this.countClick3 == 1) {
        this.showReceiverAddress = true
        this.countClick3 = 2
        const element = $('#id-3');
        const district = $('#distric-receiver-address');
        this.changeWidth(element, district.width())
      } else {
        this.showReceiverAddress = false
        this.countClick3 = 1
      }
    },
    updateSenderWardAddress(idWrard) {
      this.idWardSelected = idWrard
      this.countClick = 1
      this.showAddress = false
      this.$emit('changeSenderAddess', this.idWardSelected, this.idDistrictSelected)
    },
    updateSenderDistrictAddress(idDistrict) {
      this.idDistrictSelected = idDistrict
      this.countClick1 = 1
      this.showDictric = false
      this.$emit('changeSenderAddess', this.idWardSelected, this.idDistrictSelected)
    },
    clickShowDictrictAddress() {
      if(this.countClick1 == 1) {
        this.showDictric = true
        this.countClick1 = 2
          const element = $('#add-11');
          const district = $('#district-address');
          this.changeWidth(element, district.width())
      } else {
        this.showDictric = false
        this.countClick1 = 1
      }
    },
    changeWidth(element, width) {
      if (element) {
        element.width(width)
      }
    },
    clickShowAddress() {
      if(this.countClick == 1) {
        this.showAddress = true
        this.countClick = 2
        const element = $('#id-1');
        const district = $('#ward-address');
        this.changeWidth(element, district.width())
      } else {
        this.showAddress = false
        this.countClick = 1
      }

    }
  }

}
</script>
<style scoped>
.dfex-row{
  display: flex;
  gap: 1rem;
  aspect-ratio: 16/9;
  flex-grow: 1;
}
.address__border{
  border: 1px solid rgb(0,0,0,0.2);
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 0 15px 0 rgb(0,0,0,0.4);
}
.active{
  animation: showlist 1s;
}
.address-list{

  position: absolute;
  border-radius: 5px;
  background-color: aliceblue;
  box-shadow: 0 0 15px 0 rgb(0, 0,0,0.5);
  z-index: 3;
  padding: 10px;
}
@-webkit-keyframes showlist {
  0%{
    height: 0;
  }
  100%{
    height: 100%;
  }

}
@keyframes showlist {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }

}
.address-list ul{
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  text-align: center;
  padding: 0;
}
.address{
  display: flex;
  border: 1px solid;
  border-radius: 20px;
  padding: 5px;
  flex-direction: column;

}
.address-input{
  display: flex;
  flex-grow: 1;
  padding: 10px;

}
.district-value:hover {
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background-color: rgb(0,0,0,0.1);
}
.district-value  i {
  float: right;
  color: #42b983;
}
</style>