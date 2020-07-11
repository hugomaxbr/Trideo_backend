const Account = require("../model/userModel");

exports.store = async (req, res, next) => {
  const user = new Account(req.body);
  try {
    const accountCreated = await user.registrar();

    return res
      .status(201)
      .json({ msg: "O Usuário foi criado com sucesso", accountCreated });
  } catch (err) {
    console.log(err);
    res.status(400).json("SQL Maping é feio em!");
  }
};
