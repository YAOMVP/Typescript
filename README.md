



# TYPESCRIPT LEARNING

## What is Typescript?

![1670811738769](README.assets/1670811738769.png)

We are just addind in little extra syntax here and there, are meant to help the typescript compiler understand that we are trying to do our code base and help us catch errors.





![1670811997009](README.assets/1670811997009.png)



2). **Typescript Complier**: Command line tool that is going to read our code check for any possible errors and convert it into plain javascript.

3).**Plain old Javasctipt**: You and I are going to take the javascript code and feed it into the browser or into Node.js, finally execute it.



## Install Typescript

1.npm init

2.npm install --save-dev lite-server

![1670717420635](README.assets/1670717420635.png)



3.

![1670375569556](README.assets/1670375569556.png)

4.tsc --init    生成tscfig.json文件

 "rootDir": "./src",    

"outDir": "./dist",  

 "noEmitOnError": true 

![1670718141993](README.assets/1670718141993.png)

5.npm start



### Function 3 ways

![1670839835186](README.assets/1670839835186.png)



### Destructing

![1670840861882](README.assets/1670840861882.png)



### Array

![1670843634656](README.assets/1670843634656.png)



###Tuple

**元组 Pre-defined length and types for each index. Always have a very consistent ordering of element inside of it.**

![1670844511841](README.assets/1670844511841.png)



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





#Interface

 ## Fixing long annotations

(大概看一下 解构的方法)

![1670892154038](README.assets/1670892154038.png)



要不然写的太长了

![1670892591154](README.assets/1670892591154.png)



缩短 year / summary() function 

![1670893172744](README.assets/1670893172744.png)



interface reuseable

![1670894349743](README.assets/1670894349743.png)





# Class

## Create a basic Class

![1670896252811](README.assets/1670896252811.png)

![1670896803541](README.assets/1670896803541.png)



![1670718835161](README.assets/1670718835161.png)





## Inheritance

![1670897292903](README.assets/1670897292903.png)





### Modifiers  public vs private

p45  06:42

![1670898115230](README.assets/1670898115230.png)



![1670899190134](README.assets/1670899190134.png)



## super 

Calls the base constructor, it can take the argument of the base constructor 

![1670726736458](README.assets/1670726736458.png)



![1670900323429](README.assets/1670900323429.png)





## Getters and Setters

Getters: We can read the *fullName* like a **property**.

![1670731539771](README.assets/1670731539771.png)



Setters:We can set it from the outside.

![1670732102259](README.assets/1670732102259.png)





# Map Project p50有介绍

![1670904481259](README.assets/1670904481259.png)



![1670904796061](README.assets/1670904796061.png)

![1670905061545](README.assets/1670905061545.png)





## Get randomly User

![1670927425187](README.assets/1670927425187.png)



## Get randomly Company 

![1670928178747](README.assets/1670928178747.png)



## Adding Google Maps Support  

Follow the instruction p57 07:39

![1670928310930](README.assets/1670928310930.png)







# sort Project p72

## Compile multiple files

![1671009933155](README.assets/1671009933155.png)



2.

![1671010414506](README.assets/1671010414506.png)

3.![1671010438487](README.assets/1671010438487.png)

最后弄完了 **npm start**



## Sorter 

![1671012387240](README.assets/1671012387240.png)

