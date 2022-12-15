import { Sorter } from "./Sorter";
// export class NumbersCollection {
//     data:number[];

//     constructor(data:number[]){
//         this.data = data;
//     }
// }

//😊缩减版 和上边一样
export class NumbersCollection extends Sorter {
    constructor(public data:number[]){
        super();
    }

    //😊Getters: We can read the *fullName* like a **property**.
    get length():number{
        return this.data.length;
    }
     
        compare(leftIndex:number,rightIndex:number):boolean {
            return this.data[leftIndex] > this.data[rightIndex]
        }

        swap(leftIndex:number,rightIndex:number):void{
            const leftHand = this.data[leftIndex];
            this.data[leftIndex] = this.data[rightIndex];
            this.data[rightIndex] =leftHand;
        }
}