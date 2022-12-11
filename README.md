# TYPESCRIPT LEARNING

## What is Typescript?

Typescript is a powerful compiler~编译器~ building up on javascript, It adds new features + advantages to javascript. It makes write javascript easier.

**BUT brower can't execute it.**



## Install Typescript

![1670375569556](README.assets/1670375569556.png)



## Core Types

![1670379166390](README.assets/1670379166390.png)



###Tuple

**元组 Pre-defined length and types for each index.**

![1670375296836](README.assets/1670375296836.png)



### Enum:枚举 

**Special class that represents a group of constants. (unchangable variables)**

![1670379389843](README.assets/1670379389843.png)



### Union Types: 

**When a value can be more than a single type.**

![1670381129775](README.assets/1670381129775.png)



### Type Alias Custom Types

![1670384302800](README.assets/1670384302800.png)



### Function type ->callback

![1670404721587](README.assets/1670404721587.png)



### Throw error

![1670405398431](README.assets/1670405398431.png)







#Compling the project multiple files

![1670406652904](README.assets/1670406652904.png)



### Exclude Files

![1670461659222](README.assets/1670461659222.png)



# ES6

### Const vs Let vs Var

**const** can not be changed, if you would try to assign a new value here, you will get an error.

```javascript
const userName = "Olivia";
userName = "Chen"  //错的 错的 错的
```

**let ** is a variable which can be changed. Block scope: a snippet~片段~ surrounded with curly braces in a (if statement / for loop / function), any variable defined in there would be available in that block.

```javascript
function add(a:number,b:number){
    let result;
    result = a + b;
    return result;
}
console.log(result);  // 可以



let result; //可以
function add(a:number,b:number){
    result = a + b;
    return result;
}
console.log(result); 
```



**var** global and a function scope.

```javascript
function add(a:number,b:number){
    var result;
    result = a + b;
    return result;
}
console.log(result);  //错的 coz It's only available in the function.



var result; //Defined outside the function!
function add(a:number,b:number){
    result = a + b;
    return result;
}
console.log(result); //可以 Defined outside the function, coz it's globally.
```





