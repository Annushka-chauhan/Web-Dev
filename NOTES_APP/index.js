const express= require("express");
const app = express();
//if there is any body in the req this is the middleware which extracts it
app.use(express.json());
//POST = Create a note
const notes =[];
app.post("/notes",function (req,res){
    const note = req.body.note;
    notes.push(note);
    res.json({
        message: "Done!"
    })
})
//GET = get all my notes
app.get("/notes", function(req,res){
    res.json({
        notes
    })
})
app.get("/",function(req,res){
    res.sendFile("/home/anushka/Desktop/Frontend/NOTES_APP/index.html")
})
app.listen(3000);