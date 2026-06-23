const express= require("express");
const app = express();
//if there is any body in the req this is the middleware which extracts it
app.use(express.json());
//POST = Create a note
const notes =[];
const users=[];
app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const userExist= users.find(user => user.usernmae === username)
    if(userExist){
        return res.status(403).json({
           message : "User with this name already exist "
        })
    }
    user.push({
        username: username,
        password: password
    })
    res.json({
        message: "You have signed up "
    })
})
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