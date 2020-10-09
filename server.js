const express = require("express");

// setting up Express 
const app = express();
var PORT = process.env.PORT || 8080;

//setting up parse data

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes for api 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
})