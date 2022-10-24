const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const dotenv=require("dotenv")

server.use(middlewares)
server.use(router)

const port=process.env.PORT||3000
const host = '0.0.0.0';

server.listen(port,host, () => {
  console.log('JSON Server is running')
})