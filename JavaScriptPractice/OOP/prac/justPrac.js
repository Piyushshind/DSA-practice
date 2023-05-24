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

class Home {
    constructor(address, plot, members){
           this.address = address,
           this.plot = plot,
           this.members = members
    }

    getAdderes = () => {
        return this.address
    }
    getPlot = () => {
        return this.plot
    }
    getMembers = () => {
        return this.members
    }
}