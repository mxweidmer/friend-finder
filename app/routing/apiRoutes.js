var express = require("express");
var path = require("path");

var users = require(path.join(__dirname, "../data/friends.js"));

var apiRouter = express.Router();

apiRouter.get("/api/friends", function (req, res) {
    res.json(users);
})

apiRouter.post("/api/friends", function (req, res) {
    console.log("SOMETHING TO SEE THIS IS WORKING")
})

module.exports = apiRouter;