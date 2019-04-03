var express = require("express");
var path = require("path");

var users = require(path.join(__dirname, "../data/friends.js"));

var apiRouter = express.Router();

apiRouter.get("/api/friends", function (req, res) {
    res.json(users);
})

apiRouter.post("/api/friends", function (req, res) {
    console.log(req.body);
    var results = [];
    for (var i = 0; i < users.length; i++) {
        var score = 0;
        for (var j = 0; j < users[i].scores.length; j++) {

            score += Math.abs(parseInt(req.body.scores[j]) - parseInt(users[i].scores[j]));
            console.log(score);

        }
        results.push(parseInt(score));
    }
    console.log(results);
    results.sort(function (a, b) { return a - b });
    console.log(results);
})

module.exports = apiRouter;