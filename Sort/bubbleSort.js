let arr = [ 546,23,45,12,34,57,87,98,90];

function bubbleSort(arr){
    for(let i= arr.length; i>0;i--){
        for(j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] =  [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));