//configs babel
require('babel-register')({
    presets: ['es2015', 'react']
, });
// Constantes
const assert = require('assert');
const Hapi = require('hapi');
const server = new Hapi.Server();
const MongoHandler = require('./api/MongoHandler');
// configurações de objetos
server.connection({
    port: 3000
});
// inicialização do servidor
server.start((err) => {
    assert.equal(null, err);
    console.log('Server up and running: ', server.info.uri);
});

// rotas do servidor
server.route({
    method: 'GET'
    , path: '/'
    , handler: (req, repl) => {
        console.log(req.headers['collection']);
        repl('dale');
    }
});