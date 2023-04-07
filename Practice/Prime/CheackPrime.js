// bruet-force method 

function isPrime(n){
    let prime = true;
   for(let i=2;i*i<=n.length-1;i++){
      if(n%i==0){
        prime=false;
        break;
      }
      
   }
   if(prime==true)return true;
   else return false;
}
console.log(isPrime(15));