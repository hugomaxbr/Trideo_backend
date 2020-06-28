const express = require("express");
const route = express.Router();
const ValidationError = require("../errors/ValidationError");
const validator = require("validator");
const knex = require('../database/database');

class Account {
  constructor(body) {
    this.body = body;
    this.user = null;
  }

  registrar() {
    this.checkBodyKeys();
    this.validate();

    this.body = {
      name: this.body.name,
      email: this.body.email,
      password: this.body.password,
    };

    this.user = // Função para criar usuário

  }

  checkBodyKeys() {
    if (!this.body.nome) throw new Error("Nome é um dado necessário");
    if (!this.body.email) throw new Error("Email é um dado necessário");
    if (!this.body.password) throw new Error("Senha é um dado necessário");
  }

  validate() {
    if (!this.validator.isEmail(email))
      throw new ValidationError("O Email inserido é inválido.");
    if (this.body.password.length < 6 || this.body.password.length > 16)
      throw new ValidationError("Senha inválida");
  }
}
