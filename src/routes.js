const express = require("express");
const route = express.Router();
const knex = require("./database/database");
const accountController = require("./controllers/accountController");

route.get("/", (req, res) => {
  res.send("hello World!");
  console.log("entrou em root");
});

route.post("/signup", (request, response) => {
  console.log(request.body);

  request.header("application/json");
  const form = request.body;

  response.json(form);
});

route.post("/database", accountController.store);

route.get("/database", async (req, res) => {
  const account = await knex("ACCOUNTS").select("*");
  res.json(account);
});

module.exports = route;
