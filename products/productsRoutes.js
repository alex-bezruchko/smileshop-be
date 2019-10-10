const express = require("express");
const productsDb = require("./../data/helpers/productsDb.js");
const multer = require("multer");

const router = express.Router();
router.use(express.json());


router.get("/", async (req, res) => {
  try {
    const news = await productsDb.getAllProducts();
    if (news) {
      res.status(200).json(news);
    } else {
      res.status(404).json("There are no available news.");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/categories", async (req, res) => {
  try {
    const categories = await productsDb.getAllCategories();
    if (categories) {
      res.status(200).json(categories);
    } else {
      res.status(404).json("There are no available categories.");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});



router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await productsDb.getProductById(id);

    if (post) {

      res.status(200).json(post);
    } else {
      res.status(404).json("Post id is unavailable.");
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

module.exports = router;
