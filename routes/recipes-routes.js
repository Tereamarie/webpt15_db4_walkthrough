const express = require("express");
const router = express.Router();
const Recipes = require("../models/recipe-models.js");
const { validateRecipeId } = require("../middleware/index.js");

router.get("/", async (req, res, next) => {
	try {
		res.json(await Recipes.getRecipes());
	} catch (error) {
		next(error);
	}
});

router.get("/:id", validateRecipeId, (req, res) => {
	res.json(req.recipe);
});

router.get("/:id/shoppingList", validateRecipeId, async (req, res, next) => {
	try {
		const shoppingList = await Recipes.getShoppingList({
			recipe_id: req.recipe.id,
		});

		if (shoppingList.length === 0)
			return res.status(404).json({ message: "Shopping list is empty" });

		return res.json(shoppingList);
	} catch (error) {
		next(error);
	}
});

router.get("/:id/instructions", validateRecipeId, async (req, res, next) => {
	try {
		const recipeInstructions = await Recipes.getInstructions({
			recipe_id: req.recipe.id,
		});

		if (recipeInstructions.length === 0)
			return res
				.status(404)
				.json({ message: "No instructions found for recipe" });

		res.json(recipeInstructions);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
