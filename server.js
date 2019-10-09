const express = require("express");
const cors = require("cors");
const server = express();
const logger = require("morgan");

const helmet = require("helmet");

server.use(express.json(), logger("dev"), helmet());
server.use(cors());

const productsRoutes = require("./products/productsRoutes");

server.get("/", (req, res) => {
  res.status(200).json("Home Page up and running");
});

server.use("/api/products/", productsRoutes);

module.exports = server;
