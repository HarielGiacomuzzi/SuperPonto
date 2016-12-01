"use strict";

const assert    = require('assert');
const mongoose  = require('mongoose');
const User      = require('./../model/user');
const UserEntry = require('./../model/entry');


var conURL = 'mongodb://localhost:666/test';

mongoose.connect(conURL);
mongoose.set('debug', true);

// 
module.exports = {
     createUser : (fName, lName, mail, pass, constr, callback) => {
        let user = new User({
             firstName   : fName
            ,lastName    : lName
            ,email       : mail
            ,password    : pass
            ,constraints : constr
        });
         
        user.save((error)=>{
            if(error)
                throw(error)
            callback('done');
        });
    }
    
    ,retrieveUserByemail : ( email , callback) => {
        User.find({
            email : email
        }, (error, user)=>{
            if(error)
                throw(error)
            callback(user)
        });
    }
}