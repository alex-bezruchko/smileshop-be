const db = require("../dbConfig.js");

module.exports = {
  getPromotedProducts,
  getAllProducts,
  getProductById,
  getAllCategories
};


function getPromotedProducts() {
  return db
    .select(
      "products.id",
      "products.name",
      "products.summary",
      "products.body",
      "products.postMainImg",
      "products.user_id",
      "categories.id",
      "categories.cat_name"
    )
    .from("products")
    .leftJoin("categories", "categories.id", "=", "products.category_id")

    .limit(5)
    .orderBy("products.id");
}

function getAllCategories() {
  return db("categories")
}
function getAllProducts() {
  return db
    .select(
      "products.id",
      "products.name",
      "products.summary",
      "products.body",
      "products.postMainImg",
      "products.user_id",
      "categories.id",
      "categories.cat_name"
    )
    .from("products")
    .leftJoin("categories", "categories.id", "=", "products.category_id")
}

function getProductById(product_id) {
  return db
    .select('*')
    .from("products")
    .where("products.id", product_id)

    .first();
}
