import {createServer, type IncomingMessage, type Server, type ServerResponse} from 'http'

import {register} from './metrics/metrics'
import {type IRepository} from './repository/repository'

export class HTTPService {
    private readonly db: IRepository

    constructor(db: IRepository) {
        this.db = db
    }

    public createServer(): Server {
        return createServer((request: IncomingMessage, response: ServerResponse) => {
            const parsedURL = new URL(request.url, `http://${request.headers.host}`)

            if (parsedURL.pathname == '/metrics') {
                this.metricsHandler(request, response)
                return
            } else if (parsedURL.pathname == '/ready') {
                this.readyHandler(request, response)
                return
            }

            response.writeHead(500)
            response.end()
        })
    }

    private metricsHandler(request: IncomingMessage, response: ServerResponse) {
        response.setHeader('Content-Type', register.contentType)
        register.metrics().then((data) => {
            response.end(data)
        })
    }

    private readyHandler(request: IncomingMessage, response: ServerResponse) {
        if (!this.db.isAvailable()) {
            response.writeHead(500)
        }

        response.end()
    }
}
