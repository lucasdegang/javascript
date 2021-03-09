class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    setName(name){
        this.name = name;
    }

    setAge(age){
        this.age = age;
    }

    setAll(name, age){
        this.setName(name);
        this.setAge(age);
    }

    getInf(callback){
        //return ` ${this.name}, ${this.age}`;
        callback(this);
    }
}

/*
class Employee extends Person (){
    constructor(x, y, z) {
    super(x, y);
    this.z = z;
}
}*/

function exibirDadosPerson (obj){
    // class Person
    var conteudo = {
        name : obj.name,
        age : obj.age
    }

    var name = obj.name;
    var age = obj.age;

    console.log(`${conteudo.name} ${conteudo.age}`);
    console.log(name + " " + age);
    console.log(obj.name + " " + obj.age);
}

var init = (function() {
    var p = new Person ("Lucas Degang", 23);
    console.log(p);

    p.setAll("Otto Degang", 0);
    
    console.log(p);
    
    p.getInf(exibirDadosPerson);
})();