
let mypromise = new Promise((resolve, reject)=>{
     setTimeout(()=>{
        resolve('hellow world');
     },3000)
})

mypromise.then(data => console.log(data))