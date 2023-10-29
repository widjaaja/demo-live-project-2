import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { SharedService } from '../../../../shared/services/shared.service';
import { Customer, PartnersList } from '../../models/customer';
import { CountriesList, Country } from '../../../countries/models/countries';
import { CountriesService } from '../../../countries/services/countries.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  public userCustomerId = '';
  customerViewForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  customerObj: Customer;
  adminUser = false;
  userRole = '';
  countryLists: CountriesList;
  countries: Country;
  hasCountries = false;
  selectedCountry = '';
  partners: PartnersList;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private customerService: CustomerService, public sharedService: SharedService, private countryService: CountriesService) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('user_role');
    this.route.params.subscribe(routeParams => {
      this.userCustomerId = routeParams.customerRecID;
      this.getCustomerDetail(this.userCustomerId);
      const userId = localStorage.getItem('userId');

      this.getPartners(userId);
    });
    this.customerViewForm = this.formBuilder.group({

      name: [{ value: '', disabled: true }],
      userId: [{ value: '', disabled: true }],
      contactName: [{ value: '', disabled: true }],
      contactEMail: [{ value: '', disabled: true }],
      postCode: [{ value: '', disabled: true }],
      address1: [{ value: '', disabled: true }],
      address2: [{ value: '', disabled: true }],
      address3: [{ value: '', disabled: true }],
      address4: [{ value: '', disabled: true }],
      contactPhoneNo: [{ value: '', disabled: true }],
      country: [{ value: '', disabled: true }],
      password: [{ value: '', disabled: true }],
      enabled: [{ value: '', disabled: true }],
      partner: [{ value: '', disabled: true }],
      evaluationOnline: [{ value: '', disabled: true }],
      adminUser: [{ value: '', disabled: true }],
      marketingConsent: [{ value: '', disabled: true }],
      onAccount: [{ value: '', disabled: true }],
      url: [{ value: '', disabled: true }],
      referralFeePercent: [{ value: '', disabled: true }],
      renewalDiscountPercent: [{ value: '', disabled: true }],
      discountPercent: [{ value: '', disabled: true }],
      type: [{ value: '', disabled: true }],

    });
    this.getCountries();
  }

  async getCountries() {
    this.countryLists = await this.countryService.getAllCountries();
    this.countries = this.countryLists.countryLists;
    this.contentLoaded = true;
    this.hasCountries = true;
  }

  async getPartners(userId) {
    this.partners = await this.customerService.getPartners(userId);
  }

  async getCustomerDetail(userCustomerRecId) {
    const userId = localStorage.getItem('userId');
    this.customerObj = await this.customerService.getCustomerDetail(userId, userCustomerRecId);
    this.customerViewForm.patchValue({
      name: this.customerObj.name,
      //userId: this.customerObj.contactEMail,
      contactName: this.customerObj.contactName,
      contactEMail: this.customerObj.contactEMail,
      postCode: this.customerObj.postCode,
      address1: this.customerObj.address1,
      address2: this.customerObj.address2,
      address3: this.customerObj.address3,
      address4: this.customerObj.address4,
      country: this.customerObj.country,
      contactPhoneNo: this.customerObj.contactPhoneNo,
      password: '***',
      userId: this.customerObj.userId,
      marketingConsent: this.customerObj.marketingConsent,
    });
    if (this.userRole === 'ADMIN') {
      this.adminUser = true;
      this.customerViewForm.patchValue({
        enabled: this.customerObj.enabled,
        partner: this.customerObj.partner,
        adminUser: this.customerObj.adminUser,
        renewalDiscountPercent: this.customerObj.renewalDiscountPercent,
        referralFeePercent: this.customerObj.referralFeePercent,
        discountPercent: this.customerObj.discount,
        onAccount: this.customerObj.onAccount,
        evaluationOnline: this.customerObj.evaluationOnline,
        url: this.customerObj.url,
        type: this.customerObj.type

      });
    }
    this.contentLoaded = true;
  }

  get f() { return this.customerViewForm.controls; }

}
