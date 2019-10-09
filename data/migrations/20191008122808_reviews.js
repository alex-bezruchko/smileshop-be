exports.up = function (knex, Promise) {
    return knex.schema.createTable("reviews", function (reviews) {
        reviews.increments();
        reviews.text("review", 5000);
        reviews.text("date", 5000).notNullable();
        reviews
            .integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users");
        reviews
            .integer("product_id")
            .unsigned()
            .references("id")
            .inTable("products");
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("reviews");
};
