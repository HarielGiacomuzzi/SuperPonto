"use strict";

module.exports(
    
    insertUser : (req, repl) => {
        let firstName   = req.headers['firstName'];
        let lastName    = req.headers['lastName'];
        let email       = req.headers['email'];
        let password    = req.headers['password'];
        let constraints = req.headers['constraints'];
        MongoHandler.createUser(firstName, lastName, email, password, constraints);
        repl('dale');
    }

    ,searchUser : (req, repl) => {
        let email       = req.headers['email'];
        let a = MongoHandler.retrieveUserByemail(email);   
        repl(a);
    }

);