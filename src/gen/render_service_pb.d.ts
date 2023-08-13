// package: api.render.v1
// file: render_service.proto

import * as jspb from 'google-protobuf'

export class RenderRequest extends jspb.Message {
  getObject(): string
  setObject(value: string): void

  getAliases(): string
  setAliases(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RenderRequest.AsObject
  static toObject(includeInstance: boolean, msg: RenderRequest): RenderRequest.AsObject
  static extensions: Record<number, jspb.ExtensionFieldInfo<jspb.Message>>
  static extensionsBinary: Record<number, jspb.ExtensionFieldBinaryInfo<jspb.Message>>
  static serializeBinaryToWriter(message: RenderRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): RenderRequest
  static deserializeBinaryFromReader(message: RenderRequest, reader: jspb.BinaryReader): RenderRequest
}

export namespace RenderRequest {
  export interface AsObject {
    object: string,
    aliases: string,
  }
}

export class RenderResponse extends jspb.Message {
  getHtml(): string
  setHtml(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RenderResponse.AsObject
  static toObject(includeInstance: boolean, msg: RenderResponse): RenderResponse.AsObject
  static extensions: Record<number, jspb.ExtensionFieldInfo<jspb.Message>>
  static extensionsBinary: Record<number, jspb.ExtensionFieldBinaryInfo<jspb.Message>>
  static serializeBinaryToWriter(message: RenderResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): RenderResponse
  static deserializeBinaryFromReader(message: RenderResponse, reader: jspb.BinaryReader): RenderResponse
}

export namespace RenderResponse {
  export interface AsObject {
    html: string,
  }
}

export class RegisterComponentRequest extends jspb.Message {
  getName(): string
  setName(value: string): void

  getContent(): string
  setContent(value: string): void

  getAliases(): string
  setAliases(value: string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RegisterComponentRequest.AsObject
  static toObject(includeInstance: boolean, msg: RegisterComponentRequest): RegisterComponentRequest.AsObject
  static extensions: Record<number, jspb.ExtensionFieldInfo<jspb.Message>>
  static extensionsBinary: Record<number, jspb.ExtensionFieldBinaryInfo<jspb.Message>>
  static serializeBinaryToWriter(message: RegisterComponentRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): RegisterComponentRequest
  static deserializeBinaryFromReader(message: RegisterComponentRequest, reader: jspb.BinaryReader): RegisterComponentRequest
}

export namespace RegisterComponentRequest {
  export interface AsObject {
    name: string,
    content: string,
    aliases: string,
  }
}

export class RegisterComponentResponse extends jspb.Message {
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): RegisterComponentResponse.AsObject
  static toObject(includeInstance: boolean, msg: RegisterComponentResponse): RegisterComponentResponse.AsObject
  static extensions: Record<number, jspb.ExtensionFieldInfo<jspb.Message>>
  static extensionsBinary: Record<number, jspb.ExtensionFieldBinaryInfo<jspb.Message>>
  static serializeBinaryToWriter(message: RegisterComponentResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): RegisterComponentResponse
  static deserializeBinaryFromReader(message: RegisterComponentResponse, reader: jspb.BinaryReader): RegisterComponentResponse
}

export namespace RegisterComponentResponse {
  export interface AsObject {
  }
}
