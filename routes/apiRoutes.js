//link the route to json data
let dbJson = require("../db/db.json");

//routes

module.exports = function(app) {
    //Get API notes
    app.get("/api/notes", function(request, response){
        response.json(dbJson);
    });

    //add new items to API when they are saved
    app.post("/api/notes", function(request, response){
        console.log("Data logged:");
        console.log(response.req.body);
        dbJson.push(response.req.body);
        response.end("yes");
    });

    //deltes notes when trashcan is clicked
    app.delete("/api/notes/:note", function(request, response){
        console.log("Note deleted");
        let newDbJSON = [];
        const thisNoteID = request.params.note;
        const noteToDelete = dbJson.map(note => {
            if (note.id !== thisNoteID) {
                newDbJSON.push(note);
            }
        });

        dbJson = newDbJSON;
    });
};
