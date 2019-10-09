exports.seed = function (knex, Promise) {
  return knex("categories").insert([
    {
      name: "supplements",
    },
    { name: "herbs" },
    { name: "spices" },
    { name: "bulk tea" },
    { name: "ointments" },
    { name: "bath & beauty" },
    { name: "books" },

  ]);
};

