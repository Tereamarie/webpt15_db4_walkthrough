exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 16, measurement: "oz" },
        { recipe_id: 1, ingredient_id: 2, quantity: 1, measurement: "can" },
        {
          recipe_id: 1,
          ingredient_id: 3,
          quantity: 1,
          measurement: "large pot",
        },
        { recipe_id: 2, ingredient_id: 4, quantity: 4, measurement: "lbs" },
        { recipe_id: 2, ingredient_id: 5, quantity: 2, measurement: "heads" },
        { recipe_id: 3, ingredient_id: 5, quantity: 2, measurement: "pieces" },
        { recipe_id: 3, ingredient_id: 6, quantity: 16, measurement: "oz" },
        { recipe_id: 3, ingredient_id: 7, quantity: 0.5, measurement: "cup" },
        { recipe_id: 3, ingredient_id: 8, quantity: 0.75, measurement: "cup" },
      ]);
    });
};
