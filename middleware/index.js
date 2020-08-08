const db = require("../data/dbConfig.js");

const validateRecipeId = async (req, res, next) => {
	try {
		const foundRecipeId = await db("recipes")
			.where("id", req.params.id)
			.first();

		if (!foundRecipeId)
			return res.status(404).json({ message: "Recipe not found" });

		req.recipe = foundRecipeId;
		next();
	} catch (error) {
		next(error);
	}
};

module.exports = { validateRecipeId };
