let Negarr = [2,-3,4,,6,7,-9,-23,12];

let ans = SortNegative(Negarr,(x)=>x>=0) // callback 

function SortNegative(arr,callback){
    let newArr=[];
    for(let num of arr){
        if(callback(num)){
            newArr.push(num)
        }
    }
    return newArr;
}

console.log(ans);