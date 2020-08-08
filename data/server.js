const express = require("express");
const server = express();
const morgan = require("morgan");

// Logger
server.use(morgan("dev"));
// Convers to json objects
server.use(express.json());

// Root route
server.use("/", (req, res) => {
	res.json({ message: "API is up and running..." });
});

module.exports = server;
