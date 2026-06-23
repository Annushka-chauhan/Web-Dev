//Promisified function calling 2nd way 
const fs = require("fs");
function fsReadFilePromisified(fileName, encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(fileName, encoding, function(err,data){
          if(err){
            reject(err)
          }else{
            resolve(data)
          }
        })
    })
}

async function main(){
    //Instead of using then we used await whenever the function is resolved its content is 
    //provided to the fileContents and can be provided as o/p
     let fileContents = await fsReadFilePromisified("af.txt","utf-8")
     let file2Contents = await fsReadFilePromisified("b.txt","utf-8")
     let file3Contents = await fsReadFilePromisified("c.txt","utf-8")
}