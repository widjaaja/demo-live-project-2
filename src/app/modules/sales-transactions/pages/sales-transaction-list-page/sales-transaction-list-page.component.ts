import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../../layouts/main/header/header.service';

@Component({
  selector: 'app-sales-transaction-list-page',
  templateUrl: './sales-transaction-list-page.component.html',
  styleUrls: ['./sales-transaction-list-page.component.css']
})
export class SalesTransactionListPageComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
  }

}
