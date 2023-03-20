//remove duplicate
arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function remDupli(arr) {
  let n = arr.length;
  let b = [];
  // ********  1st method :- time complixity is O(n^2)  *************


//   for (let i = 0; i < n; i++) {
//     if (b.indexOf(arr[i]) === -1) {
//       b.push(arr[i]);
//     }
//   }

//   return b;
// 

// *********** 2nd Method  O(n)************
 
   // let temp ;
   //  for(let i=0; i<n; i++  ){
   //       if(arr[i] !== temp){
   //          b.push(arr[i])
   //          temp = arr[i]
   //       }
   //  }
   //  return b


// **** 3rd method object format ***********

   //   let obj ={}
   // for(let i of arr){
   //      obj[i] = true
   //    }
   //    let ans = Object.keys(obj)
   //     return ans


// ****** 4th method by Es6 new set method  *********

   // return [... new Set(arr)]
      
}
 
let answer = remDupli(arr);
console.log(answer);
