// write a program to convert first letter in string of array in capital
let arr = ["hi", "hello", "name", "is", "piyush"];
//  console.log(arr[0].charAt(0).replace(arr[0].charAt(0).toUpperCase()))
// var m = arr[0].charAt(0).toUpperCase()
// var f = arr[0].charAt(0)
//   console.log(arr[0].replace(f,m) )
// let ds =arr.shift()
// console.log(arr.splice(0,1));
let newArr = [];
function capitaliez(arr) {
  var m = arr[0]?.charAt(0).toUpperCase();
  var f = arr[0]?.charAt(0);
  if (arr.length == 0) return newArr;
  if (arr[0]?.charAt(0) == arr[0].charAt(0).toUpperCase()) newArr.push(arr[0]);
  else {
    newArr = newArr.concat(arr[0].replace(f, m));
    capitaliez(arr.slice(1));
  }
}
capitaliez(arr);
console.log(newArr);
