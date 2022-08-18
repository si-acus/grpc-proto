// Original file: proto/sample.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequest as _samplePackage_PingRequest, PingRequest__Output as _samplePackage_PingRequest__Output } from '../samplePackage/PingRequest';
import type { PongResponse as _samplePackage_PongResponse, PongResponse__Output as _samplePackage_PongResponse__Output } from '../samplePackage/PongResponse';

export interface SampleClient extends grpc.Client {
  PingPong(argument: _samplePackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _samplePackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _samplePackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _samplePackage_PingRequest, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _samplePackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _samplePackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _samplePackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _samplePackage_PingRequest, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface SampleHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_samplePackage_PingRequest__Output, _samplePackage_PongResponse>;
  
}

export interface SampleDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_samplePackage_PingRequest, _samplePackage_PongResponse, _samplePackage_PingRequest__Output, _samplePackage_PongResponse__Output>
}
