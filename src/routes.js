const express = require("express");

const route = express.Router();

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

module.exports = route;
