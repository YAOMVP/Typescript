import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
    constructor(public data:string){
        super();
    }

        get length(): number{
            return this.data.length;
        }

        compare(leftIndex:number, rightIndex:number):boolean{
            return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
        }

        swap(leftIndex:number,rightIndex:number):void{
            //😊It is a array of strings, each one is one single character long
            const characters = this.data.split("") //It is a array
            
            const leftHand = characters[leftIndex];
            characters[leftIndex] = characters[rightIndex];
            characters[rightIndex]=leftHand;

            //😊上边constructor写的是string ,turn array into string
            this.data = characters.join("")
        }
    
}