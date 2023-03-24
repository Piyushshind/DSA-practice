var str = 'water';
var sr = 'retwa'

function anna(sa, ta) {
    let s= sa.split('').sort()
    let t= ta.split('').sort()
    if(s.length == t.length){
        for(let i=0;i<s.length ; i++){
            if(s[i]==t[i]) return true
            return false
        }
    }
    return false
   
};
let ans = anna(str,sr)
// console.log(ans)

