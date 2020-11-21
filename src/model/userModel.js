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

  }
  }


module.exports = Account;
