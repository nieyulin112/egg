
export default {
    state: {
        fastPay: {} // 光速赔
    },
    mutations: {
        // 光速赔
        setFastPay (state, newData) {
            state.fastPay = newData
        }
    },
    actions: {
        // 光速赔
        setFastPay ({commit}, newData) {
            commit('setFastPay', newData)
        }
    }
}
