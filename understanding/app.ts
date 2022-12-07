let userInput:unknown;
let userName:string;

userInput = 5;
userInput = "Max";

if(typeof userInput === "string"){
    userName = userInput;
}



function generateError(message:string,code:number){
    throw{message:message,error:code}
}
generateError("There is an error",404);

