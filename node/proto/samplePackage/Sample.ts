// Original file: proto/sample.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { NumberRequest as _samplePackage_NumberRequest, NumberRequest__Output as _samplePackage_NumberRequest__Output } from '../samplePackage/NumberRequest';
import type { NumberResponse as _samplePackage_NumberResponse, NumberResponse__Output as _samplePackage_NumberResponse__Output } from '../samplePackage/NumberResponse';
import type { PingRequest as _samplePackage_PingRequest, PingRequest__Output as _samplePackage_PingRequest__Output } from '../samplePackage/PingRequest';
import type { PongResponse as _samplePackage_PongResponse, PongResponse__Output as _samplePackage_PongResponse__Output } from '../samplePackage/PongResponse';
import type { TodoRequest as _samplePackage_TodoRequest, TodoRequest__Output as _samplePackage_TodoRequest__Output } from '../samplePackage/TodoRequest';
import type { TodoResponse as _samplePackage_TodoResponse, TodoResponse__Output as _samplePackage_TodoResponse__Output } from '../samplePackage/TodoResponse';

export interface SampleClient extends grpc.Client {
  PingPong(argument: _samplePackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _samplePackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _samplePackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _samplePackage_PingRequest, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _samplePackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _samplePackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _samplePackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _samplePackage_PingRequest, callback: grpc.requestCallback<_samplePackage_PongResponse__Output>): grpc.ClientUnaryCall;
  
  RandomNumbers(argument: _samplePackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_samplePackage_NumberResponse__Output>;
  RandomNumbers(argument: _samplePackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_samplePackage_NumberResponse__Output>;
  randomNumbers(argument: _samplePackage_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_samplePackage_NumberResponse__Output>;
  randomNumbers(argument: _samplePackage_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_samplePackage_NumberResponse__Output>;
  
  TodoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_samplePackage_TodoRequest>;
  TodoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_samplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_samplePackage_TodoRequest>;
  TodoList(options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_samplePackage_TodoRequest>;
  TodoList(callback: grpc.requestCallback<_samplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_samplePackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_samplePackage_TodoRequest>;
  todoList(metadata: grpc.Metadata, callback: grpc.requestCallback<_samplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_samplePackage_TodoRequest>;
  todoList(options: grpc.CallOptions, callback: grpc.requestCallback<_samplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_samplePackage_TodoRequest>;
  todoList(callback: grpc.requestCallback<_samplePackage_TodoResponse__Output>): grpc.ClientWritableStream<_samplePackage_TodoRequest>;
  
}

export interface SampleHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_samplePackage_PingRequest__Output, _samplePackage_PongResponse>;
  
  RandomNumbers: grpc.handleServerStreamingCall<_samplePackage_NumberRequest__Output, _samplePackage_NumberResponse>;
  
  TodoList: grpc.handleClientStreamingCall<_samplePackage_TodoRequest__Output, _samplePackage_TodoResponse>;
  
}

export interface SampleDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_samplePackage_PingRequest, _samplePackage_PongResponse, _samplePackage_PingRequest__Output, _samplePackage_PongResponse__Output>
  RandomNumbers: MethodDefinition<_samplePackage_NumberRequest, _samplePackage_NumberResponse, _samplePackage_NumberRequest__Output, _samplePackage_NumberResponse__Output>
  TodoList: MethodDefinition<_samplePackage_TodoRequest, _samplePackage_TodoResponse, _samplePackage_TodoRequest__Output, _samplePackage_TodoResponse__Output>
}
