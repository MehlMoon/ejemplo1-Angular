import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CinepolitosComponent } from './cinepolitos/cinepolitos.component';

const appRoutes: Routes=[
  {path:'', component:ProductListComponent},
  {path: 'operas', component: OperasBasComponent},
  {path: 'cine', component:CinepolitosComponent}
]

export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
