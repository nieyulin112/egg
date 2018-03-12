export default {
    state: {
        notification: {} // 消息通知
    },
    mutations: {
        setNotification (state, newData) {
            state.notification = newData
        }
    },
    actions: {
        setNotification ({commit}, newData) {
            commit('setNotification', newData)
        }
    }
}
