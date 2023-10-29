import { Component, OnInit } from '@angular/core';
import { Customer, CustomersList } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  public customers: Customer;
  public customersList: CustomersList;
  public contentLoaded = false;
  public userId = '';
  public productCode = '';
  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.getUserCustomers();
  }

  async getUserCustomers() {
    this.userId = localStorage.getItem('userId');
    this.customersList = await this.customerService.getAllUserCustomers(this.userId);
    this.customers = this.customersList.myCustomers;
    this.contentLoaded = true;
  }
}
