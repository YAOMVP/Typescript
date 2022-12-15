//  interface Sortable {
//     length:number;
//     compare(leftIndex:number,rightIndex:number):boolean;
//     swap(leftIndex:number,rightIndex:number):void;
//  }
 
 //😊缩减代码：
 //1.Export -> Can use in another files.
export abstract class Sorter{
    //constructor(public collection: Sortable){} // Do later
    abstract length:number;
    abstract compare(leftIndex:number, rightIndex:number):boolean;
    abstract swap(leftIndex:number,rightIndex:number):void;


    sort():void{
        const {length} = this;

        for(let i = 0; i < length; i++){
            for(let j = 0; j < length - i - 1; j++){
                    //If collection is an array of numbers
                if(this.compare(j, j + 1)){
                    this.swap(j, j + 1)
                }
            }
        }
    }
}