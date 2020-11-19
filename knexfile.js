require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    version: "12",
    connection: {
      host: process.env.DBHOST,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      port: process.env.DBPORT,
      database: "trideosec",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },
};
