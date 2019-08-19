import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
//  templateUrl: './app.component.html',
  template: `
    <h1>Hello word</h1>
    <h2>{{title}}</h2>
    <h2>{{value}}</h2>
    <!--<app-customers></app-customers>-->
    <router-outlet><router-outlet>
    `,
  //styleUrls: ['./app.component.css']
})
//router outlet is x mark says compnent will go here
export class AppComponent implements OnInit {
  title = 'myApp';
  value: string;
  constructor() {}
  ngOnInit() { //we need this with OnInit
    this.value = 'hello please find the data binding here';
  }
}
