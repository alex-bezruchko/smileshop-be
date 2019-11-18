exports.up = function (knex, Promise) {
  return knex.schema.createTable("products", function (products) {
    products.increments('_id').unsigned().primary();
    products.text("name", 5000).notNullable();
    products.text("type", 5000).notNullable();
    products
      .integer("category_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("categories");
    products.text("image", 255);
    products.text("description", 10000);
    products.text("store_review", 10000);

    products.integer("sku", 12).notNullable();
    products.bool("shipping");
    products.integer("price", 8).notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("products");
};
