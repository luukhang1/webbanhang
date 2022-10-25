<template>
  <div class="address">
    <div class="address-input">
<!--      <div class="dfex-row">-->
        <div class="dfex-row-1" id="district-address">
          <span @click="clickShowDictrictAddress()" class="address__border" >{{districtSenderSelected.name}}</span>
          <div class="address-list" id="add-11" v-show="showDictric" :class="[showDictric ? 'active' : '']">
            <input v-model="itemSelected" class="input-group">
            <ul v-for="location in filterLocation" :key="location.location_id">
              <li   class="district-value" @click="updateSenderDistrictAddress(location.location_id, location.location_name)"><span>{{location.location_name.trim()}}<i v-if="location.location_id == districtSenderSelected.id" class="bi bi-check"></i></span></li>
<!--              <li @click="updateSenderDistrictAddress(2)" class="district-value"><span>dia chi 1<i v-if="idDistrictSelected == 2" class="bi bi-check"></i></span></li>-->
            </ul>
          </div>
        </div>
        <div class="dfex-row-1" id="ward-address">
          <span @click="clickShowAddress()" class="address__border" >{{ wardSenderSelected.name }}</span>
          <div class="address-list" id="id-1" v-show="showAddress" :class="[showAddress ? 'active' : '']">
            <input v-model="itemWardSelected" class="input-group">
            <ul v-for="location in filterWardLocation" :key="location.kv_id">
              <li @click="updateSenderWardAddress(location.kv_id, location.name)" class="district-value"><span>{{location.name.trim()}}<i v-if="location.kv_id == wardSenderSelected.id" class="bi bi-check"></i></span></li>
<!--              <li @click="updateSenderWardAddress(2)" class="district-value"><span>dia chi 1<i v-if="idWardSelected == 2" class="bi bi-check"></i></span></li>-->
            </ul>
          </div>
        </div>
        <div class="dfex-row-1" id="distric-receiver-address">
          <span @click="clickShowReceiverDistrictAddress()" class="address__border" >{{ districtReceiverSelected.name }}</span>
          <div class="address-list" id="id-3" v-show="showReceiverAddress" :class="[showReceiverAddress ? 'active' : '']">
            <input v-model="itemSelected" class="input-group">
            <ul v-for="location in filterLocation" :key="location.location_id">
              <li   class="district-value" @click="updateReceiverDistrictAddress(location.location_id, location.location_name)"><span>{{location.location_name}}<i v-if="location.location_id == districtReceiverSelected.id" class="bi bi-check"></i></span></li>
              <!--              <li @click="updateSenderDistrictAddress(2)" class="district-value"><span>dia chi 1<i v-if="idDistrictSelected == 2" class="bi bi-check"></i></span></li>-->
            </ul>
<!--            <ul >-->
<!--              <li @click="updateReceiverDistrictAddress(1)" class="district-value"><span>dia chi 1<i v-if="idDistrictReceiverSelected == 1" class="bi bi-check"></i></span></li>-->
<!--              <li @click="updateReceiverDistrictAddress(2)" class="district-value"><span>dia chi 1<i v-if="idDistrictReceiverSelected == 2" class="bi bi-check"></i></span></li>-->
<!--            </ul>-->
          </div>
        </div>
        <div class="dfex-row-1" id="ward-receiver-address">
          <span @click="clickShowReceiverWardAddress()" class="address__border" >{{wardReceiverSelected.name}}</span>
          <div class="address-list" id="id-4" v-show="showReceiverWardAddress" :class="[showReceiverWardAddress ? 'active' : '']">
            <input v-model="itemWardSelected" class="input-group">
            <ul v-for="location in filterWardLocation" :key="location.kv_id">
              <li @click="updateReceiverWardAddress(location.kv_id, location.name)" class="district-value"><span>{{location.name.trim()}}<i v-if="location.kv_id == wardReceiverSelected.id" class="bi bi-check"></i></span></li>
              <!--              <li @click="updateSenderWardAddress(2)" class="district-value"><span>dia chi 1<i v-if="idWardSelected == 2" class="bi bi-check"></i></span></li>-->
            </ul>
