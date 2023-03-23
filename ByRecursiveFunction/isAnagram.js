let str2= 'thankOfgoD';
let str1= 'GodOfThank';
let s1= str1.toLowerCase().split('').sort();
let p1= str2.toLowerCase().split('').sort();
function isAnnagram(s1,p1){
    // ********* by simple method **********

//    let s1= s.toLowerCase().split('').sort();
//    let p1= p.toLowerCase().split('').sort();
//    if(s1.length==p1.length){
//      for(let i=0; i<s1.length;i++){
//            if(s1[i]!==p1[i])return false
//            else return true
//       }
//    }
//    return false

    // ********** by recursion **********
    
   
    if(s1.length == p1.length ){
        if(s1.length ==0) return true
        return (s1[0]==p1[0] && isAnnagram(s1.slice(1),p1.slice(1)))
    }else return false ;

}
console.log(isAnnagram(s1,p1));