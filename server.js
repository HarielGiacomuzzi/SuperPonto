'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()
const Handlers = require('./api/routeHandlers')

// configurações de objetos
server.connection({
  port: 3000
})

// inicialização do servidor
server.start((err) => {
  if (err) {
    throw (err)
  }
  console.log('Server up and running: ', server.info.uri)
})

// rotas do servidor
server.route({
  method: 'POST',
  path: '/insertUser',
  handler: Handlers.insertUser
})

server.route({
  method: 'GET',
  path: '/findByMail',
  handler: Handlers.searchUser
})

server.route({
  method: 'POST',
  path: '/insertEntry',
  handler: Handlers.insertEntry
})

server.route({
  method: 'GET',
  path: '/getEntries',
  handler: Handlers.searchEntries
})