<!--            <ul >-->
<!--              <li @click="updateReceiverWardAddress(1)" class="district-value"><span>dia chi 1<i v-if="idWardReceiverSelected == 1" class="bi bi-check"></i></span></li>-->
<!--              <li @click="updateReceiverWardAddress(2)" class="district-value"><span>dia chi 1<i v-if="idWardReceiverSelected == 2" class="bi bi-check"></i></span></li>-->
<!--            </ul>-->
          </div>
        </div>
<!--      </div>-->
    </div>

  </div>

</template>
<script>
import $ from 'jquery'
export default {
  name: 'AddressComponent',
  props: {
    listLocation: {}
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    filterWardLocation: function () {
      if (this.listWardLocation.length)
      return this.listWardLocation.filter(item => {
        let name = item.name
        name = this.normalizion(name)
        return name.toLowerCase().includes(this.normalizion(this.itemWardSelected).toLowerCase().trim())
      })
    },
    // eslint-disable-next-line vue/return-in-computed-property
    filterLocation: function () {
      return this.listLocation.filter(item => {
        let name = item.location_name
        name = this.normalizion(name)
        return name.toLowerCase().includes(this.normalizion(this.itemSelected).toLowerCase().trim())
      })
    }
  },
  data() {
    return {
      districtSenderSelected:{
        name:'Thanh pho nguoi gui',
        id: 1,
      },
      districtReceiverSelected:{
        name:'Thanh pho nguoi gui',
        id: 1,
      },
      wardSenderSelected:{
        name:'phuong xa nguoi gui',
        id: 1,
      },
      wardReceiverSelected:{
        name:'phuong xa nguoi gui',
        id: 1,
      },
      itemWardReceiverSelected:'',
      itemDistrictSelected: "",
      itemSelected: '',
      listWardLocation: {},
      idDistrictSelected: 1,
      itemWardSelected: '',
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
    normalizion (item) {
      return item.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
    },
    updateReceiverWardAddress(idDistrict, name) {
      this.wardReceiverSelected.name = name
      this.wardReceiverSelected.id = idDistrict
      this.countClick4 = 1
      this.showReceiverWardAddress = false
      this.$emit('changeReceiverAddess', this.idWardReceiverSelected, this.idDistrictReceiverSelected)
    },
    updateReceiverDistrictAddress(idDistrict, name) {
      this.districtReceiverSelected.name = name
      this.districtReceiverSelected.id = idDistrict
      this.countClick3 = 1
      this.showReceiverAddress = false
      this.$emit('changeReceiverAddess', this.idWardReceiverSelected, this.idDistrictReceiverSelected)
    },
    clickShowReceiverWardAddress() {
      if(this.countClick4 == 1) {
        this.listWardLocation = JSON.parse(localStorage.getItem('location-'+this.idDistrictReceiverSelected))
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
    updateSenderWardAddress(idWrard, name) {
      this.wardSenderSelected.id = idWrard
      this.wardSenderSelected.name = name
      this.countClick = 1
      this.showAddress = false
      this.$emit('changeSenderAddess', this.idWardSelected, this.idDistrictSelected)
    },
    updateSenderDistrictAddress(idDistrict, name) {
      this.districtSenderSelected.name = name
      this.districtSenderSelected.id = idDistrict
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
        this.listWardLocation = JSON.parse(localStorage.getItem('location-'+this.idDistrictSelected))
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
.input-group{
  border-radius: 3px;
  border: none;
}
.input-group:focus-visible{
  outline: none;
  border-bottom: 1px solid #42b983;
}
.dfex-row-1{
  width: 49%;
}
.dfex-row{
  display: flex;
}
.address__border{
  display: inline-block;
  border: 1px solid rgb(0,0,0,0.2);
  padding: 8px;
  border-radius: 8px;
  width: 99%;
  box-shadow: 0 0 15px 0 rgb(0,0,0,0.4);
}
.active{
  animation: showlist 1s;
}
.address-list{
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 250px;
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
  padding: 10px;
  width: 100%;
  flex-wrap: wrap;

}
.district-value:hover {
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background-color: rgb(0,0,0,0.003);

}
.district-value  i {
  float: right;
  color: #42b983;
  font-size: 20pt;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(0,0,0,0.1);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
}
</style>
