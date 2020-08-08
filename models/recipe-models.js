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

function getInstructions(recipe_id) {
	// 	SELECT recipes_instructions.instruction_id, instructions.instruction, recipes_instructions.step_number FROM instructions
	// JOIN recipes_instructions ON instructions.id = recipes_instructions.instruction_id
	// WHERE recipes_instructions.recipe_id = 2
	// ORDER BY step_number ASC;

	return db("instructions")
		.select(
			"recipes_instructions.step_number",
			"instructions.instruction",
			"recipes_instructions.instruction_id"
		)
		.join(
			"recipes_instructions",
			"instructions.id",
			"recipes_instructions.instruction_id"
		)
		.orderBy("step_number")
		.where(recipe_id);
}

function allRecipesWithIngredient(ingredient_id) {
	// 	SELECT recipes.name FROM recipes
	// JOIN recipes_ingredients ON recipes.id = recipes_ingredients.recipe_id
	// WHERE ingredient_id = 9;
	return db("recipes")
		.select("recipes.id as recipe_id", "recipes.name as recipe_name")
		.join("recipes_ingredients", "recipes.id", "recipes_ingredients.recipe_id")
		.where(ingredient_id);
}

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions,
	allRecipesWithIngredient,
};
