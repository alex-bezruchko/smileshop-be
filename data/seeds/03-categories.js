exports.seed = function (knex, Promise) {
  return knex("categories").insert([
    { cat_name: "supplements" },
    { cat_name: "herbs" },
    { cat_name: "spices" },
    { cat_name: "bulk tea" },
    { cat_name: "ointments" },
    { cat_name: "bath & beauty" },
    { cat_name: "books" },

  ]);
};

