// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
//
// "123"
// "132"
// "213"
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

console.log(arra([1,2,3,4,5,6],3,3));