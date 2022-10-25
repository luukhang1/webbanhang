<template>
  <div class="check-price-main">
    <Delivery
        v-if="showCheckPrice"
    :data-respone-check-price="dataResponeCheckPrice"
    :is-loading="ishowLoading"
    >

    </Delivery>
    <div></div>
  </div>
<!--  <div class="footer-check-price">-->
<!--    <button class="btn btn-primary btn-right" @click="getMuitiPrice">check gia</button>-->
<!--  </div>-->
</template>
<style scoped>
.check-price-main{
  border: 1px solid;
  border-radius: 20px;
  height: 100%;
}
</style>
<script>
import Delivery from "./Delivery/Delivery.vue";
import GetPrice from "@/components/Common/GetPrice";
export default {
  components: {Delivery},
  props: {
    ishowLoading: Boolean,
    dataCheckPrice: Array,
    listProductChoices: Array,
    listDelivery: Array
  },
  created() {
    this.getMuitiPrice()
  },
  data() {
    return {
      showCheckPrice: true,
      dataResponeCheckPrice: Array,
      dataRequestCheckPrice: {
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
    }
  },
  methods: {
    async getMuitiPrice() {
      this.showCheckPrice = false
      this.$emit('changeShowLoading')
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IndYYSJ9.eyJpc3MiOiJrdnNzand0Iiwic3ViIjoyMjQ3MiwiaWF0IjoxNjY1NjY4MjA2LCJleHAiOjE2NjgwODc0MDYsInByZWZlcnJlZF91c2VybmFtZSI6InNoaXB0ZXN0Iiwicm9sZXMiOlsiVXNlciJdLCJrdnVzZXRmYSI6MCwia3Z3YWl0b3RwIjowLCJrdnNlcyI6IjQyZDBmZGY4MjkwMDQzNDdiYmI1NjM0NGM0NzI0NmJhIiwia3Z1aWQiOjIyNDcyLCJrdmxhbmciOiJ2aS1WTiIsImt2dXR5cGUiOjAsImt2dWxpbWl0IjoiRmFsc2UiLCJrdnVhZG1pbiI6IlRydWUiLCJrdnVhY3QiOiJUcnVlIiwia3Z1bGltaXR0cmFucyI6IkZhbHNlIiwia3Z1c2hvd3N1bSI6IlRydWUiLCJrdmJpZCI6MTIzNjAsImt2cmluZGlkIjo5LCJrdnJjb2RlIjoidGVzdHpvbmUxNyIsImt2cmlkIjo0Mzg1MTksImt2dXJpZCI6NDM4NTE5LCJrdnJnaWQiOjE3LCJwZXJtcyI6IiJ9.KpgnkjBcbm8JkhNF4KrDtFf1Y1LgMeiJOGiTKam3bkqxFPwwh7H0TF58GyhV0ccoOIbDxk2v5OsckB7Ub1gqoIe9iGDPUlBzS-W4hspPqHRMTuGzUBvcTSBjK8NWd6ju7No5SRIrrvnUltlKaa64kSXhZqzhmS6d80DE40XO4JN3pWieNF8fiyXcT-7uXkz-UBRnbRDQywpJ9PWmMBQOGUGhqp_GlIQVJUeehmadrrkdcdRSkDQfr6lpnVeJu63KJ-MBireF19aOfJHdHHkpZwXmN6bGugxRHvch_7pEwVS0ntdj0_jmiMOhdXb6A5oWBUisYPgFnz98C0JvezvBMA'
      await Promise.all([
        GetPrice.getPrice(this.dataRequestCheckPrice, token),
        GetPrice.getPriceGRAB(this.dataRequestCheckPrice, token),
        GetPrice.getPrice1(this.dataRequestCheckPrice, token),
        GetPrice.getPriceBest(this.dataRequestCheckPrice, token),
        GetPrice.getPriceEMS(this.dataRequestCheckPrice, token),
        GetPrice.getPriceGHNFW(this.dataRequestCheckPrice, token),
        GetPrice.getPriceAHAMOVE(this.dataRequestCheckPrice, token),
      ]).then((value) => {
        this.dataResponeCheckPrice = value
      }).catch(() => {
      })
      this.$emit('changeShowLoading')
      this.showCheckPrice = true
    },
  },
  watch: {
    // eslint-disable-next-line vue/return-in-computed-property
    dataResponeCheckPrice() {
      if (this.dataResponeCheckPrice.length && this.dataResponeCheckPrice.length >0) {
        for (const key in this.dataResponeCheckPrice) {
          //
          this.dataResponeCheckPrice[key] = this.dataResponeCheckPrice[key].data.data
        }
      }
    }
  }
}
</script>
