export default {
    state: {
        members: [],
        selectedMember: null,
        reportData: {},
        otpStatus: 0, // 有三种状态：0未开始 1进行中 2成功 3失败
        loginStatus: 0, // 有三种状态：0未开始 1进行中 2成功 3失败
        recDetail: {}, // 病历详情
        addReviewtoSet: {}, // 增加复查提醒
        did: {}
    },
    mutations: {
        setMembers (state, members) {
            state.members = members
        },
        selectMember (state, member) {
            state.selectedMember = member
        },
        setReportData (state, data) {
            state.reportData = data
        },
        // 病历详情
        setRecDetail (state, newData) {
            state.recDetail = newData
        },
        setreviewData (state, data) {
            state.addReviewtoSet = data
        },
        setDid (state, data) {
            state.did = data
        }
    },
    actions: {
        setMembers ({commit}, payload) {
            commit('setMembers', payload)
        },
        setReportData ({commit}, data) {
            commit('setReportData', data)
        },
        // 病历详情
        setRecDetail ({commit}, newData) {
            commit('setRecDetail', newData)
        },
        setreviewData ({commit}, data) {
            commit('setreviewData', data)
        },
        setDid ({commit}, data) {
            commit('setDid', data)
        }
    }
}
