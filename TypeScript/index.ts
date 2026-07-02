import express from "express";
const app = express();
app.use(express.json());
// if we want to crete an object its syntax is defined in this way 
interface SignupInput{
    username: string,
    password: string
}
app.post("/signup",(req,res)=>{
    const body: SignupInput = req.body;
    //push to db 
    // db.users.create({
    //     data:{
    //         username: body.
    //     }
    // })

    res.json({
        message: "Signed Up"
    })
})
app.listen(3000)


//ASSIGNMENT 
interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

function isLegal(user: User): boolean{
    if(user.age>18){
        return true;
    }
    return false 
}

let user1: User = {
    firstName: "Anushka",
    lastName: "Chauahan",
    email: "anushka@gmail.com",
    age: 21
}
console.log(isLegal(user1));



//Understanding Type 
//Union when we have ya toh number ho skta hai ya phr string 
type Pincode = string|number;
let pincode : Pincode = "101301Q";
pincode = 123421
pincode ="aaa123"


//Intersection
//do ki sari chezze jor detaa hai 
type Employee = {
    name: string;
    startDate: Date;
}
type Manager= {
    name: string;
    department: string;
}
type superManager = Employee& Manager

// ////means type SuperManager = {
//   name: string,
//   startDate: string,
//   department: string
// }