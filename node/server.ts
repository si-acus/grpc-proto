import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './proto/sample'
import { SampleHandlers } from './proto/samplePackage/Sample'
import { TodoResponse } from './proto/samplePackage/TodoResponse'
import { TodoRequest } from './proto/samplePackage/TodoRequest'
import { ChatRequest } from './proto/samplePackage/ChatRequest'
import { ChatResponse } from './proto/samplePackage/ChatResponse'

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
//init todo list
const todoList: TodoResponse = {todos :[] }
//init username
const callObjByUsername = new Map<string, grpc.ServerDuplexStream<ChatRequest, ChatResponse>>()

function getServer() {
	const server = new grpc.Server()
	server.addService(samplePackage.Sample.service, {
		// // Sample Unary
		// PingPong: (req, res) => {
		// 	console.log(req.request)
		// 	res(null, { message: "Pong" })
		// },

		// //Sample Server Streaming
		// RandomNumbers: (call) => {
		// 	const { maxVal = 10 } = call.request
		// 	console.log({ maxVal })

		// 	let runCount = 0
		// 	const id = setInterval(() => {
		// 		runCount = ++runCount
		// 		call.write({ num: Math.floor(Math.random() * maxVal) })

		// 		if (runCount >= 10) {
		// 			clearInterval(id)
		// 			call.end()
		// 		}
		// 	}, 500)
		// },

		//Sample Client Streaming
		// TodoList: (call, callback) => {
    //   call.on("data", (chunk: TodoRequest) => {
    //     todoList.todos?.push(chunk)
    //     console.log(chunk)
    //   })

    //   call.on("end", () => {
    //     callback(null, {todos: todoList.todos})
    //   })
    // },


		//Sample Bidirectional Streaming
		Chat: (call) => {
      call.on("data", (req) => {
        const username = call.metadata.get('username')[0] as string
        const msg = req.message
        console.log(`${username}:`, req.message)


        for(let [user, usersCall] of callObjByUsername) {
          if(username !== user) {
            usersCall.write({
              username: username,
              message: msg
            })
          }
        }

        if (callObjByUsername.get(username) === undefined) {
          callObjByUsername.set(username, call)
        }
      })

      call.on("end", () => {
        const username = call.metadata.get('username')[0] as string
        callObjByUsername.delete(username)
        for(let [user, usersCall] of callObjByUsername) {
            usersCall.write({
              username: username,
              message: "Has Left the Chat!"
            })
        }
        console.log(`${username} is ending their chat session`)

        call.write({
          username: "Server",
          message: `See you later ${username}`
        })

        call.end()
      })

    }


	} as SampleHandlers)

	return server
}

main()