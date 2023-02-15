import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public products: any
  ) { }

  totalCost = 0;

  ngOnInit() {
    console.log(this.products);

    this.products.forEach(product => {
      this.totalCost += product.quantity * product.cost;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
