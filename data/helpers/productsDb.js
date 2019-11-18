const db = require("../dbConfig.js");

module.exports = {
  getPromotedProducts,
  getAllProducts,
  getProductById,
  getAllCategories,
  getProductByCategory
};


function getPromotedProducts() {
  return db
    .select(
      "products._id",
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
    .orderBy("products._id");
}

async function getAllCategories() {
  return db("categories")
}
async function getAllProducts() {
  return db
    .select(
      "products._id",
      "products.name",
      "products.type",
      "products.image",
      "products.category_id",
      "products.description",
      "products.sku",
      "products.price",
      "categories.id",
      "categories.cat_name"
    )
    .from("products")
    .leftJoin("categories", "categories.id", "=", "products.category_id")
}

function getProductById(_id) {
  return db
    .select('*')
    .from("products")
    .where("products._id", _id)

    .first();
}

function getProductByCategory(category_id) {
  return db
    .select(
      "products._id",
      "products.name",
      "products.type",
      "products.image",
      "products.category_id",
      "products.description",
      "products.sku",
      "products.price",
      "categories.id",
      "categories.cat_name"
    )
    .from("products")
    .where("products.category_id", category_id)
    .leftJoin("categories", "categories.id", "=", "products.category_id")


}
