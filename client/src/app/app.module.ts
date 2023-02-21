import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { OrdersComponent } from './modules/orders/orders.component';
import { SigninComponent } from './signin/signin.component';
import { MatInputModule, MatButtonModule, MatCardModule, MatIconModule, MatFormFieldModule, MatProgressSpinnerModule, MatSnackBarModule, MatOptionModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { ProductsComponent } from './modules/products/products.component';
import { SignupComponent } from './signup/signup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewProductComponent } from './modules/products/view/view-product.component';
import { EditProductComponent } from './modules/products/edit/edit-product.component';
import { NewProductComponent } from './modules/products/new/new-product.component';
import { ViewOrderComponent } from './modules/orders/view/view-order.component';
import { EditOrderComponent } from './modules/orders/edit/edit-order.component';
import { NewOrderComponent } from './modules/orders/new/new-order.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    SigninComponent,
    ProductsComponent,
    SignupComponent,
    ViewProductComponent,
    EditProductComponent,
    NewProductComponent,
    ViewOrderComponent,
    EditOrderComponent,
    NewOrderComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
<<<<<<< HEAD
  // chemas: [
  //   CUSTOM_ELEMENTS_SCHEMA,
  //   NO_ERRORS_SCHEMA
=======
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
>>>>>>> f91e08fafcda12350b19fc8dafae695d5c7e6647
  // ],
})
export class AppModule { }
