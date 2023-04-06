// find index of given x by using binary search ;

let arr = [1/5, 2/3, 3/2, 13/2]
 let x=3/2

function Binary(arr,x, i,j){
  let mid=Math.round((i+j)/2)
  if(arr[mid]==x) return mid
  
  return Binary(arr.slice(mid),x,i,j)
  
}
let result=Binary(arr,x,0,arr.length)
console.log(result)