import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

//(input)="filter=$event.target.value" here the $event.target is event triggered by input box
//Filter: <input type="text" [value]="filter" (input)="filter=$event.target.value"/>
//the above stuff is similar to  
//Filter: <input type="text" [(ngModel)]="filter"/>
//to add ngModel here we must include formsModule from @angular/forms 
@Component({
  selector: 'filter-textbox',
  template:`
    Filter: <input type="text" [(ngModel)]="filter"/>
  `
})
export class FilterTextboxComponent implements OnInit {
  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(val:string) {
    this._filter = val;
    this.changed.emit(this._filter);
  }
  // data will go to parent from child and parent will do the filtering
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ngOnInit() {
    
  }
}