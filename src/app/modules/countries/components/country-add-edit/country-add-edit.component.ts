import { Component, OnInit } from '@angular/core';

import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CountriesList, Country } from '../../../countries/models/countries';
import { CountriesService } from '../../../countries/services/countries.service';
import { MetaService } from '../../../../shared/services/meta.service';
import { GlobalsService } from '../../../../globals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-country-add-edit',
  templateUrl: './country-add-edit.component.html',
  styleUrls: ['./country-add-edit.component.css']
})
export class CountryAddEditComponent implements OnInit {

  countryAddForm: UntypedFormGroup;  
  submitted = false;

  constructor(public countryService: CountriesService, private formBuilder: UntypedFormBuilder, public metaService: MetaService, private globalsService: GlobalsService, private route: ActivatedRoute, private router: Router, public sharedService: SharedService) { }

  ngOnInit(): void {
    this.metaService.setTitle(this.globalsService.registerPageTitle);
    this.metaService.updateMeta(this.globalsService.keywords, this.globalsService.registerPageMetaKeyword);
    this.metaService.updateMeta(this.globalsService.description, this.globalsService.registerPageMetaDescription);

    this.countryAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      applyVat: [''],
      enabledForPaymentGateway1: [''],
      enabledForPaymentGateway2 : [''],
      active: [''],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.countryAddForm.controls; }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.countryAddForm.invalid) {
      return;
    }
    //console.log(this.selectedCountry); return false;
    let country: Country = new Country();
    country.name = this.countryAddForm.value['name'];
    country.code = this.countryAddForm.value['code'];
    country.userId = localStorage.getItem('userId');
    country.applyVat = this.countryAddForm.value['applyVat'];
    country.enabledForPaymentGateway1 = (this.countryAddForm.value['enabledForPaymentGateway1']) ? '1' : '0';
    country.enabledForPaymentGateway2 = (this.countryAddForm.value['enabledForPaymentGateway2']) ? '1' : '0';
    country.active = this.countryAddForm.value['active'];
   

    const responseData = await this.countryService.addCountry(country);

    console.log(responseData);
    if (responseData['body']['isSuccess'] == true) {
      this.sharedService.showMessage({ 'type': 'success', 'message': 'Country ' + country.name + ' added Successfully!' });
      this.router.navigateByUrl('/admin/countries');
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': responseData['body']['errorMessage'] });
    }
  }

}
