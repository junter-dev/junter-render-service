// package: api.render.v1
// file: render_service.proto

import * as grpc from '@grpc/grpc-js'

import type * as render_service_pb from './render_service_pb'

interface IRenderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  render: IRenderServiceService_IRender;
  registerComponent: IRenderServiceService_IRegisterComponent;
}

interface IRenderServiceService_IRender extends grpc.MethodDefinition<render_service_pb.RenderRequest, render_service_pb.RenderResponse> {
  path: '/api.render.v1.RenderService/Render'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<render_service_pb.RenderRequest>;
  requestDeserialize: grpc.deserialize<render_service_pb.RenderRequest>;
  responseSerialize: grpc.serialize<render_service_pb.RenderResponse>;
  responseDeserialize: grpc.deserialize<render_service_pb.RenderResponse>;
}

interface IRenderServiceService_IRegisterComponent extends grpc.MethodDefinition<render_service_pb.RegisterComponentRequest, render_service_pb.RegisterComponentResponse> {
  path: '/api.render.v1.RenderService/RegisterComponent'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<render_service_pb.RegisterComponentRequest>;
  requestDeserialize: grpc.deserialize<render_service_pb.RegisterComponentRequest>;
  responseSerialize: grpc.serialize<render_service_pb.RegisterComponentResponse>;
  responseDeserialize: grpc.deserialize<render_service_pb.RegisterComponentResponse>;
}

export const RenderServiceService: IRenderServiceService
export interface IRenderServiceServer extends grpc.UntypedServiceImplementation {
  render: grpc.handleUnaryCall<render_service_pb.RenderRequest, render_service_pb.RenderResponse>;
  registerComponent: grpc.handleUnaryCall<render_service_pb.RegisterComponentRequest, render_service_pb.RegisterComponentResponse>;
}

export interface IRenderServiceClient {
  render: ((request: render_service_pb.RenderRequest, callback: (error: grpc.ServiceError | null, response: render_service_pb.RenderResponse) => void) => grpc.ClientUnaryCall) & ((request: render_service_pb.RenderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: render_service_pb.RenderResponse) => void) => grpc.ClientUnaryCall) & ((request: render_service_pb.RenderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: render_service_pb.RenderResponse) => void) => grpc.ClientUnaryCall);
  registerComponent: ((request: render_service_pb.RegisterComponentRequest, callback: (error: grpc.ServiceError | null, response: render_service_pb.RegisterComponentResponse) => void) => grpc.ClientUnaryCall) & ((request: render_service_pb.RegisterComponentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: render_service_pb.RegisterComponentResponse) => void) => grpc.ClientUnaryCall) & ((request: render_service_pb.RegisterComponentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: render_service_pb.RegisterComponentResponse) => void) => grpc.ClientUnaryCall);
}

export class RenderServiceClient extends grpc.Client implements IRenderServiceClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>)
  public render(request: render_service_pb.RenderRequest, callback: (error: grpc.ServiceError | null, response: render_service_pb.RenderResponse) => void): grpc.ClientUnaryCall
  public render(request: render_service_pb.RenderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: render_service_pb.RenderResponse) => void): grpc.ClientUnaryCall
  public render(request: render_service_pb.RenderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: render_service_pb.RenderResponse) => void): grpc.ClientUnaryCall
  public registerComponent(request: render_service_pb.RegisterComponentRequest, callback: (error: grpc.ServiceError | null, response: render_service_pb.RegisterComponentResponse) => void): grpc.ClientUnaryCall
  public registerComponent(request: render_service_pb.RegisterComponentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: render_service_pb.RegisterComponentResponse) => void): grpc.ClientUnaryCall
  public registerComponent(request: render_service_pb.RegisterComponentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: render_service_pb.RegisterComponentResponse) => void): grpc.ClientUnaryCall
}
