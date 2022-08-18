import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { SampleClient as _samplePackage_SampleClient, SampleDefinition as _samplePackage_SampleDefinition } from './samplePackage/Sample';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  samplePackage: {
    NumberRequest: MessageTypeDefinition
    NumberResponse: MessageTypeDefinition
    PingRequest: MessageTypeDefinition
    PongResponse: MessageTypeDefinition
    Sample: SubtypeConstructor<typeof grpc.Client, _samplePackage_SampleClient> & { service: _samplePackage_SampleDefinition }
  }
}

