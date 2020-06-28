require("dotenv").config();

module.exports = {
  dev: {
    client: "pg",
    version: "12",
    connection: {
      host: process.env.DBHOST,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: "Trideosec",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },
};
