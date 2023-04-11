let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

function remove(num, val) {
  let n = num.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (num[i] !== val) {
      num[j] = num[i];
      j++;
    }
  }
  num.length = j;
  return num;
}
console.log(remove(nums, val));

/*  let strs = ["eat","tea","tan","ate","nat","bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
function groupAnagram(str){
  let obj={};
  // let arr=[];
  for(let i=0;i<str.length;i++){
   let sorted=str[i].split("").sort().join("");
     if(obj[sorted]){
      obj[sorted]=[...obj[sorted],arr[i]]
    }else{
      obj[sorted]=[].push()
    }
  }
  console.log(Object.values(obj))
  }
  
groupAnagram(strs) */
