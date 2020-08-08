const express = require("express");
const router = express.Router();
const Recipes = require("../models/recipe-models.js");

router.get("/", async (req, res, next) => {
	try {
		res.json(await Recipes.getRecipes());
	} catch (error) {
		next(error);
	}
});

module.exports = router;
