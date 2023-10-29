import { Injectable } from '@angular/core';
import { InvoiceDetail, SaleTransactionList } from '../model/SalesTransaction';
import { SalesTransactionApiService } from './sales-transaction-api.service';
@Injectable({
  providedIn: 'root'
})
export class SalesTransactionService {
  saleTransaction: SaleTransactionList;
  constructor(private salesTransactionApiService: SalesTransactionApiService) { }

  /**
*
* Method to fetch themesettings from api and set form data
*/
  async getAllTransactions(userId, startDate, endDate) {
    await this.salesTransactionApiService.getAllTransactions(userId, startDate, endDate).then((data: SaleTransactionList) => {
      this.saleTransaction = data;
    });
    return this.saleTransaction;
  }

  async getSaleTransactionDetail(transactionId) {
    await this.salesTransactionApiService.getSaleTransactionDetail(transactionId).then((data: SaleTransactionList) => {
      this.saleTransaction = data;
    });
    return this.saleTransaction;
  }

  async getInvoiceDetail(userId, InvoiceId) {
    let invoiceDetail: InvoiceDetail;
    await this.salesTransactionApiService.getInvoiceDetail(userId, InvoiceId).then((data: InvoiceDetail) => {
      invoiceDetail = data;
    });
    return invoiceDetail;
  }
  
}
