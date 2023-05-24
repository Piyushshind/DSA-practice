class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    getName = () => {
        return this.age
    }
}
let ans = new Person('piyush', 23)
console.log(ans.getName());