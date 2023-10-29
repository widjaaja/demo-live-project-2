import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/countries';

@Component({
  selector: 'app-countries-view',
  templateUrl: './countries-view.component.html',
  styleUrls: ['./countries-view.component.css']
})
export class CountriesViewComponent implements OnInit {
  public countryCode = '';
  countryViewForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  countryObj: Country;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private countriesService: CountriesService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.countryCode = routeParams.countryCode;
      this.getPromotionDetail(this.countryCode);
    });
    this.countryViewForm = this.formBuilder.group({
      name: [{ value: '', disabled: true }],
      code: [{ value: '', disabled: true }],
      applyVat: [{ value: '', disabled: true }],
      enabledForPaymentGateway1: [{ value: '', disabled: true }],
      enabledForPaymentGateway2: [{ value: '', disabled: true }],
      active: [{ value: '', disabled: true }],
    });
  }

  async getPromotionDetail(countryCode) {
    let userId = localStorage.getItem('userId');
    this.countryObj = await this.countriesService.getCountryDetail(countryCode, userId);
    this.countryViewForm.patchValue({
      name: this.countryObj.name,
      code: this.countryObj.code,
      applyVat: this.countryObj.applyVat,
      enabledForPaymentGateway1: this.countryObj.enabledForPaymentGateway1,
      enabledForPaymentGateway2: this.countryObj.enabledForPaymentGateway2,
      active: this.countryObj.active
    });
    this.contentLoaded = true;
  }

  get f() { return this.countryViewForm.controls; }

}
