// const person:{
//     name:string,
//     age:number,
//     hobbies:string[],
//     role:[number,string]
// }= {
enum Role {ADMIN,READ_ONLY,AUTHOR};

    const person = {
    name:"Olivia",
    age:28,
    hobbies:["Sports", "Games","WorldCup"],
    role:Role.ADMIN
};

let favouriteActivity : any[];
favouriteActivity = ["Cooking"]
// console.log(person.name);
//person.role.push("author");  //Exceptional, ts can not find!!!
//console.log(person.role);

if(person.role === Role.ADMIN){
    console.log("yes");
    
}
// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());
// } 
