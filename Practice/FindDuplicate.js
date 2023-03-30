// find doplicates in array 
let arr = [2,4,6,8,9,1,6,4];

function findDuplicate(arr){
 let map = new Map();
  for(let i=0;i<arr.length;i++){
    if(map.get(arr[i]) == undefined) map.set(arr[i],1)
    else  map.set(arr[i], map.get(arr[i]) +1)
  }
    let ans = [];
    for(let val of map){
      if(val[1]>1) ans.push(val[0])
    }
    return ans;

  //   let ob={};
  // let ans =[];
  //    for(let val of arr){
  //      ob[val] = ob[val] ?  ob[val]+1 : 1
  //    }
  //    for (let val of arr){
  //     if (ob[val]==2) 
  //     ans.push(val)
  //      ob[val]--
  //    }
  //    return ans
}
console.log(findDuplicate(arr));

// for (let i = 0; i < n; i++) {

//   if (mp.get(nums[i]) == undefined) mp.set(nums[i], 1)
//   else { mp.set(nums[i], 2) }


// }

// for (const val of mp) {
//   if (val[1] == 2) {
//     ans.push(val[0])
//     // console.log(val)
//   }
// }
// return ans;