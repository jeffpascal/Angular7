# Angular7
- .ts files need to be compiled into js files for the browser to use them

### Compiling
- need a file with extension .ts
- to compile: tsc name.ts
- to run: node name.js

### Defining a type

- creating a string. we use **let**
```
let firstString = "hello World";
```
- We can also specify the type
```
let firstString: string = "hello World";
```
- defining variables:
```
console.log("hell world");

//create variable string
let firstString: string = "hello world";

// Number
let firstNumber: number = 8;

// Boolean
let firstBoolean: boolean = false;

//any
let anyType: any = 5;
let anyType2: any = false;
let anyType3: any = "hello";
```

### typescript interfaces
- use **interface** to define an interface with variables inside. 
- use **var** to create an object
- use **: personInterface** to specify that var person is a personInterface
```
interface personInterface{
    firstName: string;
    lastName: string;
    age: number;
}

var person: personInterface = {
    firstName: "John",
    lastName: "Mark",
    age: 1
}
```
