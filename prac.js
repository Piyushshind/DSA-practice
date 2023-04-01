let arr1 =[5,8,9,3,6];
let arr2 =[6,9,3,8,5];

//  console.log(arr1.sort());
let l1= arr1.sort();
let l2= arr2.sort();

function isAnnagram(a,b){
     let n= a.length;
     let m= b.length;
     if(n==m){
        for(let i=0; i<n;i++){
           if(a[i]==b[i]) return true;
           else false;
        }
     }else{
        return false
     }
}
console.log(isAnnagram(l1,l2));