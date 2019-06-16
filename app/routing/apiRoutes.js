var express = require("express");
var path = require("path");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

var surveys = require("../data/friend.js");


var router = express.Router();


router.get("/api/surveys", function (req, res) {

    res.json(surveys);
})

router.post("/api/postsurveys", function (req, res) {
    var newSurvey = req.body;

    surveys.push(newSurvey);
    res.json(surveys)
})

module.exports = router;