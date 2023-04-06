// bruet-force method 

function isPrime(n){
   for(let i=2;i<n.length;i++){
      if(n%i==0)return false
      else return true;
   }
}