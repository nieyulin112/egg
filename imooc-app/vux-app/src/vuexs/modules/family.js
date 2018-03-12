export default {
    state: {
        selectedMember: null
    },
    mutations: {
        selectMember (state, member) {
            state.selectedMember = member
        }
    },
    actions: {
        selectMember ({commit}, member) {
            commit('selectMember', member)
        }
    }
}
