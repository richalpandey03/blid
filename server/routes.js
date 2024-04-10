const express = require("express");
const apiRouter = express.Router();
const characterApis = require("./modules/rickAndMontyCharacters/rickAndMontyRoutes")

module.exports = () =>
	apiRouter
        .use("/characters", characterApis())
		.get("/healthcheck", (req, res) => {
			res.send("The server is up and running");
		});