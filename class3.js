// //asynchronous code convverted to synchronus using the readFileSync 
// //but naturally the read file code is asynchronous in nature 
// const fs = require("fs");
// //Read this file, and DO NOT move to the next line until the file has been completely read.
// //we are doing an asynchronous task synchronously 
// //the fs will ask to read the file and then until the file is read the cpu remains idle 
// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);


//asynchronous operation

//there is a question write here what will be the output of execution of below prog.
//the file content is printed first then the loop runs
//there is alternative o/p of sum and the file read \
// if the sum is printed first then the content of the file 


//soln is 3rd option as if a particular cpu bound operation is taking place ie the loop here there is no way that the async task can interpt it 
//even if the function has been returned and file is ready to read so the sum will come first and then hi there 

const fs= require('fs');
function fileReadCallback(err,content){
    console.log(content);

}
fs.readFile("a.txt","utf-8",fileReadCallback);
let s=0; 
for(let i=1; i<=100000; i++){
    s+=i;
}
console.log(s);


//TASK -2 
//Have 2 values a and b 
//wait for 1 sec and then print there sum 

const a=1;
const b=2;
console.log(a)
console.log(b);
//cpu will perform this task first waits for approx 1 sec then move to the next sum 
for(let i=0; i<100000; i++){

}
console.log(a+b);


//setTimeOut Example 
//Output
//Start
// End
// (wait 2 seconds)
// Timer Finished

//print start -1
console.log("Start");
//"Okay, I'll start a 2-second timer and call this function later."
// The timer starts in the background.
// JavaScript does not wait.
setTimeout(() => {
    console.log("Timer Finished");
}, 2000);
//print end -2
console.log("End");