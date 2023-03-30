// Reverse array without using extra array 
  let arr = [2,4,6,8,9,1,3];

  function rev(arr){
    let i= 0;
    let j= arr.length-1;
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++;
        j--;
    }
    return arr;
  }

 console.log(rev(arr));
   