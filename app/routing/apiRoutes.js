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
    var yourScore = 0;
    var totalArr = [];
    var check;
    var match = 100;
    var matchLoc;
    for (let i = 0; i < 10; i++) {
        yourScore += parseInt(newSurvey.answers[i]);
    };

    for (let i = 0; i < surveys.length; i++) {
        var score = 0;
        for (let j = 0; j < 10; j++) {
            score += parseInt(surveys[i].answers[j]);
        }
        totalArr.push(score);
    };

    for (let i = 0; i < totalArr.length; i++) {
        check = Math.abs(yourScore - totalArr[i]);
        if (check <= match) {
            match = check;
            matchLoc = i;
        };
    };











    surveys.push(newSurvey);
    res.json(surveys[matchLoc])
})

module.exports = router;