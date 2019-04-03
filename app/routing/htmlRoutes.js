var express = require("express");

var app = express();

app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile("home.html");
});

app.get("/survey", function (req, res) {
    res.sendFile("survey.html");
});