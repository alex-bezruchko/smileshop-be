exports.up = function (knex, Promise) {
  return knex.schema.createTable("categories", function (categories) {
    categories.increments();
    categories
      .text("cat_name", 255)
      .notNullable()
      .unique();
    categories.text("logo", 255).unique();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("categories");
};
