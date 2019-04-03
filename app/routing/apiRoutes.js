var express = require("express");

var apiRouter = express.Router();

apiRouter.get("/api/friends", function(req, res) {
    console.log("SOMETHING TO SEE THIS IS WORKING")
})

module.exports = apiRouter;