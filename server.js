// Dependencie
const express = require("express");

// Setting up Express 
const app = express();
var PORT = process.env.PORT || 8080;

//handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes for the api and the html
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
   console.log("App listening on PORT: http://localhost:" + PORT);
});