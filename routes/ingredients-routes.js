const express = require("express");
const router = express.Router();
const Recipes = require("../models/recipe-models.js");
const { validateIngredientId } = require("../middleware/index.js");

router.get("/:id/recipes", validateIngredientId, async (req, res, next) => {
	try {
		console.log(req.ingredient);
		const foundRecipes = await Recipes.allRecipesWithIngredient({
			ingredient_id: req.ingredient.id,
		});

		if (foundRecipes.length === 0)
			return res
				.status(404)
				.json({
					message: `No recipes found containing ${req.ingredient.name}`,
				});

		res.json(foundRecipes);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
