"use strict";

const assert       = require('assert');
const Hapi         = require('hapi');
const server       = new Hapi.Server();
const MongoHandler = require('./api/MongoHandler');
const Handlers     = require('./routeHandlers');

// configurações de objetos
server.connection({
    port: 3000
});

// inicialização do servidor
server.start((err) => {
    if(err){
        throw(err)
    }
    console.log('Server up and running: ', server.info.uri);
});

// rotas do servidor
server.route({
    method: 'GET'
    , path: '/insertUser'
    , handler: Handlers.insertUser(req, repl)
});


server.route({
    method: 'GET'
    , path: '/findByMail'
    , handler: Handlers.searchUser(req, repl)
});