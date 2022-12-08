"use strict";
// const person:{
//     name:string,
//     age:number,
//     hobbies:string[],
//     role:[number,string]
// }= {
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "Olivia",
    age: 28,
    hobbies: ["Sports", "Games", "WorldCup"],
    role: Role.ADMIN
};
let favouriteActivity;
favouriteActivity = ["Cooking"];
// console.log(person.name);
//person.role.push("author");  //Exceptional, ts can not find!!!
//console.log(person.role);
if (person.role === Role.ADMIN) {
    console.log("yes");
}
// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());
// } 
