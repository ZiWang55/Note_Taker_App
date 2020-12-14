//Load data
const savedNotesData = require("../Develop/db/db.json");
//Routing
module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
       res.json(savedNotesData);
    });

//Api post requests
app.post("/api/notes", function (req, res) {
    savedNotesData.push(req.body);
});

}