import type * as grpc from '@grpc/grpc-js'
import {Status} from '@grpc/grpc-js/build/src/constants'

import {type IRenderServiceServer, RenderServiceService} from './gen/render_service_grpc_pb'
import {
    type RegisterComponentRequest,
    RegisterComponentResponse,
    type RenderRequest,
    RenderResponse
} from './gen/render_service_pb'
import {type Service} from './service/service'
import {type KnownOnly} from './types/known_keys'

class RenderServiceServer implements KnownOnly<IRenderServiceServer> {
    private readonly service: Service

    constructor(service: Service) {
        this.service = service
    }

    async registerComponent(call: grpc.ServerUnaryCall<RegisterComponentRequest, RegisterComponentResponse>, callback: grpc.sendUnaryData<RegisterComponentResponse>) {
        try {
            await this.service.registerComponent({
                name: call.request.getName(),
                content: call.request.getContent(),
                aliases: call.request.getAliases(),
            })

            callback(null, new RegisterComponentResponse())
        } catch (e) {
            // eslint-disable-next-line n/no-callback-literal
            callback({
                code: Status.INTERNAL,
                message: `Failed to register component: ${e}`,
            })
        }
    }

    render(call: grpc.ServerUnaryCall<RenderRequest, RenderResponse>, callback: grpc.sendUnaryData<RenderResponse>): void {
        try {
            const resp = new RenderResponse()
            resp.setHtml(this.service.render(call.request.getObject(), call.request.getObject()))

            callback(null, resp)
        } catch (e) {
            // eslint-disable-next-line n/no-callback-literal
            callback({
                code: Status.INTERNAL,
                message: `Failed to render: ${e}`,
            })
        }
    }
}

export function initGRPCService(server: grpc.Server, service: Service) {
    // @ts-expect-error gRPC shit.
    server.addService(RenderServiceService, new RenderServiceServer(service))
}
