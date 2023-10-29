import { Injectable } from '@angular/core';
import { CustomerApiService } from '../services/api/customer-api.service';
import { Customer, CustomersList, PartnersList } from '../models/customer';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer;
  customersList: CustomersList;
  partnerList: PartnersList;
  constructor(private customerApiService: CustomerApiService, private router: Router, private sharedService: SharedService) { }

  /**
*
* Method to fetch themesettings from api and set form data
*/
  async getAllUserCustomers(userid) {
    await this.customerApiService.getAllUserCustomers(userid).then((data: CustomersList) => {
      this.customersList = data;
    });
    return this.customersList;
  }

  async getPartners(userid) {
    await this.customerApiService.getPartners(userid).then((data: PartnersList) => {
      this.partnerList = data;
    });
    return this.partnerList;
  }

  async getCustomerDetail(userid, customerRecId) {
    await this.customerApiService.getCustomerDetail(userid, customerRecId).then((data: Customer) => {
      this.customers = data;
    });
    return this.customers;
  }

  sendMail(mailData) {
    this.customerApiService.sendMail(mailData);
  }

  async addCustomer(customer) {

    let result: any;
    await this.customerApiService.addCustomer(customer).then(data => {
      result = data;
    });
    console.log(result);
    if ((typeof result['body'] != 'undefined') && result['body']['isSuccess'] == true) {
      this.sharedService.showMessage({ 'type': 'success', 'message': 'Your account created successfully!' });
      this.router.navigateByUrl('/user/customers');
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': result['body']['errorMessage'] });
    }
  }

  async updateCustomer(customer) {

    let result: any;
    console.log(customer);
    await this.customerApiService.updateCustomer(customer).then(data => {
      result = data;
    });

    if (result !== null && typeof result.status !== 'undefined' && result.status == "200") {
      if ((typeof result['body'] != 'undefined') && result['body']['isSuccess'] == true) {
        this.router.navigateByUrl('/user/customers');
      } else {
        this.sharedService.showMessage({ 'type': 'danger', 'message': result['body']['errorMessage'] });
      }
    } else {

    }
  }

  async registerCustomer(customer) {
    let response = false;
    let result: any;
    await this.customerApiService.addCustomer(customer).then(data => {
      result = data;
    });
    if ((typeof result['body'] != 'undefined') && result['body']['isSuccess'] == true) {

      this.sharedService.showMessage({ 'type': 'success', 'message': 'Your account created successfully!. Verify your account to login' });
      response = true;
    } else {

      this.sharedService.showMessage({ 'type': 'danger', 'message': result['body']['errorMessage'] });

    }
    return response;
  }

  async updatePassword(customer) {
    let response = false;
    let result: any;
    await this.customerApiService.updatePassword(customer).then(data => {
      result = data;
    });
    console.log(result);
    if (result !== null && typeof result.status !== 'undefined' && result.status == "200") {
      this.sharedService.showMessage({ 'type': 'success', 'message': 'Password has been updated successfully. Login to continue' });

      response = true;
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': result.error });
    }
    return response;
  }


}
