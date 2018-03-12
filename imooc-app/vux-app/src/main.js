import config from '@/config/config.js'
import Routers from '@/router/index.js'
import stores from '@/vuexs'
import {isPrd} from '@/utils/index.js'

const cfg = {
    stores: stores,
    router: {
        routes: [...Routers],
        beforeEach: [(to, from, next) => {
            next()
        }]
    },
    urlTables () {
        const tables = {
            'default': '/hmcp-hp'
        }
        if (isPrd()) {
            return {
                ...tables
            }
        } else {
            return {
                ...tables
            }
        }
    }
}
config(cfg)
