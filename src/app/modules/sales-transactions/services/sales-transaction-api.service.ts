import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../shared/services/Api/http-api.service';
import { InvoiceDetail, SaleTransactionList } from '../model/SalesTransaction';
@Injectable({
  providedIn: 'root'
})
export class SalesTransactionApiService {
  apiUrl = 'transaction/';
  constructor(private httpApiService: HttpApiService) { }

  /**
   *
   * @returns products
   * Method to retrieve products data from backend and pass on to products service
  */
  async getAllTransactions(userId, startDate, endDate): Promise<SaleTransactionList> {
    const url = `${this.apiUrl}Get?UserId=${userId}&StartDate=${startDate}&Enddate=${endDate}`;
    let saleTransactions: SaleTransactionList;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          saleTransactions = <SaleTransactionList>data;
        }
      });
    return saleTransactions;
  }


  async getSaleTransactionDetail(transactionId): Promise<SaleTransactionList> {
    const url = `${this.apiUrl}Get?transactionId=${transactionId}`;
    let saleTransaction: SaleTransactionList;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          saleTransaction = data as SaleTransactionList;
        }
      });
    return saleTransaction;
  }

  async getInvoiceDetail(userId, invoiceId): Promise<InvoiceDetail> {
    const url = `${this.apiUrl}GetInvoices?InvoiceNo=${invoiceId}&UserId=${userId}`;
    let invoiceDetail: InvoiceDetail;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          invoiceDetail = data as InvoiceDetail;
        }
      });
    return invoiceDetail;
  }
  
}
