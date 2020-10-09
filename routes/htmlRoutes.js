// ADD DEPENDENCIES
const path = require("path");

// ROUTES

module.exports = function(app) {
   // HTML requests
   app.get("/notes", function(request, response) {
      response.sendFile(path.join(__dirname, "../public/notes.html"));
   });

   // connecting CSS file
   app.get("/assets/css/styles.css", function(request, response) {
      response.sendFile(
         path.join(__dirname, "../public/assets/css/styles.css")
      );
   });

   // connecting JS file
   app.get("/assets/js/index.js", function(request, response) {
      response.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
   });

   // Default is to send user to the home page
   app.get("*", function(request, response) {
      response.sendFile(path.join(__dirname, "../public/index.html"));
   });
};