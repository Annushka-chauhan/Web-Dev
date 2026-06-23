console.log('hi')
//objects in js
function islegal(user){
    if(user.age>=18){
        console.log(user.name+"is allowed to vote");
    }else {
        console.log(user.name+"is not allowed to vote ");
    }
}
var user1 ={
    name: "Anu",
    age: 20,
    password: "e3456"
}
var user2 ={
    name: "ria",
    age: 21,
    password: "e456"
}
islegal(user1)
islegal(user2)

//we can also have array of objects 
var usersArray = [
    {
        name: "Anushka",
        age: 20
    },{
        name: "Rie",
        age: 21
    }
]
let x= usersArray [0].name;