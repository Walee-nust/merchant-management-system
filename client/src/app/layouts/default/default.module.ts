import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatOptionModule } from '@angular/material';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ProductService } from 'src/app/services/product/product.service';
import { OrderService } from 'src/app/services/order/order.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule
  ],
  providers: [
    DashboardService,
    ProductService,
    OrderService
  ]
})
export class DefaultModule { }
