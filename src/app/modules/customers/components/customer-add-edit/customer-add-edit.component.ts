import { Component, OnInit } from '@angular/core';

import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Customer } from '../../../customers/models/customer';
import { CustomerService } from '../../../customers/services/customer.service';
import { MetaService } from '../../../../shared/services/meta.service';
import { GlobalsService } from '../../../../globals.service';
import { CountriesService } from '../../../countries/services/countries.service';
import { CountriesList, Country } from '../../../countries/models/countries';
@Component({
  selector: 'app-customer-add-edit',
  templateUrl: './customer-add-edit.component.html',
  styleUrls: ['./customer-add-edit.component.css']
})
export class CustomerAddEditComponent implements OnInit {

  customerAddForm: UntypedFormGroup;
  countries: Country;
  countryLists: CountriesList;
  submitted = false;
  contentLoaded = false;
  hasCountries = false;
  selectedCountry = '';
  constructor(
    public customerService: CustomerService, private formBuilder: UntypedFormBuilder, public metaService: MetaService, private globalsService: GlobalsService, public countryService: CountriesService) { }

  ngOnInit(): void {
    this.metaService.setTitle(this.globalsService.registerPageTitle);
    this.metaService.updateMeta(this.globalsService.keywords, this.globalsService.registerPageMetaKeyword);
    this.metaService.updateMeta(this.globalsService.description, this.globalsService.registerPageMetaDescription);
    this.customerAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      userId: [''],
      contactPhoneNo: ['', Validators.required],
      password: ['', Validators.required],
      contactName: ['', Validators.required],
      contactEmail: ['', Validators.required],
      postCode: [''],
      address1: [''],
      address2: [''],
      address3: [''],
      address4: [''],
      country: ['', Validators.required],
    });
    this.getCountries();
  }

  async getCountries() {
    this.countryLists = await this.countryService.getAllActiveCountries();
    this.countries = this.countryLists.countryLists;
    this.contentLoaded = true;
    this.hasCountries = true;
  }

  // convenience getter for easy access to form fields
  get f() { return this.customerAddForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.customerAddForm.invalid) {
      return;
    }
    //console.log(this.selectedCountry); return false;
    let customer: Customer = new Customer();
    customer.name = this.customerAddForm.value['name'];
    let userId = localStorage.getItem('userId');
    customer.userId = userId;
    customer.contactName = this.customerAddForm.value['contactName'];
    customer.password = this.customerAddForm.value['password'];
    customer.contactEMail = this.customerAddForm.value['contactEmail'];
    customer.contactPhoneNo = this.customerAddForm.value['contactPhoneNo'];
    customer.postCode = this.customerAddForm.value['postCode'];
    customer.address1 = this.customerAddForm.value['address1'];
    customer.address2 = this.customerAddForm.value['address2'];
    customer.address3 = this.customerAddForm.value['address3'];
    customer.address4 = this.customerAddForm.value['address4'];
    customer.country = this.customerAddForm.value['country'];
    const responseData = this.customerService.addCustomer(customer);
    }

}
