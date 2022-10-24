import axios from "axios";
export default {
    getPrice(data, token) {
        const config = {
            token : token
        }
        return axios.post("https://shipping.kiotapi.com/api/v3/check-price/VTP", data, {headers: config})
    },
    getPrice1(data, token) {
        const dataRequest  = {
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
                    "CODE": "EXPRESS"
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
        }
        const config = {
            token : token
        }
        return axios.post("https://shipping.kiotapi.com/api/v3/check-price/J&TFW", dataRequest, {headers: config})
    },
    getPriceBest(data, token) {
        const dataRequest  = {
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
                    "CODE": "12491"
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
        }
        const config = {
            token : token
        }
        return axios.post("https://shipping.kiotapi.com/api/v3/check-price/BEST", dataRequest, {headers: config})
    },
    getPriceEMS(data, token) {
        const dataRequest  = {
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
                    "CODE": "15"
                },
                {
                    "CODE": "17"
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
        }
        const config = {
            token : token
        }
        return axios.post("https://shipping.kiotapi.com/api/v3/check-price/EMS", dataRequest, {headers: config})
    },
    getPriceGHNFW(data, token) {
        const dataRequest  = {
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
                    "CODE": "2"
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
        }
        const config = {
            token : token
        }
        return axios.post("https://shipping.kiotapi.com/api/v3/check-price/GHNFW", dataRequest, {headers: config})
    },
    getPriceGRAB(data, token) {
        const dataRequest  = {
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
                    "CODE": "INSTANT"
                },
                {
                    "CODE": "SAME_DAY"
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
        }
        const config = {
            token : token
        }
        return axios.post("https://shipping.kiotapi.com/api/v3/check-price/GRAB", dataRequest, {headers: config})
    },
    getPriceAHAMOVE(data, token) {
        const dataRequest  = {
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
                    "CODE": "HAN-BIKE"
                },
                {
                    "CODE": "HAN-POOL"
                },
                {
                    "CODE": "HAN-SAMEDAY"
                },
                {
                    "CODE": "SGN-BIKE"
                },
                {
                    "CODE": "SGN-POOL"
                },
                {
                    "CODE": "SGN-SAMEDAY"
                },
                {
                    "CODE": "HAN-EXPRESS"
                },
                {
                    "CODE": "SGN-EXPRESS"
                },
                {
                    "CODE": "DAD-BIKE"
                },
                {
                    "CODE": "DAD-EXPRESS"
                },
                {
                    "CODE": "DAD-POOL"
                },
                {
                    "CODE": "VCA-EXPRESS"
                },
                {
                    "CODE": "VCA-BIKE"
                },
                {
                    "CODE": "VCA-POOL"
                },
                {
                    "CODE": "SGN-TRICYCLE"
                },
                {
                    "CODE": "SGN-TRUCK-500"
                },
                {
                    "CODE": "SGN-TRUCK-1000"
                },
                {
                    "CODE": "SGN-TRUCK-2000"
                },
                {
                    "CODE": "HAN-TRUCK-500"
                },
                {
                    "CODE": "HAN-TRUCK-1000"
                },
                {
                    "CODE": "SGN-VAN-500"
                },
                {
                    "CODE": "SGN-VAN-1000"
                },
                {
                    "CODE": "VNM-PARTNER-KIOTVIET-COVID"
                },
                {
                    "CODE": "VNM-PARTNER-DAOHAISAN"
                },
                {
                    "CODE": "VNM-PARTNER-NTT"
                },
                {
                    "CODE": "VII-BIKE"
                },
                {
                    "CODE": "BMV-BIKE"
                },
                {
                    "CODE": "VII-POOL"
                },
                {
                    "CODE": "BMV-POOL"
                },
                {
                    "CODE": "VII-EXPRESS"
                },
                {
                    "CODE": "BMV-EXPRESS"
                },
                {
                    "CODE": "HAN-VAN-500"
                },
                {
                    "CODE": "HAN-VAN-1000"
                },
                {
                    "CODE": "HAN-TRUCK-2000"
                },
                {
                    "CODE": "HAN-AHAPRO"
                },
                {
                    "CODE": "SGN-AHAPRO"
                },
                {
                    "CODE": "CXR-BIKE"
                },
                {
                    "CODE": "CXR-POOL"
                },
                {
                    "CODE": "CXR-EXPRESS"
                },
                {
                    "CODE": "LAN-BIKE"
                },
                {
                    "CODE": "LAN-POOL"
                },
                {
                    "CODE": "LAN-EXPRESS"
                },
                {
                    "CODE": "VCS-BIKE"
                },
                {
                    "CODE": "VCS-POOL"
                },
                {
                    "CODE": "VCS-SAMEDAY"
                },
                {
                    "CODE": "VCS-EXPRESS"
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
        }
        const config = {
            token : token
        }
        return axios.post("https://shipping.kiotapi.com/api/v3/check-price/AHAMOVE", dataRequest, {headers: config})
    }

}