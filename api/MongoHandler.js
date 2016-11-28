const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Variaveis de configuração de ambiente
var conURL = 'mongodb://localhost:666/test';
// Funções auxiliares
MongoClient.connect(conURL, (err, db) => {
    assert.equal(null, err);
    console.log('feitoria');
    db.close();
});
module.exports = {
    insertRegistry: function (data, colection) {
        db.collection(colection).insertOne(data, (err, reg) => {
            if (err) {
                throw (err);
            }
            assert.equal(1, reg.insertedCount);
        });
    }
}