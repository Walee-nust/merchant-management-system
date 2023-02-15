import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { OrdersComponent } from './modules/orders/orders.component'
import { ProductsComponent } from './modules/products/products.component';
import { SigninComponent } from './signin/signin.component'

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    }, {
      path: 'orders',
      component: OrdersComponent
    }, {
      path: 'products',
      component: ProductsComponent
    }
  ],
}, {
  path: 'signin',
  component: SigninComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
