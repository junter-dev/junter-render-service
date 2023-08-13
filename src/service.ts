import * as grpc from '@grpc/grpc-js'

import {config} from './config'
import {initGRPCService} from './grpc_service'
import {HTTPService} from './http_service'
import {MongoDB} from './repository/mongodb/db'
import {Service} from './service/service'

const db = new MongoDB(config.dbURL)
const grpcServer = new grpc.Server()

initGRPCService(grpcServer, new Service(db, config.componentUpdateInterval))

grpcServer.bindAsync(`${config.gRPCHost}:${config.gRPCPort}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Listening gRPC server on ${config.gRPCHost}:${config.gRPCPort}`)
    grpcServer.start()
})

const httpServer = new HTTPService(db).createServer().listen(config.httpPort, config.httpHost, () => {
    console.log(`Listening HTTP server on ${config.httpHost}:${config.httpPort}`)
})

process.on('SIGTERM', () => {
    grpcServer.tryShutdown((error) => {
        console.log('Fail to stop gRPC server', error)
    })

    httpServer.close((error) => {
        console.log('Fail to stop HTTP server', error)
    })

    try {
        db.close()
    } catch (e) {
        console.log('Fail to close db', e)
    }
})
