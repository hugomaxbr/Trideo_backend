const Account = require("../model/userModel");
const database = require("../database/database");
const createUser = require("../services/createUser");
const validatedUser = require("../validators/validateUser");

exports.store = async (req, res, next) => {
  const user = new Account(req.body);
  validatedUser(user);
  try {
    const accountCreated = await createUser(user);

    return res
      .status(201)
      .json({ msg: "O Usuário foi criado com sucesso", accountCreated });
  } catch (err) {
    console.log(err);
    res.status(400).json("SQL Maping é feio em!");
  }
};

exports.showAllaccounts = async (req, res, next) => {
  const account = await database("ACCOUNTS").select("*");
  res.json(account);
};

exports.logIn = async (req, res, next) => {
  console.log(req.body);
  const account = new Account(req.body);
  try {
    const accountValid = await account.login();
    res.send({ accountValid });
  } catch (err) {
    res.status(400).json(err.message);
  }
};
