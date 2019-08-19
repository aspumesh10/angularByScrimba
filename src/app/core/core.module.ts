import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
    imports: [ HttpClientModule ],
    providers: [ DataService, SorterService ] 
    //go hand in hand with injector container
    //cook objects runtime provider is chef injector as waiter store as singleton and serve
})
export class CoreModule { }