const { json } = require("express");

express = require("express");

const route = require("./routes");

app = express();

app.use(express.json());

app.use(route);

const port = process.env.PORT || 3333;

app.use((err, req, res, next) => {
  const { name, message } = err;
  if (err.name === "Validation Error") res.status(400).json({ error: message });
  else res.status(500).json({ name, message });

  next();
});

app.listen(port, () => {
  console.log(`[*]Servidor iniciado na porta ${port}`);
  console.log(`[*]Acesso em http://localhost:${port}`);
});
