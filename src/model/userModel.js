const express = require("express");
const route = express.Router();
const ValidationError = require("../errors/ValidationError");
const validator = require("validator");
const knexfile = require("../../knexfile");
const database = require("../database/database");

class Account {
  constructor(body) {
    this.body = body;
  }

  async registrar() {
    this.checkBodyKeys();
    this.validate();

    this.body = {
      name: this.body.name,
      email: this.body.email,
      password: this.body.password,
    };
    console.log(this.body);

    // Função para criar usuário

    return database("ACCOUNTS").insert(
      {
        NOME: this.body.name,
        EMAIL: this.body.email,
        PASSWORD: this.body.password,
      },
      ["*"]
    );
  }

  checkBodyKeys() {
    if (!this.body.name) throw new Error("Nome é um dado necessário");
    if (!this.body.email) throw new Error("Email é um dado necessário");
    if (!this.body.password) throw new Error("Senha é um dado necessário");
  }

  validate() {
    if (!validator.isEmail(this.body.email))
      throw new ValidationError("O Email inserido é inválido.");
    if (this.body.password.length < 6 || this.body.password.length > 16)
      throw new ValidationError("Senha inválida");
  }

  async login() {
    this.body = {
      email: this.body.email,
      password: this.body.password,
    };

    try {
      const account = await database("ACCOUNTS").where({
        EMAIL: this.body.email, PASSWORD: this.body.password
      });
      if (Object.keys(account).length != 0) {
        return account
      }
      else {
        throw new ValidationError
      }
    } catch (err) {
      throw new ValidationError("Credenciais inválidas.");
    }
  }
}

module.exports = Account;
