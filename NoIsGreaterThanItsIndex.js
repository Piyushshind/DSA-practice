// find the number which is greater than its index
arr = [0, 1, 2, 3, 8, 5, 6, 9, 7, 5, 8, 23, 7, 9, 18, 67, 8, 90];

function findsm(ar) {
  let ans = [];
  let n = ar.length - 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] > i) ans.push(arr[i]);
    else 0;
  }
  return ans;
}
console.log(findsm(arr));
