// find doplicates in array 
let arr = [2,4,6,8,9,1,6,4];

function findDuplicate(arr){
 let map = new Map();
  for(let i=0;i<arr.length;i++){
    if(map.get(arr[i]) == undefined) map.set(arr[i],1)
    else  map.set(arr[i],2)
  }
    let ans = [];
    for(let val of map){
      if(val[1]==2) ans.push(val[0])
    }
    return ans;
}
console.log(findDuplicate(arr));