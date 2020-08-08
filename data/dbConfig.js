const knex = require("knex");
const knexfile = require("../knexfile.js");
const configOptions = process.env.DB_CONFIGURATION || "development"; // on deploy, set the DB_CONFIGURATION to "production"

// Call knex, use the knexfile and find the "configOptions" which are set above
module.exports = knex(knexfile[configOptions]);
