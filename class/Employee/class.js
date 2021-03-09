class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
}

// can have many extends
class Employee extends Person {
    constructor (name, age, payment, dtContract) {
        super(name, age)
        this.payment = payment;
        this.dtContract = dtContract;
    }
}

// abstract 
class Payment {
    PPerson(func, name, age, payment, dtContract){
        
        // 1 - developer 
        // 2 - QA
        var x = func == 1 ? new Employee(name, age, payment, dtContract) : new Employee(name, age, payment, dtContract);
        return x;
    }
}

const costs = new Payment();
const getCostA = costs.PPerson(1, "Lucas", 22, 2500, "20201211");

console.log(getCostA);