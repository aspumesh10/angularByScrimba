import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';
@NgModule({
    declarations: [ CapitalizePipe ], // we can declare pipes, components and directives
    exports: [ CapitalizePipe ] // everyone can import and access
})
export class SharedModule { }