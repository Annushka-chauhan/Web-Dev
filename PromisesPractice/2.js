//Most important interview ques 
//Create a promisified version of fs.readFile 
//create a promisified version of setTimeout
//create a promisified version of fs.writeFike
const fs = require("fs");




//1st
//on top of readFile
function fsReadFilePromisified(fileName, encoding){
    //the promise takes a funcn as an argument and this also takes two functional arguments
    //The task of the promise class is to perform the task of the function and give the result as reject or resolve
    //The actual job of our promisified funcn is to 
    //==read the file 
    return new Promise(function(resolve,reject){
      fs.readFile(fileName,encoding,function(err,data){
        if(err){
            reject(err)
        }else {
            resolve(data)
        }
      })
    });
}


/**
 * class Promise {
 * constructor(fn){
 *     fn(function(){
 * 
 * },function(){
 * 
 * 
 * })
 * }
 * }
 */

//Simple Calling of Promise 
//This means whenever the promise is resolved that is the permision has been granted from os to read a particular file 
//we do the task of consoling the data else throws an error through catch 
fsReadFilePromisified("af.txt","utf-8")
.then(function(data){
 console.log(data);
})
.catch(function(e){
    console.log("Error while opening the file ")
})




//2nd 
function setTimeoutPromisified(delay){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            //This means resolve the promise after delay sec 
            resolve()
        },delay)
    })
}
//Whener this promise is resolved then call this function of consoling 
setTimeoutPromisified(1000)
.then(function(){
    console.log("one second has been passed")
})
.catch(function(){
    console.log("An error Came")
})

//irrespective of then or catch been called the finally will be called everytime 
.finally(function(){
    console.log("Finall after either then or catch ran ")
})