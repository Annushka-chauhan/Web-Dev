//http server that supports 4 routes (/sum,/sub,/mul,/div)
//express=>External dependency 
 const express = require("express");
const app =express();
app.use(express.json()) //express.json=>function

//we have created our own middleware using app.use in which first control does to above middleware reaches here console what we have provide 
//and then move to the next function or middleware in the code 
app.use(function(req,res,next){
    console.log("Hi");
    next()
})
 app.get("/",function(req,res){
    res.sendFile("/home/anushka/Desktop/Frontend/Creating_Server/index.html");
 })
 //http://localhost:300--/sum?a=1&b=2
 //For query parameter
 app.get("/sum",function(req,res){
    const a= parseInt(req.query.a);//string
    const b= parseInt(req.query.b)
    const sum = a+b;

    res.json({
        ans: sum
    })
 })
 //For path parameter 
 //http://localhost:3002/sum/1/2
 app.get("/sub/:a/:b",function(req,res){
    const a= parseInt(req.params.a)
    const b= parseInt(req.params.b)

    const sub = a-b;
    res.json({
        ans: sub
    })
 })
 app.get("mul")
 app.get("/div")

 app.listen(3002)