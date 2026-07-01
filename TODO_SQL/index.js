const express = require("express");
const { Pool } =require("pg")

const pool = new Pool({
    connectionString:"postgresql://neondb_owner:npg_Gxu2sBg7SplD@ep-morning-firefly-athe0uvf-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

const app = express();
app.use(express.json())
app.post("/signup",async (req,res)=>{
   const  username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   const response = await pool.query(`INSERT INTO users (username,email,password) VALUES ($1,$2,$3)RETURNING id;`,[username,email,password])

res.json({
    message: "Signup Done",
    id: response.rows[0].id 
   })
})
app.post("/signin",async (req,res)=>{
    const email = req.body.email;
    const password= req.body.password;
    const response = await pool.query(`SELECT * FROM users WHERE email ='${email}' AND password = '${password}'`)
    const userFound = response.rows[0];
    if(!userFound){
       return  res.status(403).json({
        message: "Incorrect Credentials "
    })
    }else {
        res.json({
            token: "asdiosdosadiosdaisado"
        })
    }
    
})
app.listen(3000)