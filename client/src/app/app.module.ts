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
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { EditCategoryComponent } from './modules/categories/edit/edit-category.component';
import { NewCategoryComponent } from './modules/categories/new/new-category.component';
import { ViewCategoryComponent } from './modules/categories/view/view-category.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { CartComponent } from './modules/cart/cart.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
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
    ProductCardComponent,
    CategoriesComponent,
    EditCategoryComponent,
    NewCategoryComponent,
    ViewCategoryComponent,
    CartComponent
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
    MatAutocompleteModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
