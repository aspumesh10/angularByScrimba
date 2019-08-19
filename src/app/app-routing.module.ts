import { NgModule } from '@angular/core';
//Routes is an interface
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/customers'}, //empty path '' means if we hit he url and doesnt say anything what operation to perform
                                                            //pathmatch : match after the domain name
  {path: '**', pathMatch: 'full', redirectTo: '/customers'} // path '**' means if someone writes any thing after url whr it should  redirect to
  //{path: '**', redirectTo: '/customers'} // path '**' means if someone writes any thing after url whr it should  redirect to
];

// so when we hit the url with empty path after the domain name  it will redirect to 
// customers-routing module and then the component will get placed inside the <router-outlet></router-outlet>


@NgModule({
  imports: [RouterModule.forRoot(routes)], //this is registering for particular routes should called for one time
  exports: [RouterModule]
})
export class AppRoutingModule { }
