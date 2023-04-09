// *********** when we assign var to i it remember the previouse value of i because of CLOSERS *********
// because it remember the refrance to i not value of i every time and stores in a memory of function due to using of 'var'.

// for(var i=0;i<7;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*2000)
// }

// ***************  but 'let' has block scope thats why at every time it create a new copy of i and stores it in different memory location ; *************8

// for(let i=0;i<7;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// }

//************* but if we want to do this only with 'var' */
// then by using concept of CLOSERS we assign i in new function so it stores i . 


// for(var i=0;i<7;i++){
//    function closers(x){
//     setTimeout(function(){
//         console.log(x);
//      },x*1000)
//    }

//    closers(i);
// }
