export default {
    state: {
        count: 1
    },
    mutations: {
        test_inc (state) {
            state.count++
        }
    },
    actions: {
        inc ({commit}) {
            commit('test_inc')
        }
    }
}