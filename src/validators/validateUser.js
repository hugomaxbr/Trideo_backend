const validator = require("validator");



module.exports = function (user) {
    if (user.name) throw new ValidationErrorError("Nome é um dado necessário");
    if (user.email) throw new ValidationErrorError("Email é um dado necessário");
    if (user.password) throw new ValidationErrorError("Senha é um dado necessário");
    if (!validator.isEmail(user.email))
        throw new ValidationError("Email inválido");
    if (user.password.length < 6 || user.password.length > 16)
        throw new ValidationError("Senha inválida");
    else{
        return user;
    }
  };