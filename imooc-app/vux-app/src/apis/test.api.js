import Vue from 'vue'
export function test () {
    Vue.http.get(Vue.getUrl({
        url: '/api/test/test/test',
        mockUrl: '/test/test.json',
        mock: true
    }))
}
