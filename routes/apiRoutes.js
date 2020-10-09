// Load Data
let dbJSON = require("../db/db");

// Routes

module.exports = function(app) {
   //api for the notes
   app.get("/api/notes", function(request, response) {
      response.json(dbJSON);
   });

   // adds new note to the api when they are saved
   app.post("/api/notes", function(request, response) {
      console.log("Post successful! Data logged:");
      console.log(response.req.body);
      dbJSON.push(response.req.body);
      response.end("yes");
   });

   // delete note when the trashcan icon is pressed

   app.delete("/api/notes/:note", function(request, response) {
      console.log("Record deleted");
      let newDbJSON = [];
      const thisNoteID = request.params.note;
      const noteToDelete = dbJSON.map(note => {
         if (note.id !== thisNoteID) {
            newDbJSON.push(note);
         }
      });

      dbJSON = newDbJSON;

      response.end();
   });
};

