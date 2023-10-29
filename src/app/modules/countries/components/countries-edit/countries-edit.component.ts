import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/countries';

@Component({
  selector: 'app-countries-edit',
  templateUrl: './countries-edit.component.html',
  styleUrls: ['./countries-edit.component.css']
})
export class CountriesEditComponent implements OnInit {
  public countryCode = '';
  countryEditForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  countryObj: Country;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private countriesService: CountriesService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.countryCode = routeParams.countryCode;
    });
    console.log('get');
    this.getCountryDetail(this.countryCode);
    this.countryEditForm = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      applyVat: [''],
      enabledForPaymentGateway1: [''],
      enabledForPaymentGateway2: [''],
      active: [''],
    });
  }

  async getCountryDetail(countryCode) {
    let userId = localStorage.getItem('userId');
    console.log(userId);
    this.countryObj = await this.countriesService.getCountryDetail(countryCode, userId);
    this.countryEditForm.patchValue({
      name: this.countryObj.name,
      code: this.countryObj.code,
      applyVat: this.countryObj.applyVat,
      enabledForPaymentGateway1: this.countryObj.enabledForPaymentGateway1,
      enabledForPaymentGateway2: this.countryObj.enabledForPaymentGateway2,
      active: this.countryObj.active
    });
    this.contentLoaded = true;
  }

  get f() { return this.countryEditForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (this.countryEditForm.invalid) {
      return;
    }
    let country: Country = new Country();
    country.name = this.countryEditForm.value['name'];
    country.code = this.countryEditForm.value['code'];
    country.userId = localStorage.getItem('userId');
    country.applyVat = this.countryEditForm.value['applyVat'];
    country.enabledForPaymentGateway1 = (this.countryEditForm.value['enabledForPaymentGateway1']) ? '1': '0';
    country.enabledForPaymentGateway2 = (this.countryEditForm.value['enabledForPaymentGateway2']) ?'1': '0';
    country.active = this.countryEditForm.value['active'];
    let result = await this.countriesService.updateCountry(country);
    if (result['status'] == 200) {
      this.router.navigateByUrl('/admin/countries');
      this.sharedService.showMessage({ 'type': 'success', 'message': 'Country details updated Successfully!' });
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': result['error'] });
    }
  }
}
