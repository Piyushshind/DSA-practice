let flat = [2,5,[4,7,8,[89,[67]]],[89],98];
// let ans = [].concat(...flat)
// console.log(ans);
function flatterArray(arr){
     let newArr =[];
     for(let i =0; i<arr.length; i++){
        if(Array.isArray(arr[i]) == false) newArr.push(arr[i])
        else newArr=newArr.concat(flatterArray(arr[i]))
     }
     return newArr;
}
console.log(flatterArray(flat));