let str = 'madam';

function isPalindrom(s){
    if(s.length <= 1)return true;
    return (s[0]==s.slice(-1) && isPalindrom(s.slice(1,-1)))
}

console.log(isPalindrom(str));