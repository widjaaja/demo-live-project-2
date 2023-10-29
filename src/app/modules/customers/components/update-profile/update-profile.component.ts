import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { Customer } from '../../models/customer';
import { CountriesList, Country } from '../../../countries/models/countries';
import { CountriesService } from '../../../countries/services/countries.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  public userId = '';
  profileEditForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  customerObj: Customer;
  countries: Country;
  countryLists: CountriesList;
  hasCountries = false;
  selectedCountry = '';
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private customerService: CustomerService, private sharedService: SharedService, private countryService: CountriesService) { }

  ngOnInit(): void {
    this.profileEditForm = this.formBuilder.group({
      name: ['', Validators.required],
      contactPhoneNo: ['', ''],
      //password: ['', Validators.required],
      contactName: ['', Validators.required],
      contactEmail: ['', Validators.required],
      postCode: [''],
      address1: [''],
      address2: [''],
      address3: [''],
      address4: [''],
      country: ['', Validators.required],
    });
    this.getCustomerDetail();
    this.getCountries();
  }

  async getCountries() {
    this.countryLists = await this.countryService.getAllCountries();
    this.countries = this.countryLists.countryLists;
    this.contentLoaded = true;
    this.hasCountries = true;
  }

  async getCustomerDetail() {
    let userId = localStorage.getItem('userId');
    let userCustomerId = localStorage.getItem('customerId');
    this.customerObj = await this.customerService.getCustomerDetail(userId, userCustomerId);
    this.profileEditForm.patchValue({
      name: this.customerObj.name,
      contactName: this.customerObj.contactName,
      contactEmail: this.customerObj.contactEMail,
      postCode: this.customerObj.postCode,
      address1: this.customerObj.address1,
      address2: this.customerObj.address2,
      address3: this.customerObj.address3,
      address4: this.customerObj.address4,
      country: this.customerObj.country,
      contactPhoneNo: this.customerObj.contactPhoneNo,
      //password: '*******'
    });
    this.contentLoaded = true;
  }

  get f() { return this.profileEditForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileEditForm.invalid) {
      return;
    }
    let customer: Customer = new Customer();
    customer.name = this.profileEditForm.value['name'];
    //customer.userId = this.customerEditForm.value['userId'];
    customer.contactName = this.profileEditForm.value['contactName'];
    //customer.password = this.customerEditForm.value['password'];
    customer.contactEMail = this.profileEditForm.value['contactEmail'];
    customer.contactPhoneNo = this.profileEditForm.value['contactPhoneNo'];
    customer.postCode = this.profileEditForm.value['postCode'];
    customer.address1 = this.profileEditForm.value['address1'];
    customer.address2 = this.profileEditForm.value['address2'];
    customer.address3 = this.profileEditForm.value['address3'];
    customer.address4 = this.profileEditForm.value['address4'];
    customer.country = this.profileEditForm.value['country'];
    customer.userId = this.customerObj.userId;
    customer.customerId = this.customerObj.customerId;
    customer.marketingConsent = this.customerObj.marketingConsent;
    customer.marketingConsent = this.customerObj.marketingConsent;
    //customer.onAccount = this.customerObj.customerId;
    //customer.adminUser = this.customerObj.customerId;
    //customer.partner = this.customerObj.customerId;
    customer.type = this.customerObj.customerId;
    customer.referralFeePercent = this.customerObj.referralFeePercent;
    customer.renewalDiscountPercent = this.customerObj.renewalDiscountPercent;
    customer.discount = this.customerObj.discount;
    customer.url = this.customerObj.url;
    const responseData = this.customerService.updateCustomer(customer);
    console.log(responseData);
    localStorage.setItem('name', this.profileEditForm.value['name']);
  }
}
