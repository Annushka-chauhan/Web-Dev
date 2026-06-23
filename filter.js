//filtering 
//what if i tell u, given an input array give back all even values from it 
const arr= [1,2,3,4,5]
function filteringLogic(n){
    if(n%2==0){
        return true;
    }else {
        return false;
    }
}
const ans = arr.filter(filteringLogic);
console.log(ans);