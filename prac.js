let obj = {
    name: 'piyush'
}
let obj2 = {
    age: 23,
    __proto__: obj   /// __proto__ is syntax (prototype) to asses another object
}

// console.log(obj2.name);


function homeLoan(principal) {
    let roi = 9.5;


    /* ..... */
    return function () {
        return roi * principal / 100;
    }
}

// let hl_interest = homeLoan(1000000)
// console.log(hl_interest())
// let hl_interest = function () {
//     return roi * principal;
// }


function counter() {
    let run = 0;
    return function () {

        run++;
        // console.log(run)
    }
}


let increment = counter();
let increment2 = counter();
// increment()
// increment()
// increment()
// increment()
// increment2()
///
// Example Ecommerce cart

function createCart() {

    let items = [];
    let total = 0;

    function addItem({ item, price }) {
        items.push({ item, price })
        total += price;
        // console.log(`Hey you have added ${item} with value ${price} and the total is ${total}`)

    }
    function removeItem(itemname) {

        let index = items.findIndex(obj => obj.item === itemname);
        if (index == -1) return;
        total -= items[index].price;
        // console.log(`Hey yo`)


        function* generator(i) {
            yield i;
            yield i + 10;
            while (true) yield i + 10
        }
        
        const gen = generator(10);
        
        
        // console.log(gen.next())
        // console.log(gen.next().value);
        // Expected output: 10
        // console.log(gen.next())
        // console.log(gen.next().value);
        // Expected output: 20 
        
        // console.log(gen.next().value); 
        // console.log(gen.next())
    }
}

let obja ={1:4,2:2,3:3};
let arrr =[1,2,3,4,5,6,7];

// obja.array.forEach(element => {
//     console.log(element);
// });

for (let a in obja){
    console.log(a);
}