import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';
import { SorterService } from 'src/app/core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }
  set customers(value: ICustomer[]) {
    if(value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number = 0 ;
  currencyCode = 'USD';
  constructor(private sorterService: SorterService) { }

  ngOnInit() {
    this.filteredCustomers; 
    /*
    default values added initially
    [
      { id: 1, name: 'john Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
      { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
      { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
    ];*/
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
        this.customersOrderTotal += cust.orderTotal;
    });   
  }

  filter(data: string) {
    //console.log('*************'+data)
    //console.log(this.customers)
    if (data) {
        this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
            return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                   cust.orderTotal.toString().indexOf(data) > -1;
        });
    } else {
        this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  sort(prop: string ){
    //sort functionality bind with the table headers
    this.sorterService.sort(this.filteredCustomers, prop);
  }
}
