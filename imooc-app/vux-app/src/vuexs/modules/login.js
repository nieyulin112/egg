// import {getOtpNumber, login} from '../../apis/login.api.js'
// // import {Toast} from 'mint-ui'
// export default {
//     state: {
//         otpStatus: 0, // 有三种状态：0未开始 1进行中 2成功 3失败
//         loginStatus: 0 // 有三种状态：0未开始 1进行中 2成功 3失败
//     },
//     mutations: {
//         setOtpStatus (state, data) {
//             state.otpStatus = data
//         },
//         setLoginStatus (state, data) {
//             state.loginStatus = data
//         }
//     },
//     actions: {
//         async getOtp ({commit}, data) {
//             let result = await getOtpNumber(data)
//             if (typeof result === 'string') {
//                 commit('setOtpStatus', 3)
//             } else {
//                 commit('setOtpStatus', 2)
//             }
//         },
//         async loginIN ({commit}, data) {
//             let result = await login(data)
//             if (typeof result === 'string') {
//                 commit('setLoginStatus', 3)
//             } else {
//                 commit('setLoginStatus', 2)
//             }
//         }
//     }
// }
