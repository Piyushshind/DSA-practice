let arr = [3,-5,7,-2,8,-4,9,2,-7];

function sliding(arr,k){
    let sum=0;
    
    for(let i=0;i<k;i++){
        sum +=arr[i]

    }
    let max = sum;
 
    for(let j=k;j<arr.length;j++){
        sum+= arr[j]-arr[j-k]
        max= Math.max(sum,max);
    }
    return max;
}

console.log(sliding(arr,4));