let arr = [ 'merry' , 45 , true , 'islint'] ;

Array.prototype.convertArrayToObject = function(){
      let newObj = {};
      this.forEach(element => {
         newObj[element] = element
      })
      return newObj;
}

/// console.log(arr.convertArrayToObject());