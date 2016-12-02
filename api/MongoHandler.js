'use strict'

const mongoose = require('mongoose')
const User = require('./../model/user')
const UserEntry = require('./../model/entry')

var conURL = 'mongodb://localhost:666/test'

mongoose.connect(conURL)
mongoose.set('debug', true)

module.exports = {
  insertUser: (fName, lName, mail, pass, constr, callback) => {
    let user = new User({
      firstName: fName,
      lastName: lName,
      email: mail,
      password: pass,
      constraints: constr
    })

    user.save((error) => {
      if (error) {
        callback(Error('Não Foi possivel inserir um novo usuário'))
        throw (error)
      }
      callback(user)
    })
  },

  retrieveUserByemail: (email, callback) => {
    User.find({
      email: email
    }, (error, user) => {
      if (error) {
        callback(Error('Não Foi possivel encontrar o usuário solicitado'))
        throw (error)
      }
      callback(user)
    })
  },

  insertEntry: (date, user, callback) => {
    let entry = new UserEntry({
      date: date,
      user: user
    })

    entry.save((error, entry) => {
      if (error) {
        callback(Error('Não foi possivel inserir o registro'))
        throw (error)
      }
      callback(entry)
    })
  },

  retrieveEntryByUser: (userID, callback) => {
    UserEntry.find({
      user: userID
    }, (error, entry) => {
      if (error) {
        callback(Error('Não foi possivel encontrar os registros'))
        throw (error)
      }
      callback(entry)
    })
  }

}
