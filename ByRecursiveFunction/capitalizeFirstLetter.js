// write a program to convert first letter in string of array in capital
let arr = ["hi", "hello", "Name", "is", "piyush"];
//  console.log(arr[0].charAt(0).replace(arr[0].charAt(0).toUpperCase()))
// var m = arr[0].charAt(0).toUpperCase()
// var f = arr[0].charAt(0)
//   console.log(arr[0].replace(f,m) )
// let ds =arr.shift()
// console.log(arr.splice(0,1));
let newArr = [];
function capitaliez(arr) {
  var m = arr[0].charAt(0).toUpperCase();
  var f = arr[0].charAt(0);
  if (arr.length == 0) return newArr;
  if (arr[0].charAt(0) == arr[0].charAt(0).toUpperCase() && arr[0].charAt(0).toUpperCase()== false) newArr.push(arr[0]);
  else {
    newArr = newArr.concat(arr[0].replace(f, m));
    capitaliez(arr.slice(1));
  }
  return newArr;
}
// console.log(capitaliez(arr)); 
// console.log(newArr);


// second method  

function capitaliezFirst(arr) {
  if(arr.length==0)return arr;
  else{
    return  [arr[0][0].toUpperCase() + arr[0].slice(1) , ...capitaliezFirst(arr.slice(1))]
  }
}

console.log(capitaliezFirst(arr));