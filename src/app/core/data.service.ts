import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//for async operation
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/'; //for actual service use URL
    //call server getcustomer json
    // we have injected  http here

    constructor( private http: HttpClient) { }
    //Observable help for async operations
    //start operation provides pub - sub
    //this is publisher we need to subscribe to this
    getCustomers() : Observable <ICustomer[]> { //called obserable but dormant
     return this.http.get<ICustomer[]>(this.baseUrl+'customers.json')
     .pipe(
        catchError(this.handleError) //catchError acts like the filter in http get operation
                                     //this is called rxJs operator.. 
     )
    }

    getCustomer(id: number) : Observable<ICustomer> {
      return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
        .pipe(
          map(customers => {
            let customer = customers.filter((cust: ICustomer) => cust.id === id);
            return (customer && customer.length) ? customer[0] : null;
          }),
          catchError(this.handleError)
        )
    }

    getOrders(id: number) : Observable<IOrder[]> {
      return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
        .pipe(
          map(orders => {
            let custOrders = orders.filter((order: IOrder) => order.customerId === id);
            return custOrders;
          }),
          catchError(this.handleError)
        );
    }

    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}