let arr= [1,2,3,4,5,6,7,8,9];

function max(arr){
    let sum =0;
    let max=0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
        
        if(max<sum)max=sum
        max= Math.max(max,sum)
    }
    return max;
}

console.log(max(arr));