import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';//import decorator
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.components';
import { SharedModule } from '../shared/shared.module'; //this also imports the pipe
import { CoreModule } from '../core/core.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({  //big bucket
  declarations: [
    CustomersComponent,
    CustomersListComponent, //newly added by 
    FilterTextboxComponent
  ],
  imports: [ //import the buckets
    CommonModule,
    SharedModule,
    FormsModule,
    CustomersRoutingModule  //declaring customer Routing module in the imports
                            // will provide routing tools to all its components in declaration
  ],   
  exports: [ CustomersComponent ]                    
})
export class CustomersModule { }
