let obj ={
    first: 'piyush',
    last : 'shinde'
}

let callingFun = function(city){
    console.log(this.first + " " + this.last + " " + city );
}
// call method 
callingFun.call(obj)

// apply method 
callingFun.apply(obj,['nashik'])

// bind method 
let store = callingFun.bind(obj, 'nashik')
// console.log(store);
store()