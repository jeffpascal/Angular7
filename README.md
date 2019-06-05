# Reasons to use angular
- organized front-end structure (components, modules, services)
- good for single page applications
- mvc pattern
- typescript
- cli (command line interface) you can generate things fast

## Project setup
- ng new <project name>
- ng serve --open to open in brwser and to run the server
- ng build when you're ready to deploy, will create a thing to  put on the server.
    
index.html
```
<app-root></app-root>
```
is where all the components we create will go 

The file **angular.json** is where we can import assests and styles like bootstrap or local files


# Angular
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

### Classes 
- **constructor** keyword to create a constructor, specify the variable as parameter as well
- define a new method thePerson(): void where **:void** is the return type of the method
- instantiate with **new person("")**
```
class person{
    private firstName: string;

    constructor(theFirstName: string){
        this.firstName = theFirstName;
    }

    thePerson(): void {
        console.log(this.firstName);
    }
}

var obj = new person('John');
```
