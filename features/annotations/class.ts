//😊When we create a class
// we create a blueprint or a defination what a vehicle should be!!!
// class Vehicle {
//     drive():void{
//         console.log("chugga chugga");
//     }
//     honk():void{
//         console.log("beep");
//     }
// }
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();


// //2.😊 Inheritance
// class Vehicle {
//     drive():void{
//         console.log("chugga chugga");
//     }
//     honk():void{
//         console.log("beep");
//     }
// }

// class Car extends Vehicle {
//     drive(): void {
//         console.log("vroom");  //overridden a method on the child class
//     }
// }
// const car = new Car();
// car.drive();
// car.honk();



//3.😊 Fields
// class Vehicle {
//    color:string; //Property color

//     constructor(color:string){
//         this.color = color;
//     }
//     protected honk():void{
//         console.log("beep");
//     }
// }

//😊优化：写太多 color了！！
class Vehicle {
    constructor(public color:string){
        this.color = color;
    }
    protected honk():void{
        console.log("beep");
    }
}

//Modifier Inheritance
class Car extends Vehicle {
    constructor(wheel:number,color:string){
        super(color); //😊A reference to the constructor method in the parent.
    }

    private drive(): void {
        console.log("vroom");  //overridden a method on the child class
    }

    startDrivingProcess():void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4,"blue");


const vehicle1 = new Vehicle("orange");


// const vehicle = new Vehicle("orange"); //Pass in the color as an argument
//When we pass in, we have to define a constructor, it will be instantly executed/ 
//The parameter will be the pass in argument
// console.log(vehicle.color);

