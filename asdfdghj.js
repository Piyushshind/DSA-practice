var removeDuplicates = function (n) {
  let mp = new Map();
  var ans = [];
  for (val of n) mp.set(val, (mp.get(val) || 0) + 1);
  mp.forEach((key, val) => {
    ans.push(val);
    //  console.log(val)
    // return val
  });
  //    console.log(ans)
  //let len = ans.length;
  return ans;
};

console.log(removeDuplicates([2, 3, 4, 2, 3, 4, 5, 6, 7]));
