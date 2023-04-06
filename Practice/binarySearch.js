// find index of given x by using binary search ;

let arr = [1/5, 2/3, 3/2, 13/2]
 let x=3/2
 
let i=0
let j=arr.length
while(i<=j){
  let mid=Math.round((i+j)/2)
  if(arr[mid]==x){
    console.log(mid)
    break;
  }else if(arr[mid]>x){
    i=mid+1
  }else{
    j=mid-1
  }
}