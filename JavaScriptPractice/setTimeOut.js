// *********** when we assign var to i it remember the previouse value of i because of CLOSERS *********
// because it remember the refrance to i not value of i every time and stores in a memory of function due to using of 'var'.

// for(var i=0;i<7;i++){
//     setTimeout(function(){
//         console.log(i);
//     },2000)
// }

// ***************  

for(let i=0;i<7;i++){
    setTimeout(function(){
        console.log(i);
    },2000)
}