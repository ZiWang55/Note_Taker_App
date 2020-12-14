// Dependencies
const path = require("path");

// Routing
module.exports = function(app) {
    // HTML get requests to direct them into the HTML page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/index.html"))
    });
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/notes.html"))
    });
};