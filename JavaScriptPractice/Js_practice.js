var removeDuplicates = function (n) {
  let mp = new Map();
  var ans = [];
  for (val of n) mp.set(val, (mp.get(val) || 0) + 1);
  mp.forEach((key, val) => {
    ans.push(val);
    
  });
  //    console.log(ans)
  //let len = ans.length;
  return ans;
};

// console.log(removeDuplicates([2, 3, 4, 2, 3, 4, 5, 6, 7]));
 
// let nu = [5]
// let tr = 10
// function check(n,tr){
//   for(let i=0;i<n.length;i++){
//        if(n[i].includes(tr)) return true
       
//   }
// }
// console.log(check(nums,8));

// console.log(nums.includes(tr));

// function check(nu,tr){
//   return nu.includes(tr)
// }  
// console.log(check(nu,tr))

// let ans = nu.includes(tr)
// let j= nu.length-1
// console.log(nu[0],nu[j]);


// function cheachLength(arr){
//   let ans1 = []
//   if(arr.length>1){
//       ans1.push(arr[0],arr[arr.length-1])
//   }else ans1.push(arr[0],arr[0])
//    return ans1
// }




