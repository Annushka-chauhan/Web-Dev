const express = require("express");
const { Pool } =require("pg")
const bcrypt = require("becrypt")
const pool = new Pool({
    connectionString:"postgresql://neondb_owner:npg_Gxu2sBg7SplD@ep-morning-firefly-athe0uvf-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

const app = express();
app.use(express.json())
app.post("/signup",async (req,res)=>{
   const  username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   //const hashedPassword = hash(password);
   const hashedPassword = await becrypt.hash(password,10)
   //Never store password in plane text store the password in hashed format so that no other can
   //have the password and use it from database
   const response = await pool.query(`INSERT INTO users (username,email,password) VALUES ($1,$2,$3)RETURNING id;`,[username,email,password])

res.json({
    message: "Signup Done",
    id: response.rows[0].id 
   })
})
app.post("/signin",async (req,res)=>{
    const email = req.body.email;
    const password= req.body.password;
    const response = await pool.query(`SELECT * FROM users WHERE email ='${email}'`)
    const userFound = response.rows[0];
   
    if(!userFound){
       return  res.status(403).json({
        message: "Incorrect Credentials "
    })
    }else {
         //in this we pass the original string and the encrypted string which tells us if both of them 
    //are ryt or not(Boolean)
    //it first gets the salt from the hashed password appends the salt to the planetext password hashes it and then compares 
    const correctPassword= bcrypt.compare(password,userExists.password)
    if(correctPassword){
        res.json({
            token: "asdiosdosadiosdaisado"
        })
    }else{
         return  res.status(403).json({
        message: "Incorrect Credentials "
        })
      }
    } 
})
app.listen(3000)