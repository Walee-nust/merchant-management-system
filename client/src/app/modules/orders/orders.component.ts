import { Component } from '@angular/core';
import { OrderService } from '../../services/order/order.service';
import { Order } from '../../services/order/order.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

// declare var M: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  constructor(
    public orderService: OrderService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    //  this.resetForm();
    this.refreshOrderList();

  }
  refreshOrderList() {
    this.orderService.getOrderList().subscribe((res) => {
      this.orderService.orders = res as Order[];
    });
  }

  editOrderStatus(ord: Order) {
    this.orderService.statusOrder(ord).subscribe((res) => {
      this.refreshOrderList();
      this.snackBar.open('Updated Successfully!', '', {
        duration: 3000,
      });
    }
    );
  }

  editOrderAddress(ord: Order) {
    var shipping_address = prompt("Enter the new shipping address: ");


    if (shipping_address == null) {
      shipping_address = ord.shipping_address;
    }

    ord.shipping_address = shipping_address;

    this.orderService.putOrder(ord).subscribe((res) => {
      this.refreshOrderList();
      this.snackBar.open('Updated Successfully!', '', {
        duration: 3000,
      });
    }
    );

  }

  deleteOrder(ord: Order) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.orderService.deleteOrder(ord).subscribe((res) => {
        this.refreshOrderList();
        this.snackBar.open('Deleted Successfully!', '', {
          duration: 3000,
        });
      });
    }
  }

  navigateToHome() {
    this.router.navigate(['orders']);
  }

  viewProducts(ord: Order) {
    this.orderService.getInvoiceList(ord).subscribe((res) => {
      let invoice: any
      invoice = res;

      const dialogRef = this.dialog.open(ModalComponent, {
        width: '500px',
        data: invoice
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    });
  }

  newOrder() {
    this.router.navigate(['orders/new']);
  }
}
