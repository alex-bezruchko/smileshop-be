const db = require("../dbConfig.js");

module.exports = {
  getPromotedProducts,
  getAllProducts,
  getProductById,
};


function getPromotedProducts() {
  return db
    .select(
      "products.id",
      "products.title",
      "products.summary",
      "products.body",
      "products.postMainImg",
      "products.user_id",
      "categories.id",
      "categories.name"
    )
    .from("products")
    .leftJoin("categories", "categories.id", "=", "products.category_id")

    .limit(5)
    .orderBy("products.id");
}

function getAllProducts() {
  return db
    .select('*')
    .from("products")
    .leftJoin("categories", "categories.id", "=", "products.category_id")
    .orderBy("products.id", "desc");
}

function getProductById(product_id) {
  return db
    .select('*')
    .from("products")
    .where("products.id", product_id)

    .first();
}
