import { Component, Input, OnInit } from '@angular/core';
import { SaleTransaction } from '../../model/SalesTransaction';

@Component({
  selector: 'app-invoice-pdf',
  templateUrl: './invoice-pdf.component.html',
  styleUrls: ['./invoice-pdf.component.css']
})
export class InvoicePdfComponent implements OnInit {
  @Input() data: SaleTransaction;
  constructor() { }

  ngOnInit(): void {
  }

}
