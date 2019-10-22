exports.seed = function (knex, Promise) {
  return knex("categories").insert([
    {
      cat_name: "supplements",
      cat_slug: "supplements"
    },
    {
      cat_name: "herbs",
      cat_slug: "herbs"
    },
    {
      cat_name: "spices",
      cat_slug: "spices"
    },
    {
      cat_name: "bulk tea",
      cat_slug: "bulk"
    },
    {
      cat_name: "ointments",
      cat_slug: "ointments"
    },
    {
      cat_name: "bath & beauty",
      cat_slug: "bath"
    },
    {
      cat_name: "books",
      cat_slug: "books"
    },

  ]);
};

