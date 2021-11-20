const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/index", (req, res) => {
	res.render("main_pages/index");
});

router.get("/literature", (req, res) => {
	res.render("main_pages/literature");
});

router.get("/literature-subpage", (req, res) => {
	res.render("main_pages/literature-subpage");
});

router.get("/lifestory", (req, res) => {
	res.render("main_pages/lifestory");
});
router.get("/memorial", (req, res) => {
	res.render("main_pages/memorial");
});

module.exports = { router };
