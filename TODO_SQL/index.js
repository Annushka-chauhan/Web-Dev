const express = require("express");
const { Pool } =require("pg")
const bcrypt = require("becrypt")
const z= require("zod")
const pool = new Pool({
    connectionString:"postgresql://neondb_owner:npg_Gxu2sBg7SplD@ep-morning-firefly-athe0uvf-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})

const app = express();
app.use(express.json())
//zod lets us describe the schema of your input to the backend and then validate things 
//used majorly in open ai where llm need to return the data in the same format 

const SignupSchema=  z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    email: z.email()//is this an valid email 
})
app.post("/signup",async (req,res)=>{
    const {data,success,error} = SignupSchema.safeParse(req.body);
    if(!success){
       res.status(403).json({
        message: "Incorrect Inputs",error:JSON.parse(error)
       })
       return 
    }
   const  username = data.username;
   const email = data.email;
   const password = data.password;
   


//One way to do the input validation ie manual testing for each field
//    if(typeof username !== "string"){
//     res.status(403).json({
//         message: "Input incorrect"
//     })
//     return 
//    }




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