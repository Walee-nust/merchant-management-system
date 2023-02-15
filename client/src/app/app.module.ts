import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { OrdersComponent } from './modules/orders/orders.component';
import { SigninComponent } from './signin/signin.component';
<<<<<<< HEAD
import { MatInputModule, MatButtonModule, MatCardModule, MatIconModule, MatFormFieldModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { ProductsComponent } from './modules/products/products.component';
import { SignupComponent } from './signup/signup.component';
=======
import { MatInputModule, MatButtonModule, MatCardModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { ProductsComponent } from './modules/products/products.component';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 9ed18a8ff29d762ce26a13b43503e470ad33d384

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    SigninComponent,
    ProductsComponent,
    SignupComponent,
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
<<<<<<< HEAD
    FormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSnackBarModule


=======
    HttpClientModule,
    MatSnackBarModule
>>>>>>> 9ed18a8ff29d762ce26a13b43503e470ad33d384
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
