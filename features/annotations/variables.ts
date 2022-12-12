let apples : number = 5;

//Array that contains strings.
let colors : string[] = ["red","yellow","green"];
let myNumbers : number[] = [1,2,3];


//Classes
class Car {

}
let car : Car = new Car();


//Object literal
let point : { x : number; y : number }= {
    x:10,
    y:20
}

//Function 
//What type of value that we are going to assign to this variable right here!
const logNumber : (i : number) => void = (i : number)=>{
    console.log(i);
}

const divide = (a:number,b:number):number=>{
    return a/b;
};

const forecast = {
    date: new Date(),
    weather:"sunny"
};

const logWeather = ({date, weather}: {date:Date, weather:string}) : void =>{
    console.log(date);
    console.log(weather);
}


//😉Destructing:
const profile = {
    name:"Olivia",
    age:25,
    coords:{
        lat:0,
        lng:15
    },
    setAge(age:number):void{
        this.age = age;
    }
};
   
// const age = profile.age;
const {age} :{age:number} = profile;  //If you want to use destructing. It is an object with an age property that is a number.

const {coords:{lat,lng}} :  {coords:{lat:number, lng : number}} = profile


