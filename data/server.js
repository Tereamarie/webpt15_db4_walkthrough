const express = require("express");
const server = express();
const morgan = require("morgan");
const RecipeRouter = require("../routes/recipes-routes.js");
const IngredientRouter = require("../routes/ingredients-routes.js");

// Logger
server.use(morgan("dev"));
// Converts to json objects
server.use(express.json());

server.use("/api/recipes", RecipeRouter);
server.use("/api/ingredients", IngredientRouter);

// Root route
server.use("/", (req, res) => {
	res.json({ message: "API is up and running..." });
});

// Error handling route
server.use("/", (error, req, res, next) => {
	console.log(error);
	res.status(500).json({ message: "Something went wrong." });
});

module.exports = server;
