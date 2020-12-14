//Dependency
const fs = require("fs");
//Exchanging JSON data into JS object
var data = JSON.parse(fs.readFileSync("./Develop/db/db.json", "utf8"));
//Load data
// const savedNotesData = require("../Develop/db/db.json");
//Routing
module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(data);
  });

  app.get("/api/notes/:id", function (req, res) {
    res.json(data[Number(req.params.id)]);
  });

  //Api post requests
  app.post("/api/notes", function (req, res) {
    data.push(req.body);
  });

//   Delete 
app.delete("/api/notes/:id", function(req, res) {
    let noteId = req.params.id;
    let newId = 0;
    data = data.filter(currentNote => {
        return currentNote.id != noteId;
    });
    for (currentNote of data) {
        currentNote.id = newId.toString();
        newId++;
    }
    fs.writeFileSync("../Develop/db/db.json", JSON.stringify(data));
    res.json(data);
});
};
