import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { Customer, PartnersList } from '../../models/customer';
import { CountriesList, Country } from '../../../countries/models/countries';
import { CountriesService } from '../../../countries/services/countries.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  public userCustomerId = '';
  customerEditForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  customerObj: Customer;
  countries: Country;
  countryLists: CountriesList;
  hasCountries = false;
  selectedCountry = '';
  userRole = '';
  adminUser = false;
  partners: PartnersList;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private customerService: CustomerService, private sharedService: SharedService, private countryService: CountriesService) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('user_role');

    this.route.params.subscribe(routeParams => {
      this.userCustomerId = routeParams.customerRecID;
      this.getCustomerDetail(this.userCustomerId);
      let userId = localStorage.getItem('userId');

      this.getPartners(userId);
    });
    this.customerEditForm = this.formBuilder.group({
      name: ['', Validators.required],
      contactPhoneNo: ['', Validators.required],
      //password: ['', Validators.required],
      contactName: ['', Validators.required],
      contactEmail: ['',Validators.required],
      postCode: [''],
      address1: [''],
      address2: [''],
      address3: [''],
      address4: [''],
      country: ['', Validators.required],
      enabled: [],
      partner: [],
      evaluationOnline: [],
      adminUser: [],
      marketingConsent: [],
      onAccount: [],
      url: [],
      referralFeePercent: [],
      renewalDiscountPercent: [],
      discountPercent: [],
      type: [],
      userId: [''],
    });
    this.getCountries();
  }

  async getCountries() {
    this.countryLists = await this.countryService.getAllActiveCountries();
    this.countries = this.countryLists.countryLists;
    this.contentLoaded = true;
    this.hasCountries = true;
  }

  async getPartners(userId) {
    this.partners = await this.customerService.getPartners(userId);
    console.log(this.partners);
  }

  async getCustomerDetail(userCustomerRecId) {
    let userId = localStorage.getItem('userId');
    this.customerObj = await this.customerService.getCustomerDetail(userId, userCustomerRecId);
    this.customerEditForm.patchValue({
      name: this.customerObj.name,
      contactName: this.customerObj.contactName,
      contactEmail: this.customerObj.contactEMail,
      postCode: this.customerObj.postCode,
      address1: this.customerObj.address1,
      address2: this.customerObj.address2,
      address3: this.customerObj.address3,
      address4: this.customerObj.address4,
      country: this.customerObj.country,
      enabled: this.customerObj.enabled,
      contactPhoneNo: this.customerObj.contactPhoneNo,
      marketingConsent: this.customerObj.marketingConsent,
      discountPercent: this.customerObj.discount,
      url: this.customerObj.url,
      userId: this.customerObj.userId,
      //password: '*******'
    });

    if (this.userRole === 'ADMIN') {
      this.adminUser = true;
      this.customerEditForm.patchValue({
        enabled: this.customerObj.enabled,
        partner: this.customerObj.partner,
        adminUser: this.customerObj.adminUser,
        evaluationOnline: this.customerObj.evaluationOnline,
        renewalDiscountPercent: this.customerObj.renewalDiscountPercent,
        referralFeePercent: this.customerObj.referralFeePercent,
        discountPercent: this.customerObj.discount,
        onAccount: this.customerObj.onAccount,
        url: this.customerObj.url,
        type: this.customerObj.type

      });
    }
    this.contentLoaded = true;
  }

  get f() { return this.customerEditForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.customerEditForm.invalid) {
      return;
    }
    let customer: Customer = new Customer();
    const userId = localStorage.getItem('userId');
    customer.type = 'Customer';

    if (this.userRole === 'ADMIN') {
      customer.type = this.customerEditForm.value['type'];
      customer.url = this.customerEditForm.value['url'];
      customer.referralFeePercent = this.customerEditForm.value['referralFeePercent'];
      customer.renewalDiscountPercent = this.customerEditForm.value['renewalDiscountPercent'];
      customer.discount = this.customerEditForm.value['discountPercent'];
      customer.adminUser = (this.customerEditForm.value['adminUser']) ? 1 : 0;
      customer.onAccount = (this.customerEditForm.value['onAccount']) ? 1 : 0;
      customer.evaluationOnline = (this.customerEditForm.value['evaluationOnline']) ? 1 : 0;
      customer.partner = this.customerEditForm.value['partner'];
    }
    customer.enabled = (this.customerEditForm.value['enabled']) ? 1 : 0;
    customer.name = this.customerEditForm.value['name'];
    customer.contactName = this.customerEditForm.value['contactName'];
    customer.contactEMail = this.customerEditForm.value['contactEmail'];
    customer.contactPhoneNo = this.customerEditForm.value['contactPhoneNo'];
    customer.postCode = this.customerEditForm.value['postCode'];
    customer.address1 = this.customerEditForm.value['address1'];
    customer.address2 = this.customerEditForm.value['address2'];
    customer.address3 = this.customerEditForm.value['address3'];
    customer.address4 = this.customerEditForm.value['address4'];
    customer.country = this.customerEditForm.value['country'];
    customer.marketingConsent = (this.customerEditForm.value['marketingConsent']) ? 1 : 0;
    customer.userId = userId ;
    customer.customerId = this.customerObj.customerId;
    customer.recID = this.customerObj.recID;
    customer.CustomerUserID = this.customerEditForm.value['userId'];
    console.log(customer);

    const responseData = this.customerService.updateCustomer(customer);
    console.log(responseData);
  }
}
