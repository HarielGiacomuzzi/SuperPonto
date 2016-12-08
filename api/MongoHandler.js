'use strict'

const mongoose = require('mongoose')
const User = require('./../model/user')
const UserEntry = require('./../model/entry')

var conURL = 'mongodb://localhost:666/test'

mongoose.connect(conURL)
mongoose.set('debug', true)

module.exports = {
  // This method, creates a new registry fo the
  // given parameters (First Name, Last Name, E-mail address, Password)
  // also on completion runs a callback function passin as parameter the user created OR a error if any.
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

// This method is used to search on the mongo documents for a specific
// user document, it takes as parameters (E-mail address) and
// reuns a callback function when it's done, passin as argument the user object OR a error if any
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

// This method creates a new document on mongo, using the UserEntry schema,
// it takes as arguments (the date wich will be inserted, the user object wich will be linked with and a callback function
// that receives as parameters the new entry OR an erro if it is the case)
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

//This method retrieves a User object from mongo, as parameters
//it takes the ID of the requested user and a callback function
//wich receives an argument that is the User document OR an error
//if this is the case
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
  },

//The method below update the Date element of a UserEntry document,
//it takes as arguments the ID of the UserEntry, the new date that will replace the
//old one and a callback funtion with the edited document OR an error if it is the case
  editEntry: (entryID, date, callback) =>{
      UserEntry.update({
          _id : entryID
      },{
           date : date
          ,updated_at : new Date()
      },(error, entry) => {
          if(error){
              callback(new Error('Cannot find the entry requested'))
          }else{
              callback(entry)
          }
      });
  }

}
