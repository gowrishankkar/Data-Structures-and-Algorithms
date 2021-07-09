class Car{
    constructor(name, model){
        this.name = name;
        this.model = model;
    }

    getProductInfo(){
        return `Name is ${this.name}. Model is ${this.model}.`
    }


    static product(){
        return "Car"
    }
}

class Bike extends Car{
    constructor(name, model){
        super(name, model)
    }


    getProductInfo(){
        return `Name is ${this.name}. Model is ${this.model}`
    }


    product(){
        return "Bike"
    }
}

const car1 = new Car("Mahindra XUV 300", "W6");
const bike = new Bike("Pulsar", "RS 200");

console.log(car1.getProductInfo())
console.log(bike.product())