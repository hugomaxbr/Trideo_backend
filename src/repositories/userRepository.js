const { __esModule } = require("validator/lib/isAlpha");
const database = require("../database/database");


// Função para criar usuário

module.exports = function create (validatedUser) {
     database("ACCOUNTS").insert(
        {
          NOME: this.validatedUser.name,
          EMAIL: this.validatedUseremail,
          PASSWORD: this.validatedUser.password,
        },
        ["*"]
      )
}