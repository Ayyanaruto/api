const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const dotenv=require("dotenv")

server.use(middlewares)
server.use(router)

const port=3000||process.env.PORT

server.listen(port, () => {
  console.log('JSON Server is running')
})