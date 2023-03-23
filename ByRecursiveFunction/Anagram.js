let str2= 'thankOfgoD';
let str1= 'GodOfThank';
// console.log(str1.toLowerCase().split('').sort());
function isAnnagram(s,p){
   let s1= s.toLowerCase().split('').sort();
   let p1= p.toLowerCase().split('').sort();
   if(s1.length==p1.length){
     for(let i=0; i<s1.length;i++){
           if(s1[i]!==p1[i])return false
           else return true
      }
   }
   return false
}
console.log(isAnnagram(str1,str2));