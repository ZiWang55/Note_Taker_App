// Dependencies
const express = require("express");
const fs = require("fs");
// Express configuration
const app = express();
// Tells node we are setting an "express" server
var PORT = process.env.PORT || 3000;
// Set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

//Router
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//Listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
