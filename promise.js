// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
// 	console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)

//defining a promisified function 
function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}
//Promise makes the life easy as if everything went ryt call the callback with the correct data or
//else use catch if there is some error we have two callbacks success callback and an error callback
function callback(data){
        console.log(data);
    
}
function callBackErr(){
    console.log("error while reading the file")
}
fsReadFilePromisified("a.txt","utf-8")
.then(callback)
.catch(callBackErr)


/**
 * class Promise {
 * constructor(){
 * }
 * then(){
 * }
 * catch(){
 * }
 * }
 */



//call back hell 
setTimeout(function () {
  console.log("hi");

  setTimeout(function () {
    console.log("hello");

    setTimeout(function () {
      console.log("hello there");
    }, 5000);

  }, 3000);

}, 1000);

//Promise chaining
function setTimeoutPromisified(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

setTimeoutPromisified(1000)
    .then(function() {
        console.log("hi");
        return setTimeoutPromisified(3000);
    })
    .then(function() {
        console.log("hello");
        return setTimeoutPromisified(5000);
    })
    .then(function() {
        console.log("hello there");
    });


    setTimeout(function (){
        console.log("Hi");
        setTimeout(function (){
            console.log("NExt timeout")
        },2000)
    },1000)