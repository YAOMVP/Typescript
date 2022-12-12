const carMakers:string[] = ["ford","toyota","chevy"];

const carsByMake : string[][] = [
    ["f150"],
    ["corolla"],
    ["camaro"]
]

carMakers.map((car:string):string=>{
    return car;
});

const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2022-10-12");
importantDates.push(new Date());


//Tuples
const drink = {
    color:"brown",
    carbonated:true,
    sugar:40
};

const pepsi:[string,boolean,number] = ["brown",true,40]; //Always have a very consistent ordering of element inside of it.

// Tuple alias
type Drink = [string,boolean,number ];
const sprite : Drink = ["clear",true,40];

