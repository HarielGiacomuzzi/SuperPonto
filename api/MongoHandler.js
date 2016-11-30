const assert = require('assert');
const mongoose = require('mongoose');
// Variaveis de configuração de ambiente
var conURL = 'mongodb://localhost:666/test';
// Funções auxiliares
mongoose.connect(conURL);
// Schemas
var timeInput = mongoose.Schema({
     userID : Int
    ,regID : Int
    ,timeStamp : Date
});

var userRegister = mongoose.Schema({
     userID : Int
    ,userName : String
    ,userPassword : String
});

module.exports = {
    insertRegistry: function (data, colection) {
        console.log('feito');
    }
}