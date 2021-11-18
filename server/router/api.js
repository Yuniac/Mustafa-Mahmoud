const express = require("express");
const router = express.Router();
// controllers
const { getAllBooks } = require("../controllers/get")

router.get("/api", getAllBooks)

module.exports.router = router