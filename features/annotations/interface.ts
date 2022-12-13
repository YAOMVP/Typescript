// interface Vehicle {
//     name:string;
//     year:number;
//     broken:boolean;
// }
// const oldCivic = {
//     name:"civic",
//     year:2000,
//     broken:true
// };
// const printVehicle1=(vehicle:Vehicle):void=>{
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`broken? ${vehicle.broken}`);
// }
// printVehicle1(oldCivic); //😊the oldCivic object satisfies the interface!!




// //😊destructing
// const printVehicle = ({name,year,broken}:{name:string; year:number;broken:boolean}):void=>{
//     console.log(`Name: ${name}`);
//     console.log(`Year: ${year}`);
//     console.log(`broken? ${broken}`);
// };


//2.😉
// interface Vehicle {
//     name:string;
//     year:Date;
//     broken:boolean;
//     summary():string;
// }
// const oldCivic = {
//     name:"civic",
//     year:new Date(),
//     broken:true,
//     summary():string{
//         return `Name: ${this.name}`;
//     }
// };
// const printVehicle=(vehicle:Vehicle):void=>{
//    console.log(vehicle.summary());
// }
// printVehicle(oldCivic); //😊the oldCivic object satisfies the interface!!



//3.😊
interface Reportable {
    summary():string;
}

const oldCivic = {
    name:"civic",
    year:new Date(),
    broken:true,
    summary():string{
        return `Name: ${this.name}`;
    }
};

const drink = {
    color:"brown",
    carbonated:true,
    sugar:40,
    summary():string{
        return `My drink has ${this.sugar} grams of sugar!`
    }
};

const printSummary=(item:Reportable):void=>{
   console.log(item.summary());
}
printSummary(oldCivic); //😊the oldCivic object satisfies the interface!!
printSummary(drink); //drink object can still use!


