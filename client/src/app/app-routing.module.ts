import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { EditCategoryComponent } from './modules/categories/edit/edit-category.component';
import { NewCategoryComponent } from './modules/categories/new/new-category.component';
import { ViewCategoryComponent } from './modules/categories/view/view-category.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EditOrderComponent } from './modules/orders/edit/edit-order.component';
import { NewOrderComponent } from './modules/orders/new/new-order.component';
import { OrdersComponent } from './modules/orders/orders.component'
import { ViewOrderComponent } from './modules/orders/view/view-order.component';
import { EditProductComponent } from './modules/products/edit/edit-product.component';
import { NewProductComponent } from './modules/products/new/new-product.component';
import { ProductsComponent } from './modules/products/products.component';
import { ViewProductComponent } from './modules/products/view/view-product.component';
import { SigninComponent } from './signin/signin.component'
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './modules/cart/cart.component'

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'orders',
        children: [
          { path: '', component: OrdersComponent },
          { path: 'new', component: NewOrderComponent },
          { path: 'edit/:id', component: EditOrderComponent },
          { path: 'view/:id', component: ViewOrderComponent },
          { path: 'cart', component:  CartComponent}
        ]
      },
      {
        path: 'products',
        children: [
          { path: '', component: ProductsComponent, },
          { path: 'new', component: NewProductComponent },
          { path: 'edit/:id', component: EditProductComponent },
          { path: 'view/:id', component: ViewProductComponent }
        ]
      },  
      {
        path: 'categories',
        children: [
          { path: '', component: CategoriesComponent, },
          { path: 'new', component: NewCategoryComponent },
          { path: 'edit/:id', component: EditCategoryComponent },
          { path: 'view/:id', component: ViewCategoryComponent }
        ]
      }
    ]
  },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
