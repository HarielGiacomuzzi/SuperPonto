//configs babel
require('babel-register')({
	presets: ['es2015', 'react'],
});

// Constantes
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Hapi = require('hapi');
const server = new Hapi.Server();

// Variaveis de configuração de ambiente
var conURL = 'mongodb://localhost:666/test';

// configurações de objetos
server.connection({
	port: 3000
});

// inicialização do servidor

server.start((err) => {
	assert.equal(null, err);
	console.log('Server up and running: ${server.info.uri}');
});

// registro de plugins
server.register(
	  [{register : require('inert') } , { register: require('vision') }]
	, (err) => {
		if(err){
			console.log(err);
			throw(err);
		}

		server.views({
			  engines: { jsx : require('hapi-react-views') }
			, relativeTo: __dirname
			, path: 'views'

		});
	}
);

// rotas do servidor
server.route({
	  method: 'GET'
	, path: '/'
	, handler: { view: 'Default' }
});


// Funções auxiliares
MongoClient.connect(conURL, (err, db) => {
	assert.equal(null, err);
	console.log('feitoria');
	db.close();
});



