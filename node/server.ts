import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/sample'
import { SampleHandlers } from './proto/samplePackage/Sample'

const PORT = 8082
const PROTO_FILE = './proto/sample.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const samplePackage = grpcObj.samplePackage

function main() {
  const server = getServer()

  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Your server as started on port ${port}`)
    server.start()
  })
}

function getServer() {
  const server = new grpc.Server()
  server.addService(samplePackage.Sample.service, {
    // Sample Unary
    PingPong: (req, res) => {
      console.log(req.request)
      res(null, {message: "Pong"})
    }
   
  } as SampleHandlers)

  return server
}

main()