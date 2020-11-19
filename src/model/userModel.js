const express = require("express");
const route = express.Router();
const ValidationError = require("../errors/ValidationError");

const knexfile = require("../../knexfile");


class Account {
  constructor(body) {
    this.body = body;
  }

  async registrar() {
    
    this.body = {
      name: this.body.name,
      email: this.body.email,
      password: this.body.password,
    };
    
    
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
