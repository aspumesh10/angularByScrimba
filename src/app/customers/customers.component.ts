import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

import { DataService } from  '../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  //necessary to add in here all props for data binding
  title: string;
  people: ICustomer[];
  cstmrHeader2: string;
  isVisible: boolean;

  constructor( private dataService: DataService) { }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit() {
    this.cstmrHeader2 = 'customers';
    this.title = 'customers';
    this.isVisible =false;
    this.dataService.getCustomers() // returns observable but dormant so call subscribe to call async operation
    .subscribe((customers: ICustomer[])=> this.people = customers) //will call the server 
    //update to get it form server
    //this.people = [
    //  { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
    //  { id: 2, name: 'Jane DoEl', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
    //  { id: 3, name: 'Michelle Thomas', city: 'SeatTle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
    //  { id: 4, name: 'Jim ThoMas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
    //];
  }

}
