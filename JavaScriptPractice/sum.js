// rest operator 

function sum(ram, ...args){

    let sum = ram;
    for(let i in args){
        sum += args[i]
    }
    return sum
}

console.log(sum(2,3,4,6,7,8,9,7,65,6,7));

// spread operator
let g = [88,45,7,8,9,0]
console.log(...g);