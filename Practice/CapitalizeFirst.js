let arr = ['ram', 'piyush', 'mayur','shubham','Om'];

function CapitalizeFirst(arr){
    let newAr= []
    for(let i in arr){
       newAr.push(arr[i][0].toUpperCase() + arr[i].slice(1))
    }
    return newAr
}

console.log(CapitalizeFirst(arr));