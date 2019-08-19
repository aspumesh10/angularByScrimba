import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';//import decorator

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CustomersComponent } from './customers/customers.component';
import { CustomersModule} from './customers/customers.module';
import { SharedModule } from './shared/shared.module'; //this also imports the pipe
import { CoreModule } from './core/core.module';
import { OrdersComponent } from './orders/orders.component';
import { OrdersModule } from './orders/orders.module';

@NgModule({  //big bucket
  declarations: [
    AppComponent,
    //OrdersComponent,
    // CustomersComponent //newly added by ng 
  ],
  //order matters here
  imports: [ //import the buckets
    BrowserModule,//for directiveusage
    CustomersModule,
    OrdersModule,
    SharedModule,
    CoreModule,  //if we import it here then the providers inside this module
                // is also available for  the modules that are imported 
                // here for e.g. no need to import the core module inside the customer module.
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent] //newly added component in bucket  will run at start 
                            //it defines which commponent to load first
                      
})
export class AppModule { }
