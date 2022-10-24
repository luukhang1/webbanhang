import Vuex from "vuex";
export const store = new Vuex.Store({
    state: {
        ngoc: 0,
        dataSenderAddress: {},
        dataReceiverAddress: {},
        dataProductChoice: {}
    },
    mutations: {
        changeDataReceiver(state, dataSender) {
            state.dataReceiverAddress = dataSender
        },
        changeDataSender(state, dataSender) {
          state.dataSenderAddress = dataSender
        },
        // eslint-disable-next-line no-unused-vars
        changeDataProductChoice(state, dataProductChoice) {
            state.dataProductChoice = dataProductChoice
        }
    }
})