import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { OrderService } from '../../services/order/order.service';
import { Order } from '../../services/order/order.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  displayedColumns: string[] = ['user_id', 'products', 'order_date', 'shipping_address', 'cost', 'status', 'actions'];
  dataSource: MatTableDataSource<Order>;

  constructor(
    public orderService: OrderService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  statuses = [
    { value: 'delivered', viewValue: 'delivered' },
    { value: 'not delivered', viewValue: 'not delivered' }
  ];

  ngOnInit() {
    this.refreshOrderList();
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatAccordion, { static: true }) accordion: MatAccordion;

  refreshOrderList() {
    this.orderService.getOrderList().subscribe((res) => {
      this.orderService.orders = res as Order[];
      console.log(this.orderService.orders);
      this.dataSource = new MatTableDataSource(this.orderService.orders);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(columnName, filterValue: string) {
    console.log(columnName);

    this.dataSource.filterPredicate = (data: Order, filter: string) => {
      filter = filter.trim().toLowerCase();
      return data[columnName].trim().toLowerCase().includes(filter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearFilters() {
    this.dataSource.filter = '';
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
