exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        { instruction: "Boil water in pan" },
        { instruction: "Cook noddles according to package" },
        { instruction: "Heat pasta sauce" },
        { instruction: "Combine pasta and sauce" },
        { instruction: "Serve" },
        { instruction: "Cook carne asada" },
        { instruction: "Cut up lettuce" },
        { instruction: "Make your freakin' tacos" },
        {
          instruction:
            "Put peanut butter and jelly between two pieces of bread",
        },
        { instruction: "Eat sandwhich" },
      ]);
    });
};
