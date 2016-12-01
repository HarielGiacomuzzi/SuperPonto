"use strict";

const assert    = require('assert');
const mongoose  = require('mongoose');
const User      = require('./../model/user');
const UserEntry = require('./../model/entry');


var conURL = 'mongodb://localhost:666/test';

mongoose.connect(conURL);

// 
module.exports = {
     createUser : (fName, lName, mail, pass, constr) => {
        let user = new User({
             firstName   : fName
            ,lastName    : lName
            ,email       : mail
            ,password    : pass
            ,constraints : constr
        });
        
        console.log(user)
         
        user.save((error)=>{
            if(error)
                throw(error)
            console.log('User Created with success');
        });
    }
    
    ,retrieveUserByemail : ( email ) => {
        User.find({
            email : email
        }, (error, user)=>{
            if(error)
                throw(error)
            console.log(user)
            return user
        });
    }
}