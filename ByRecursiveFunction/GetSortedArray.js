let array = [2,5,8,9,1,32,21,33];
let i =0;
let j =1;
let newArr =[];

function isSorted(ar){
    for(let i=0;i<ar.length;i++){
          if(ar[i]>ar[i+1]){
            return false
          }
    }
    return true
}

function sorting(arr){
  
     if(isSorted(arr)){
        newArr= arr;
        return
     }
     else if(arr[i]<arr[j]){
        i++
        j++
        sorting(arr)
     }else{
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i=0;
        j=1;
        sorting(arr)
     }
}

// sorting(array)
console.log(newArr)