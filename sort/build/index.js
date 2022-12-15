"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
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
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
const characterCollection = new CharactersCollection_1.CharacterCollection("Xaayb");
characterCollection.sort();
console.log(characterCollection.data);
