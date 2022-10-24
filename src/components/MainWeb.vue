<template >
  <h3>Hello day la main web</h3>
  <div class=" main-web">
    <div class="main-web-left" >
      <div class="main-web-left-top">
        <san-pham
            :product-list="productList"
            @choiceProduct="choiceProduct"
        >
        </san-pham>
      </div>
      <div class="main-web-left-buttom">
        <san-pham-da-chon
            v-if="ngoc"
            :list-product-choices="productChoiceList"
            @removeProductChoice="removeProductChoice"
        >
        </san-pham-da-chon>
        <AddressComponent
            :list-location="listLocation"
            @changeSenderAddess="changeSenderAddess"
            @changeReceiverAddess="changeReceiverAddess"
        />
      </div>
    </div>
    <div class="main-web-right">
      <div class="check-price">
        <check-price
        :data-check-price="dataResponeCheckPrice"
        :is-loading="ishowLoading"
        @changeShowLoading="changeShowLoading"
        >
        </check-price>
      </div>

    </div>
  </div>
  <div v-if="ishowLoading">
    <Loading
    />
  </div>

</template>
<script>
import GetPrice from "../components/Common/GetPrice"
import GetLocation from "@/components/Common/GetLocation";
import SanPham from "@/components/SanPham";
import CheckPrice from "@/components/CheckPrice";
import SanPhamDaChon from "@/components/SanPham/SanPhamDaChon";
import AddressComponent from "@/components/InPutAddress/AddressComponent";
import Loading from "@/components/Loader/Loading";
// import getPrice from "@/components/Common/GetPrice";
export default {
  components: {Loading, AddressComponent, SanPhamDaChon, CheckPrice, SanPham},
  async created() {
    if (!localStorage.getItem('location')) {
      this.listLocation = await this.getlocation()
    } else {
      this.listLocation = JSON.parse(localStorage.getItem('location'))
    }
    let seft = this
    await this.listLocation.filter(async (item) => {
      await seft.getWardlocation(item.location_id)
    })

  },
  data() {
    return {
      listLocation: {},
      ishowLoading: false,
      dataResponeCheckPrice: {},
      senderAddess: {},
      ReceiverAddress: {},
      ngoc: false,
      dataCheckPrice: {
        "ACTIVE_KSHIP": true,
        "SENDER_LOCATION_ID": 349,
        "SENDER_WARD_ID": 9240,
        "SENDER_ADDRESS": "26 đường số 3 khu phố 4",
        "RECEIVER_LOCATION_ID": 348,
        "RECEIVER_WARD_ID": 9283,
        "RECEIVER_ADDRESS": "92 nguyen khuyen , phường 12, quận binh thanh, hcm",
        "PRODUCT_WIDTH": 1,
        "PRODUCT_HEIGHT": 1,
        "PRODUCT_LENGTH": 1,
        "PRODUCT_WEIGHT": 500,
        "PRODUCT_QUANTITY": 0,
        "MONEY_COLLECTION": 0,
        "SERVICES": [
          {
            "CODE": "VTK"
          },
          {
            "CODE": "PHS"
          },
          {
            "CODE": "LCOD"
          },
          {
            "CODE": "LECO"
          }
        ],
        "SERVICE_EXTRA": [
          {
            "Code": "PaymentBy",
            "Value": "NGUOIGUI",
            "ViewType": "Radio",
            "Name": "Người gửi trả phí"
          },
          {
            "Code": "ShipperNote",
            "Value": "KHONGCHOXEMHANG",
            "ViewType": "DropdownList",
            "Name": "Không cho xem hàng"
          }
        ]
      },
      productList: [
        {
          id: 1,
          name: 'ban la',
          price: 15000
        },
        {
          id: 2,
          name: 'ban la',
          price: 15000
        },
        {
          id: 3,
          name: 'ban la',
          price: 15000
        }
      ],
      productChoiceList: Array
    }
  },
  methods: {
    removeProductChoice(id) {
      if (this.productChoiceList.length ) {

        let index = this.productChoiceList.findIndex(item =>
          item.id == id
        )
        this.productChoiceList.splice(index, 1);

      }
    },
    async getWardlocation(locationId) {
      if (!localStorage.getItem('location-'+locationId)) {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IndYYSJ9.eyJpc3MiOiJrdnNzand0Iiwic3ViIjoyMjQ3MiwiaWF0IjoxNjY1NjY4MjA2LCJleHAiOjE2NjgwODc0MDYsInByZWZlcnJlZF91c2VybmFtZSI6InNoaXB0ZXN0Iiwicm9sZXMiOlsiVXNlciJdLCJrdnVzZXRmYSI6MCwia3Z3YWl0b3RwIjowLCJrdnNlcyI6IjQyZDBmZGY4MjkwMDQzNDdiYmI1NjM0NGM0NzI0NmJhIiwia3Z1aWQiOjIyNDcyLCJrdmxhbmciOiJ2aS1WTiIsImt2dXR5cGUiOjAsImt2dWxpbWl0IjoiRmFsc2UiLCJrdnVhZG1pbiI6IlRydWUiLCJrdnVhY3QiOiJUcnVlIiwia3Z1bGltaXR0cmFucyI6IkZhbHNlIiwia3Z1c2hvd3N1bSI6IlRydWUiLCJrdmJpZCI6MTIzNjAsImt2cmluZGlkIjo5LCJrdnJjb2RlIjoidGVzdHpvbmUxNyIsImt2cmlkIjo0Mzg1MTksImt2dXJpZCI6NDM4NTE5LCJrdnJnaWQiOjE3LCJwZXJtcyI6IiJ9.KpgnkjBcbm8JkhNF4KrDtFf1Y1LgMeiJOGiTKam3bkqxFPwwh7H0TF58GyhV0ccoOIbDxk2v5OsckB7Ub1gqoIe9iGDPUlBzS-W4hspPqHRMTuGzUBvcTSBjK8NWd6ju7No5SRIrrvnUltlKaa64kSXhZqzhmS6d80DE40XO4JN3pWieNF8fiyXcT-7uXkz-UBRnbRDQywpJ9PWmMBQOGUGhqp_GlIQVJUeehmadrrkdcdRSkDQfr6lpnVeJu63KJ-MBireF19aOfJHdHHkpZwXmN6bGugxRHvch_7pEwVS0ntdj0_jmiMOhdXb6A5oWBUisYPgFnz98C0JvezvBMA'
        const data = await GetLocation.getWardByLocation(token, locationId);
        if (data.data.data) {
          localStorage.setItem('location-'+locationId, JSON.stringify(data.data.data))
        }
      }
    },
    async getlocation() {
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IndYYSJ9.eyJpc3MiOiJrdnNzand0Iiwic3ViIjoyMjQ3MiwiaWF0IjoxNjY1NjY4MjA2LCJleHAiOjE2NjgwODc0MDYsInByZWZlcnJlZF91c2VybmFtZSI6InNoaXB0ZXN0Iiwicm9sZXMiOlsiVXNlciJdLCJrdnVzZXRmYSI6MCwia3Z3YWl0b3RwIjowLCJrdnNlcyI6IjQyZDBmZGY4MjkwMDQzNDdiYmI1NjM0NGM0NzI0NmJhIiwia3Z1aWQiOjIyNDcyLCJrdmxhbmciOiJ2aS1WTiIsImt2dXR5cGUiOjAsImt2dWxpbWl0IjoiRmFsc2UiLCJrdnVhZG1pbiI6IlRydWUiLCJrdnVhY3QiOiJUcnVlIiwia3Z1bGltaXR0cmFucyI6IkZhbHNlIiwia3Z1c2hvd3N1bSI6IlRydWUiLCJrdmJpZCI6MTIzNjAsImt2cmluZGlkIjo5LCJrdnJjb2RlIjoidGVzdHpvbmUxNyIsImt2cmlkIjo0Mzg1MTksImt2dXJpZCI6NDM4NTE5LCJrdnJnaWQiOjE3LCJwZXJtcyI6IiJ9.KpgnkjBcbm8JkhNF4KrDtFf1Y1LgMeiJOGiTKam3bkqxFPwwh7H0TF58GyhV0ccoOIbDxk2v5OsckB7Ub1gqoIe9iGDPUlBzS-W4hspPqHRMTuGzUBvcTSBjK8NWd6ju7No5SRIrrvnUltlKaa64kSXhZqzhmS6d80DE40XO4JN3pWieNF8fiyXcT-7uXkz-UBRnbRDQywpJ9PWmMBQOGUGhqp_GlIQVJUeehmadrrkdcdRSkDQfr6lpnVeJu63KJ-MBireF19aOfJHdHHkpZwXmN6bGugxRHvch_7pEwVS0ntdj0_jmiMOhdXb6A5oWBUisYPgFnz98C0JvezvBMA'
      const data = await GetLocation.getlocationcation(token);
      if (data.data.data) {
        localStorage.setItem('location', JSON.stringify(data.data.data))
        return data.data.data;
      }
      return {}
    },
    changeShowLoading() {
      this.ishowLoading = !this.ishowLoading
    },
    async getPrice() {
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IndYYSJ9.eyJpc3MiOiJrdnNzand0Iiwic3ViIjoyMjQ3MiwiaWF0IjoxNjY1NjY4MjA2LCJleHAiOjE2NjgwODc0MDYsInByZWZlcnJlZF91c2VybmFtZSI6InNoaXB0ZXN0Iiwicm9sZXMiOlsiVXNlciJdLCJrdnVzZXRmYSI6MCwia3Z3YWl0b3RwIjowLCJrdnNlcyI6IjQyZDBmZGY4MjkwMDQzNDdiYmI1NjM0NGM0NzI0NmJhIiwia3Z1aWQiOjIyNDcyLCJrdmxhbmciOiJ2aS1WTiIsImt2dXR5cGUiOjAsImt2dWxpbWl0IjoiRmFsc2UiLCJrdnVhZG1pbiI6IlRydWUiLCJrdnVhY3QiOiJUcnVlIiwia3Z1bGltaXR0cmFucyI6IkZhbHNlIiwia3Z1c2hvd3N1bSI6IlRydWUiLCJrdmJpZCI6MTIzNjAsImt2cmluZGlkIjo5LCJrdnJjb2RlIjoidGVzdHpvbmUxNyIsImt2cmlkIjo0Mzg1MTksImt2dXJpZCI6NDM4NTE5LCJrdnJnaWQiOjE3LCJwZXJtcyI6IiJ9.KpgnkjBcbm8JkhNF4KrDtFf1Y1LgMeiJOGiTKam3bkqxFPwwh7H0TF58GyhV0ccoOIbDxk2v5OsckB7Ub1gqoIe9iGDPUlBzS-W4hspPqHRMTuGzUBvcTSBjK8NWd6ju7No5SRIrrvnUltlKaa64kSXhZqzhmS6d80DE40XO4JN3pWieNF8fiyXcT-7uXkz-UBRnbRDQywpJ9PWmMBQOGUGhqp_GlIQVJUeehmadrrkdcdRSkDQfr6lpnVeJu63KJ-MBireF19aOfJHdHHkpZwXmN6bGugxRHvch_7pEwVS0ntdj0_jmiMOhdXb6A5oWBUisYPgFnz98C0JvezvBMA'
      const data = await GetPrice.getPrice(this.dataCheckPrice, token)
      console.log(data)
    },
    changeReceiverAddess(wardId, districtId) {
      this.ReceiverAddress['ward'] = wardId
      this.ReceiverAddress['district'] = districtId
      this.updateDataReceiver();

    },
    changeSenderAddess(wardId, districtId) {
      this.senderAddess['ward'] = wardId,
      this.senderAddess['district'] = districtId
      this.updateDataSender();
    },
    updateDataReceiver() {
      this.$store.commit('changeDataReceiver' ,this.ReceiverAddress)
    },
    updateDataSender() {
      this.$store.commit('changeDataSender',this.senderAddess)
    },
    createOrder() {
      this.ngoc = true
      console.log('data', this.$store.state.dataProductChoice)
    },
    // eslint-disable-next-line no-unused-vars
    choiceProduct(product) {
      this.ngoc = true
      let id = product.id
      if(typeof this.productChoiceList == "function") this.productChoiceList = []
      let idd = this.productChoiceList.findIndex(item => item.id == id)
      if(idd !== -1)
      this.productChoiceList[idd].total = this.productChoiceList[idd].total + 1
      else
      this.productChoiceList.push({
        'id' : id,
        'total': 1,
        'name': product.name,
        'price': product.price
      })
      this.$store.commit('changeDataProductChoice', this.productChoiceList )
    }
  }
}
</script>
<style scoped lang="css">
.main-web-left-top{
  display: flex;
  flex-grow: 1;
  gap: 1rem;
  width: 100%;
  padding: 3px;
}
#ngoc12{
  animation-name: ngoc;
  animation-duration: 33s;
  animation-iteration-count: 5;
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-name: ngoc;
  -webkit-animation-name: ngoc;
}
.main-web{

  width: 100%;
  /*height: 100vh;*/
  border: 1px solid;
  border-radius:20px;
  display: flex;
  justify-content: space-between;

}
@-webkit-keyframes ngoc{
  from {
    background-color: #42b983;
    opacity: 0;
  }
  to {
    background-color: #2c3e50;
    opacity: 1;
  }
}

.main-web-left{
  animation-name: ngoc;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  width: 48%;
  height: 100%;
  border: 1px solid;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.main-web-right{
  width: 48%;
  height: 100%;
  border: 1px solid;
  border-radius: 20px;
}
.btn-right{
  float: right;
}
</style>
