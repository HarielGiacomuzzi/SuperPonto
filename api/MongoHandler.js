'use strict'

const mongoose = require('mongoose')
const User = require('./../model/user')
const UserEntry = require('./../model/entry')

var conURL = 'mongodb://localhost:666/test'

mongoose.connect(conURL)
mongoose.set('debug', true);

//
module.exports = {
  insertUser: (fName, lName, mail, pass, constr, callback) => {
    let user = new User({
      firstName: fName,
      lastName: lName,
      email: mail,
      password: pass,
      constraints: constr
    });

    user.save((error) => {
      if (error) { throw ('Não Foi possivel inserir um novo usuário\n',error) }
      callback()
    });
  },

  retrieveUserByemail: (email, callback) => {
    User.find({
      email: email
    }, (error, user) => {
      if (error) {
        throw ('Não Foi possivel encontrar o usuário solicitado\n',error)
      }
      callback(user)
    });
  }
    
    
  ,insertEntry : (date, user, callback) => {
      let entry = new UserEntry({
          date : date,
          user : user
      });
      
      entry.save((error, entry) => {
          if(error){
              throw('Não foi possivel inserir o registro\n',error)
          }
          callback(entry)
      });
  }
    
  ,retrieveEntryByUser : (user, callback) => {
      UserEntry.find({
          user : user
      }, (error, entry) => {
          if(error){
              throw('Não foi possivel encontrar os registros\n',error)
          }
          callback(entry)
      });
      
  }
    
}
