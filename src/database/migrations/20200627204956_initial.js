exports.up = function (knex) {
  return knex.schema.createTable("ACCOUNTS", (table) => {
    table.increments("ID").primary();
    table.string("NOME").notNull();
    table.string("EMAIL").notNull().unique();
    table.string("PASSWORD").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ACCOUNTS");
};
