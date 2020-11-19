const Account = require("../model/userModel");
const validateUser = require("../validators/validateUser");
const userRepository = require("../repositories/userRepository");




const execute = (vUser) => {
    validation(vUser);
    return create(vUser);
    
}