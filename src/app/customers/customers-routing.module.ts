/**
 * this file provide the routing to the customers component
 */


import { NgModule } from '@angular/core';
//Routes is an interface
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {path: 'customers', component: CustomersComponent}, //empty path '' means if we hit he url and doesnt say anything what operation to perform
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //this is registering for particular routes should called for one time 
                                            // will get merged to the forRoot call in app-routing.module.ts
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
