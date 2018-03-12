// import 'utils/fontset'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import FastClick from 'fastclick'
import App from '../App.vue'
import httpconfig from '../utils/httpconfig'
import { isPrd, isFunction } from '../utils/index'
Vue.use(Vuex)

const logger = createLogger({
    collapsed: false,
    transformer (state) {
        return state
    },
    mutationTransformer (mutation) {
        return mutation.type
    }
})

export default function ({router = {}, stores, urlTables}) {
    Vue.use(VueRouter)
    FastClick.attach(document.body)
    const Router = new VueRouter({
        mode: 'hash',
        routes: router.routes
    })
    // 进路由之前的设置
    Router.beforeEach((to, from, next) => {
        // Loading.close()
        if (to.meta.title && to.meta.title !== from.meta.title) {
            // setBarTitle(to.meta.title)
        }
        if (to.meta.channelCheck) {
            // if (!checkSignParams(to)) {
            //     next(to.meta.channelCheck.fail)
            //     return
            // }
        }
        if (to.meta.auth) {
            // const hasLogin = checkLogin()
            // if (hasLogin) {
            //     next()
            //     return
            // }
            if (isFunction(to.meta.auth.fail)) {
                to.meta.auth.fail(next)
            } else {
                next(to.meta.auth.fail)
            }
        } else {
            next()
        }
    })

    if (router.beforeEach) {
        router.beforeEach.forEach(f => {
            if (isFunction(f)) {
                Router.beforeEach(f)
            }
        })
    }

    const store = new Vuex.Store({
        modules: {
            ...stores
        },
        strict: process.env.NODE_ENV !== 'production',
        plugins: isPrd() ? [] : [logger]
    })
    httpconfig(urlTables)
    App.store = store
    new Vue({
        router: Router,
        render: h => h(App)
    }).$mount('#app')
    window.router = Router
}
