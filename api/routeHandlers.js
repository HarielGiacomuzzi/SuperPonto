'use strict'

const MongoHandler = require('./MongoHandler')

module.exports = {

  insertUser: (req, repl) => {
    let firstName = req.payload.firstName
    let lastName = req.payload.lastName
    let email = req.payload.email
    let password = req.payload.password
    let constraints = req.payload.constraints
    MongoHandler.insertUser(firstName, lastName, email, password, constraints, repl)
  },

  searchUser: (req, repl) => {
    let email = req.headers['email']
    MongoHandler.retrieveUserByemail(email, repl)
  }

    
  ,insertEntry : (req, repl) => {
    let date = req.payload.date
    let user = req.payload.user
    MongoHandler.insertEntry(date, user, repl)
  }

 ,searchEntries : (req, repl) => {
    let user = req.headers['user']
    MongoHandler.retrieveEntryByUser(user, repl)
 }    
    
}
