import { Component, OnInit } from '@angular/core';
import { SalesTransactionService } from '../../services/sales-transaction.service';
import { SaleTransaction, SaleTransactionList } from '../../model/SalesTransaction';

@Component({
  selector: 'app-sales-transaction',
  templateUrl: './sales-transaction.component.html',
  styleUrls: ['./sales-transaction.component.css']
})
export class SalesTransactionComponent implements OnInit {
  saleTransactions: SaleTransactionList;
  saleTransaction: SaleTransaction;
  contentLoaded = false;
  startDate = '';
  endDate = '';
  constructor(private salesTransactionService: SalesTransactionService) { }


  


  ngOnInit(): void {
    this.getAllTransactions();
  }

  async getAllTransactions() {
    let userId = localStorage.getItem('userId');
    this.saleTransactions = await this.salesTransactionService.getAllTransactions(userId, '', '');
    this.contentLoaded = true;
  }

  async submitFilter() {
    let userId = localStorage.getItem('userId');
    let tmpStartDate = '';
    if (typeof this.startDate['year'] !== 'undefined') {
      tmpStartDate = this.startDate['year'] + '-' + this.startDate['month'] + '-' + this.startDate['day'];
    }
    let tmpEndDate = '';
    if (typeof this.endDate['year'] !== 'undefined') {
        tmpEndDate = this.endDate['year'] + '-' + this.endDate['month'] + '-' + this.endDate['day'];
    }
    this.saleTransactions = await this.salesTransactionService.getAllTransactions(userId, tmpStartDate, tmpEndDate);
    

  }

}
