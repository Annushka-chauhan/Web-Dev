import express from "express";
//Cookie parser is an middleware used to parse a very long string 
//and gets u an object
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";

const JWT_SECRET = "test123";

const app = express();
app.use(cookieParser());
app.use(express.json());

//is telling your backend:
//"Only allow requests from http://localhost:5173, and allow cookies/credentials to be sent along with those requests."
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // do db validations, fetch id of user from db
    const token = jwt.sign({
        id: 1
    }, JWT_SECRET);
    //will put the cookie in the set cookie header 
    res.cookie("token", token);

    res.send("Logged in!");
});

app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    // Get email of the user from the database
    res.send({
        userId: decoded.id
    })
});


app.post("/logout", (req, res) => {
    res.cookie("token", "ads");
    res.json({
        message: "Logged out!"
    })
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"))
})

app.listen(3000);