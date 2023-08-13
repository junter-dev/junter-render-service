import * as prom from 'prom-client'

import {config} from '../config'

export const register = new prom.Registry()

register.setDefaultLabels({
    app: config.appName
})

prom.collectDefaultMetrics({register})
