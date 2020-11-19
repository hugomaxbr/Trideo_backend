const validator = require("validator");
const Account = require("../model/userModel");
const user = new Account(req.body);

module.exports = function validation() {
    if (!this.user.name) throw new ValidationErrorError("Nome é um dado necessário");
    if (!this.user.email) throw new ValidationErrorError("Email é um dado necessário");
    if (!this.user.password) throw new ValidationErrorError("Senha é um dado necessário");
    if (!validator.isEmail(this.user.email))
        throw new ValidationError("O Email inserido é inválido.");
    if (this.user.password.length < 6 || this.user.password.length > 16)
        throw new ValidationError("Senha inválida");
    else{
        validatedUser = this.user;
        return validatedUser;
    }
     

    
  };