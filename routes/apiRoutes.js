//Load data
const savedNotesData = require("../Develop/db/db.json");
//Routing
module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        res.json(db.json);
    });
}
//Api post requests

