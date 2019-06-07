# Todo  
- Pick a course and finish it o'reilly

# Reasons to use angular
- organized front-end structure (components, modules, services)
- good for single page applications
- mvc pattern
- typescript
- cli (command line interface) you can generate things fast

## Project setup
- ng new \<project name>
- ng serve --open to open in brwser and to run the server
- ng build when you're ready to deploy, will create a thing to  put on the server.

File **app.module.ts** is the entry point to angular
- meeting place for all components
- **@NgModule**
    - declarations: 
        - here are where all the components go, imported at the top
        - whenever you create a new component, it has to be added here
        - cli will automatically add components here
    - imports
    - providers
        - services that you want to include
    - bootstrap 
        - bootstrapping the components

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
}
```
- this is a decorator
- includes metadata for the component
- selector is what is used in html as an identifier :
```html
<body>
  <app-root></app-root>
</body
```
- load that component there.
- templateUrl points to the html template
- styleUrls
```
<h1>
    Welcome to {{ title }}!
</h1>
```
- this is an example of string interpolation. We can add variables from code in the html


index.html
```
<app-root></app-root>
```
is where all the components we create will go 

The file **angular.json** is where we can import assests and styles like bootstrap or local files

```
<div>
  <h1>Hello {{ name }}</h1>
  <h1>Some math 1+1 = {{1+1}}</h1>
  <h1>{{name.toUpperCase()}}</h1>
  <h1>{{name | uppercase}}</h1>
</div>
```
- Examples of name interpolation

```
constructor(){
    console.log(123);
  }
```
- constructors are run any time a class loads. 
- always loads first
- constructors are usually used to import services

```
constructor(){
    console.log(123);
    this.changeName("John");
  }

  changeName(name:string):void{
    this.name = name;
  }
```
- you can call methods from the constructor
- you can specify the return type as shown above

# Generating components
- you can generate a component using
```
ng generate component components/Todos
```
- where components/Todos is a folder. 
- components should be stored in a folder named **components** //unsure

```
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
```
- you can use the selector in the main component to have it show

### Creating a class
```typescript
export class Todo{
    id:number;
    title:string;
    completed:boolean;
}
```
- export keyword is used to enable importing in another class
- importing is done like this : 
```
import {Todo} from '../../models/Todo'
```
- declaring a variable of type Todo is done like this : 
```
todos:Todo[];
```

- instantiating a todo array is done like this
```
 this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo three',
        completed: false
      }

    ]
  }
  ```
- we want to for loop through them and show them in the browser
```
<ul *ngFor="let todo of todos">
  <li>{{todo.title}}</li>
</ul>
```




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
