const express= require("express");
const jwt = require("jsonwebtoken")
const app = express();

//if there is any body in the req this is the middleware which extracts it
app.use(express.json());
//POST = Create a note
const notes =[];
const users=[];
app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const userExist= users.find(user => user.username === username)
    if(userExist){
        return res.status(403).json({
           message : "User with this name already exist "
        })
    }
    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "You have signed up "
    })
})

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password= req.body.username;
    const userExist = users.find(user=>user.username === username && user.password === password)
    if(!userExist){
        response.status(403).json({
            message: "InCorrect Credentials"
        })
        return;
    }
    //json web token 
   const token = jwt.sign({
    username: username
   },"Annu123")
   res.json({
    token: token
   })
})

//json web Tokem 



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