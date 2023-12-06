let str = 'asfdgjhkl';
//   console.log(str.replace(str[0],str.slice(-1)));
function rev(str) {
  if (str.length <= 1) return str;
  return rev(str.slice(1)) + str[0]
}
console.log(rev(str));





















