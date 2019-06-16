var express = require("express");
var path = require("path");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

var router = express.Router();





router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
})

module.exports = router;