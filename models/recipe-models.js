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

module.exports = { getRecipes, getShoppingList, getInstructions };
