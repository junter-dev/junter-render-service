// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var render_service_pb = require('./render_service_pb.js');

function serialize_api_render_v1_RegisterComponentRequest(arg) {
  if (!(arg instanceof render_service_pb.RegisterComponentRequest)) {
    throw new Error('Expected argument of type api.render.v1.RegisterComponentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_render_v1_RegisterComponentRequest(buffer_arg) {
  return render_service_pb.RegisterComponentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_render_v1_RegisterComponentResponse(arg) {
  if (!(arg instanceof render_service_pb.RegisterComponentResponse)) {
    throw new Error('Expected argument of type api.render.v1.RegisterComponentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_render_v1_RegisterComponentResponse(buffer_arg) {
  return render_service_pb.RegisterComponentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_render_v1_RenderRequest(arg) {
  if (!(arg instanceof render_service_pb.RenderRequest)) {
    throw new Error('Expected argument of type api.render.v1.RenderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_render_v1_RenderRequest(buffer_arg) {
  return render_service_pb.RenderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_render_v1_RenderResponse(arg) {
  if (!(arg instanceof render_service_pb.RenderResponse)) {
    throw new Error('Expected argument of type api.render.v1.RenderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_render_v1_RenderResponse(buffer_arg) {
  return render_service_pb.RenderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RenderServiceService = exports.RenderServiceService = {
  render: {
    path: '/api.render.v1.RenderService/Render',
    requestStream: false,
    responseStream: false,
    requestType: render_service_pb.RenderRequest,
    responseType: render_service_pb.RenderResponse,
    requestSerialize: serialize_api_render_v1_RenderRequest,
    requestDeserialize: deserialize_api_render_v1_RenderRequest,
    responseSerialize: serialize_api_render_v1_RenderResponse,
    responseDeserialize: deserialize_api_render_v1_RenderResponse,
  },
  registerComponent: {
    path: '/api.render.v1.RenderService/RegisterComponent',
    requestStream: false,
    responseStream: false,
    requestType: render_service_pb.RegisterComponentRequest,
    responseType: render_service_pb.RegisterComponentResponse,
    requestSerialize: serialize_api_render_v1_RegisterComponentRequest,
    requestDeserialize: deserialize_api_render_v1_RegisterComponentRequest,
    responseSerialize: serialize_api_render_v1_RegisterComponentResponse,
    responseDeserialize: deserialize_api_render_v1_RegisterComponentResponse,
  },
};

exports.RenderServiceClient = grpc.makeGenericClientConstructor(RenderServiceService);
