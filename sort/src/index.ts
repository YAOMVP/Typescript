import { Sorter } from "./Sorter";
import { NumbersCollection} from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


// class Sorter{
//     collection:number[];

//     constructor(collection:number[]){
//         this.collection = collection;
//     }
// }

// const sorter = new Sorter([10,3,-5,0]);


// const numbersCollection = new NumbersCollection([10,3,-5,0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const characterCollection = new CharacterCollection("Xaayb");
// const sorter = new Sorter(characterCollection);
// sorter.sort();
// console.log(characterCollection.data);

const numbersCollection = new NumbersCollection([10,3,-5,0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharacterCollection("Xaayb");
characterCollection.sort();
console.log(characterCollection.data);
