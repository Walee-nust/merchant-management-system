import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

import { Invoice } from './invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  selectedInvoice: Invoice = {
    order_id: "",
    quantity: 0,
    product_id: "",
    cost: 0
  }
    ;
  orders?: Invoice[];
  readonly baseURL = 'http://localhost:3000/order';
  constructor(private http: HttpClient) { }

}
