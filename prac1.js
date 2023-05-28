// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// '456'   
// "231" 
// "312"
// "321"
// Given n and k, return the kth permutation sequence.
//
function arra(arr,n,k){
     let str ='';
     for(let i=0;i<k;i++){
         str += arr[i]
       for(let j=i+1; j<k; j++){
        str+=(arr[j])
       }
    }
     return str ;

}

// console.log(arra([1,2,3,4,5,6],3,3));

// var string = 'Scaler';

// string = string.substring(1, string.length-1);
// // console.log(string);

// function reverseFirst(w){
//       return (w.slice(-1) + w.slice(0,-1))
//   }
//   console.log(reverseFirst("piyush"));


//Input: s = "God Ding"
//Output: "doG gniD"

var reverseWords = function(s) {
     let a = s.split(' ')
     let n= a.length
     let arr = []
     function reverseFirst(w){
          return (w.slice(-1) + w.slice(0,-1))
     }
     for(let i=0;i<n;i++){
          arr.push(reverseFirst(a[i]))
          // return arr
     }
      
     return arr.join(" ")
 };
//
 console.log(reverseWords("Let's take LeetCode contest"));