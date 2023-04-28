//  Longest Substring Without Repeating Characters ;

let str = 'abfatfyhj';

function longSunString(str){
    if (str=='') return 0;
    let n=str.length , i=0,j=1,ans=1,mp=new Map();
    mp.set(str[0],1)
    while(j<n){
        while(mp.has(str[j])){
            mp.delete(str[i])
            i++
        }
        mp.set(str[j],1)
        j++
        ans = Math.max(j-i,ans)
    }
    return ans
}

console.log(longSunString(str));