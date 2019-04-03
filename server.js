
var express = require("express");
var path = require("path");

var htmlRouter = require(path.join(__dirname, "app/routing/htmlRoutes.js"));
var apiRouter = require(path.join(__dirname, "app/routing/apiRoutes.js"));

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/app/public/')));
app.use(htmlRouter);
app.use(apiRouter);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});