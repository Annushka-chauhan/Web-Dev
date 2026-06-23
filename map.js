//if wwe have an array as [1,2,3,4,5] and => [2,4,6,8,10]
//whenever we are told to transform arrays we do this 
//standard way is 
const input =[1,2,3,4,5]
//and we have a transformation function so we use map with the i/p and funcn to get desired op 
//each value of the input array mapped and went to the transformation funcn updated and provided with answer 
function transform(i){
    return i*2;
}
//map(input, transsform)
const ans =  input.map(transform)
console.log(ans);