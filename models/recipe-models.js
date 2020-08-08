const db = require("../data/dbConfig.js");

function getRecipes() {
	return db("recipes");
}

function getShoppingList(recipe_id) {
	// 	SELECT recipes_ingredients.ingredient_id, ingredients.name, recipes_ingredients.quantity, recipes_ingredients.measurement FROM ingredients
	// JOIN recipes_ingredients ON ingredients.id = recipes_ingredients.ingredient_id
	// WHERE recipes_ingredients.recipe_id = 3;
	return db("ingredients")
		.select(
			"recipes_ingredients.ingredient_id",
			"ingredients.name",
			"recipes_ingredients.quantity",
			"recipes_ingredients.measurement"
		)
		.join(
			"recipes_ingredients",
			"ingredients.id",
			"recipes_ingredients.ingredient_id"
		)
		.where(recipe_id);
}

module.exports = { getRecipes, getShoppingList };
