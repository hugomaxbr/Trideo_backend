const userRepository = require("../repositories/userRepository");




const execute = (user) => {
     if (Object.keys(findUserbyEmail(user)).length != 0) {
        return user
     }
     else{
        throw new ValidationError("Email não encontrado")
     }
}