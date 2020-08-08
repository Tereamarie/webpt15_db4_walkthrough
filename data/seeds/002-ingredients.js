exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Spaghetti Noodles" },
        { name: "Spaghetti Sauce" },
        { name: "Water" },
        { name: "Carne Asada" },
        { name: "Lettuce" },
        { name: "Bread" },
        { name: "Peanut Butter" },
        { name: "Jelly" },
      ]);
    });
};
