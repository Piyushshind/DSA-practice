
 useEffect(()=>{
    function myFunction() {
        let d = new Date();
        console.log(d);
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
      }
      console.log(setInterval(myFunction, 1000));

 },[])
