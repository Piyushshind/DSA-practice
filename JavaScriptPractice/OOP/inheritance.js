class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    getRole() {
        throw new Error("Method is not implemented");
    }

    calculateBonus() {
        throw new Error("Method is not implemented");
    }
}

class Manager extends Employee {
    constructor(name, id, salary, bonusPercent, role) {
        super(name, id, salary);
        this.role = role;
        this.bonusPercent = bonusPercent;
    }
    getRole() {
        return this.role;
    }

    calculateBonus() {
        return this.salary * (this.bonusPercent / 100)
    }
}


class Developer extends Employee {
    constructor(name, id, salary, numofProjects, role) {
        super(name, id, salary);
        this.role = role;
        this.numofProjects = numofProjects;
    }
    getRole() {
        return this.role;
    }

    calculateBonus() {
        return this.numofProjects * 50000;
    }
}

class Tester extends Employee {
    constructor(name, id, salary, numofProjects, numofBugs, role) {
        super(name, id, salary);
        this.role = role;
        this.numofBugs = numofBugs;
        this.numofProjects = numofProjects;
    }
    getRole() {
        return this.role;
    }

    calculateBonus() {
        return (this.numofProjects * numofBugs / 100) * 50000;
    }
}


class Designer extends Employee {
    constructor(name, id, salary, numOfDesigns, role) {
        super(name, id, salary);
        this.role = role;
        this.numOfDesigns = numOfDesigns;
    }
    getRole() {
        return this.role;
    }

    calculateBonus() {
        return this.numOfDesigns * 20000;
    }
}

let bipulManager = new Manager("Bipul", 1, 200000, 40, "Manager");

console.log(bipulManager.getRole())
console.log(bipulManager.calculateBonus())

// Create a developer
// Create a tester
// create a designer

function Test() {
    console.log("test")
}

Test.abs = "ABS"


let emp = {}

emp.name = "Jaiswal"

