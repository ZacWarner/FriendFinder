app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
})

module.exports = htmlRoutes;