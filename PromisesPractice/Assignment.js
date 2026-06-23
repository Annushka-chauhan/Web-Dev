// const fs = require("fs");
// let contents = fs.readFileSync("b.txt","utf-8");
// const trimContent = contents.trim();
// fs.writeFileSync("b.txt",trimContent);


function cleanFile(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath, "utf-8", function(err,contents){
            if(err){
                reject()
            }else {
                const trimContent = contents.trim();
                fs.writeFile("b.txt",trimContent,function(err){
                    if(err){
                        reject()
                    }else {
                        resolve()
                    }
                })
            }
        })
    })
}


//Promisified Version of CleanFile 
const fs = require("fs");
cleanFile("b.txt")
.then(function(){
    console.log("File has been Cleaned Success fully")
})
.catch(function(){
    console.log("There is an error while Cleaning the file")
})

//Using the async await function 
async function main(){
    try{
        await cleanFile("b.txt");
        console.log("Done Reading the file")
    }catch(e){
        console.log("Error while cleaning the file ")
    }
}


const fs = require("fs");
//async function apne aap promisse m convert ho jata hai 
async function cleanManyFiles(prefix){
    await cleanFile(prefix+"1.txt");
     await cleanFile(prefix+"2.txt");
      await cleanFile(prefix+"3.txt");
      return "hi there "

}



//Write a promisified function that takes a file prefix ass an input (a)
//and cleans ({prefix}1.txt, {prefix2}.txt, {prefix}3.txt)

cleanManyFile("a")
.then(function(data){
    console.log("all 3 files have been cleaned ")
})
.catch(function(){
    console.log("Error while Reading the file")
})