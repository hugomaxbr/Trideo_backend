const { __esModule } = require("validator/lib/isAlpha");
const database = require("../database/database");


// Função para criar usuário

function create (user) {
     return database("ACCOUNTS").insert(
        {
          NOME: this.user.name,
          EMAIL: this.user.email,
          PASSWORD: this.user.password,
        },
        ["*"]
      )
}

function findUserbyEmail(user) {
  return database("ACCOUNTS").where({
    EMAIL: this.user.email
  });
  

}

module.exports = create, findUserbyEmail;