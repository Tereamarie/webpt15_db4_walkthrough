exports.up = async function (knex) {
	await knex.schema.createTable("recipes", (table) => {
		table.increments("id");
		table.text("name").notNullable().unique();
	});

	await knex.schema.createTable("ingredients", (table) => {
		table.increments("id");
		table.text("name").notNullable().unique();
	});

	await knex.schema.createTable("instructions", (table) => {
		table.increments("id");
		table.text("instruction").notNullable();
	});

	await knex.schema.createTable("recipes_ingredients", (table) => {
		table.primary(["recipe_id", "ingredient_id"]);
		table
			.integer("recipe_id")
			.references("id")
			.inTable("recipes")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table
			.integer("ingredient_id")
			.references("id")
			.inTable("ingredients")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table.float("quantity").notNullable();
	});

	await knex.schema.createTable("recipes_instructions", (table) => {
		table.primary(["recipe_id", "instruction_id"]);
		table
			.integer("recipe_id")
			.references("id")
			.inTable("recipes")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table
			.integer("instruction_id")
			.references("id")
			.inTable("instructions")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table.integer("step_number").notNullable().unsigned();
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists("recipes_instructions");
	await knex.schema.dropTableIfExists("recipes_ingredients");
	await knex.schema.dropTableIfExists("recipes_instructions");
	await knex.schema.dropTableIfExists("instructions");
	await knex.schema.dropTableIfExists("ingredients");
	await knex.schema.dropTableIfExists("recipes");
};
