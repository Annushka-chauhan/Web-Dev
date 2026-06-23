// const fs = require("fs");
// fs.readFile("af.txt","utf-8", function(err,data){
//     if(err){
//         console.log("There is an error opeing this file")
//     }else {
//         console.log(data);
//     }
// })
//we need to give promise some function in it to not throw an error 
const p = new Promise((resolve,reject)=>resolve);
console.log(p)
