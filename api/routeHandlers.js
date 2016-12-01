"use strict";

const MongoHandler = require('./MongoHandler');

module.exports = {
    
    insertUser : (req, repl) => {
        console.log(req.payload)
        let firstName   = req.payload.firstName;
        let lastName    = req.payload.lastName;
        let email       = req.payload.email;
        let password    = req.payload.password;
        let constraints = req.payload.constraints;
        MongoHandler.createUser(firstName, lastName, email, password, constraints , repl);
    }

    ,searchUser : (req, repl) => {
        let email       = req.headers['email'];
        let a = MongoHandler.retrieveUserByemail(email, repl);   
    }
}