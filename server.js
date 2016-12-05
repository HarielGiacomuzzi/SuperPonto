'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()
const Handlers = require('./api/routeHandlers')

// configurações de objetos
server.connection({
  port: 9000
})

// inicialização do servidor
server.start((err) => {
  if (err) {
    throw (err)
  }
  console.log('Server up and running: ', server.info.uri)
})

// rotas do servidor
server.route([
  {
    method: 'POST',
    path: '/insertUser',
    handler: Handlers.insertUser
  },
  {
    method: 'GET',
    path: '/findByMail',
    handler: Handlers.searchUser
  },
  {
    method: 'POST',
    path: '/insertEntry',
    handler: Handlers.insertEntry
  },
  {
    method: 'GET',
    path: '/getEntries',
    handler: Handlers.searchEntries
  },
  {
    method: 'POST',
    path: '/editEntry',
    handler: Handlers.editEntry
  }
])
