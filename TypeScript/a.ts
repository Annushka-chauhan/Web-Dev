// let n: number =1;
// console.log(n);
function greet(firstName:string){
    console.log("Hello "  +firstName)
}
greet("Anushka");


function sum(a: number, b:number){ //no type inference we need to explicitly give the type
    return a+b;
}
let x=1;//type inference 
let y=2;

console.log(sum(x,y));

//specifying return type in typescript this number|null is referred as composite return type
function first_element(arr : number[]):number|null{
    if(arr.length>0){
        return arr[0] ?? null;
    }
    return null;
}
let x2= first_element([]);