import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto/sample'
import readline from 'readline'

const PORT = 8082
const PROTO_FILE = './proto/sample.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType


const client = new grpcObj.samplePackage.Sample(
  `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
)

const deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err)
    return
  }
  onClientReady()
})


function onClientReady() {
	// Sample Unary
  client.PingPong({message: "Ping"}, (err, result) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(result)
  })

	// Sample Server Streaming
	const stream1 = client.RandomNumbers({maxVal: 85})
  stream1.on("data", (chunk)=> {
    console.log(chunk)
  })
  stream1.on("end", () => {
    console.log("communication ended")
  })

	//Sample Client Streaming
	const stream2 = client.TodoList((err, result) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(result)
  })
  stream2.write({todo: "sleep", status: "Never"})
  stream2.write({todo: "code", status: "Doing"})
  stream2.write({todo: "eat", status: "Done"})
  stream2.end()
	
}

