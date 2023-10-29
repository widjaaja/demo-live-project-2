import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../../shared/services/Api/http-api.service';
import { Customer, CustomersList, PartnersList } from '../../models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
  apiUrl = 'Customer/';
  constructor(private httpApiService: HttpApiService) { }

  /**
   *
   * @returns products
   * Method to retrieve products data from backend and pass on to products service
  */
  async getAllUserCustomers(userid): Promise<CustomersList> {
    const url = `${this.apiUrl}get?UserId=${userid}`;
    let customers: CustomersList;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          customers = <CustomersList>data;
        }
      });
    return customers;
  }

  async getPartners(userid): Promise<PartnersList> {
    const url = `${this.apiUrl}GetPartners?UserId=${userid}`;
    let partners: PartnersList;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          partners = <PartnersList>data;
        }
      });
    return partners;
  }

  async getCustomerDetail(userid, customerRecId): Promise<Customer> {
    const url = `${this.apiUrl}GetById?UserId=${userid}&RecID=${customerRecId}`;
    let customers: Customer;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          customers = <Customer>data;
        }
      });
    return customers;
  }

  async getFeaturedProducts(): Promise<Customer> {
    const url = `${this.apiUrl}getfeaturedProducts`;
    let customers: Customer;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          customers = <Customer>data;
        }
      });
    return customers;
  }

  async sendMail(maildata) {
    const url = `email/Send`;
    let customers: Customer;
    await this.httpApiService.postData(url, maildata)
      .then(data => {
        if (data != null) {
          customers = <Customer>data;
        }
      });
  }

  async addCustomer(customerData) {    
    const url = `${this.apiUrl}Create`;
    let customers: Customer;
    await this.httpApiService.postData(url, customerData)
      .then(data => {
        if (data != null) {
          customers = <Customer>data;
        }
      });
    return customers;
  }

  async updateCustomer(customerData) {
    const url = `${this.apiUrl}Update`;
    let customers: Customer;
    await this.httpApiService.putData(url, customerData)
      .then(data => {
        if (data != null) {
          customers = <Customer>data;
        }
      });
    return customers;
  }

  async updatePassword(customerData) {
    const url = `${this.apiUrl}UpdatePassword`;
    let customers: Customer;
    await this.httpApiService.putData(url, customerData)
      .then(data => {
        if (data != null) {
          customers = <Customer>data;
        }
      });
    return customers;
  }


}
