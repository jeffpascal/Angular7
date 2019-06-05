import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
  name:string = 'afara ploua cu masini';

  constructor(){
    console.log(123);
    this.changeName("John");
  }

  changeName(name:string):void{
    this.name = name;
  }
}
