// import {httpInsureList, httpLoanList, httpInsureOrders} from '../../apis/is.api.js'
// import loading from 'components/Loading'
// export default {
//     state: {
//         insureData: [], // 个人保单信息
//         insureList: [], // 无限加载保险的列表
//         insureLoding: true, // 判断无限加载保险的状态
//         insureTimes: 1, // 计算保险的的页码
//         loanList: [], // 无限加载贷款的列表
//         loanLoading: true, // 判断无限加载贷款的状态
//         loadnTimes: 1, // 计算贷款的页码
//         insureClause: [], // 保险条款
//         coverObject: {}, // 立即投保数据
//         serviceDet: {}, // 服务详情数据
//         insureOrders: [], // 用户的保单
//         claimsProcess: {} // 理赔流程信息
//     },
//     mutations: {
//         // 用户的保单
//         setInsureOrders (state, newData) {
//             state.insureOrders = newData
//         },
//         // 用户的保单信息
//         // setInsureData (state, newData) {
//         //     if (typeof newData === 'string') {
//         //         // 返回的是错误信息
//         //     } else {
//         //         // 返回的是保单列表
//         //         state.insureData = newData
//         //     }
//         // },
//         // 删除用户的保单信息
//         removeInsureOrders (state, info) {
//             // debugger
//             // let copy = state.insureOrders.concat([])
//             // copy.splice(index, 1)
//             // state.insureOrders = copy
//             let index = state.insureOrders.indexOf(info)
//             if (index === -1) {
//                 return
//             }
//             state.insureOrders.splice(index, 1)
//             console.log(state.insureOrders.length)
//         },
//         // 无限加载保险
//         addInsureList (state, newData, store) {
//             state.insureList = state.insureList.concat(newData)
//         },
//         // 设置无限加载保险的状态
//         setInsureLoading (state, newData) {
//             if (typeof newData !== 'boolean') {
//                 console.log('数据类型错误')
//             } else {
//                 state.insureLoding = newData
//             }
//         },
//         // 设置保险的页码
//         addInsureTimes (state) {
//             state.insureTimes++
//         },
//         // 无限加载贷款
//         addLoanList (state, newData) {
//             state.loanList = state.loanList.concat(newData)
//         },
//         // 设置贷款无限加载的状态
//         setLoanLoading (state, newData) {
//             if (typeof newData !== 'boolean') {
//                 console.log('数据类型错误')
//             } else {
//                 state.loanLoading = newData
//             }
//         },
//         addLoanTimes (state) {
//             state.loanTimes++
//         },
//         // 设置用户须知
//         // setNeedKnoeContent (state, newData) {
//         //     // 需要判断是错误还是真正的数据
//         //     state.needKnowContent = newData
//         // },
//         // 立即投保
//         setCoverObject (state, newData) {
//             state.coverObject = newData
//         },
//         // 保险条款
//         insureClause (state, newData) {
//             state.insureClause = newData
//         },
//         // 服务详情信息
//         setServiceDetInfo (state, newData) {
//             state.serviceDet = newData
//         },
//         // 理赔流程信息
//         setClaimsProcess (state, newData) {
//             state.claimsProcess = newData
//         }
//     },
//     actions: {
//         // 获取用户的保单
//         async getInsureOrders ({commit}, data) {
//             let result = await httpInsureOrders(data)
//             loading.close()
//             commit('setInsureOrders', result)
//         },
//         // // 获取个人保单信息
//         // async getInsureData ({commit}, data) {
//         //     commit('setInsureData', await httpInsure(data))
//         // },
//         // 获取须知
//         // async getNeedKnowContent ({commit}, data) {
//         //     commit('setNeedKnoeContent', await httpNeedKnowContent(data))
//         // },
//         // 无限加载保险
//         async getInsureList ({commit}, data) {
//             const res = await httpInsureList(data)
//             if (typeof res === 'object') {
//                 commit('addInsureTimes')
//                 commit('addInsureList', res)
//             } else {
//                 // 抛出错误信息
//             }
//             commit('setInsureLoading', true)
//         },
//         // 无限加载贷款
//         async getLoanList ({commit}, data) {
//             const res = await httpLoanList(data)
//             if (typeof res === 'object') {
//                 commit('addLoanTimes')
//                 commit('addLoanList', res)
//             } else {
//                 // 抛出错误信息
//             }
//             commit('setLoanLoading', true)
//         },
//         // 立即投保
//         setCoverObject ({commit}, newData) {
//             commit('setCoverObject', newData)
//         },
//         // 保险条款
//         insureClause ({commit}, newData) {
//             commit('insureClause', newData)
//         },
//         // 服务详情信息
//         setServiceDetInfo ({commit}, newData) {
//             commit('setServiceDetInfo', newData)
//         },
//         // 查勘理赔流程
//         setClaimsProcess ({commit}, newData) {
//             commit('setClaimsProcess', newData)
//         }
//     }
// }
