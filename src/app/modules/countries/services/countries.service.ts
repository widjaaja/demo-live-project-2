import { Injectable } from '@angular/core';
import { CountriesApiService } from '../services/api/countries-api.service';
import { Country, CountriesList } from '../models/countries';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  country: Country;
  countryLists: CountriesList;
  constructor(private countriesApiService: CountriesApiService, private router: Router) { }

  /**
*
* Method to fetch themesettings from api and set form data
*/
  async getAllCountries() {
    await this.countriesApiService.getAllCountries().then((data: CountriesList) => {
      this.countryLists = data;
    });
    return this.countryLists;
  }

  async getAllActiveCountries() {
    await this.countriesApiService.getAllActiveCountries().then((data: CountriesList) => {
      this.countryLists = data;
    });
    return this.countryLists;
  }

  async getCountryDetail(countryId, userId) {

    //this.countryAddForm.controls['userId'].setValue('rama-m@hotmail.co.uk');

    await this.countriesApiService.getCountryDetail(countryId, userId).then((data: Country) => {
      this.country = data;
    });
    console.log(this.country);
    return this.country;
  }

  async addCountry(country) {

    return await this.countriesApiService.addCountry(country);
  }

  async updateCountry(country) {

    return await this.countriesApiService.updateCountry(country);
  }

  async deleteCountry(countryCode, userId) {

    return await this.countriesApiService.deleteCountry(countryCode, userId);
  }
}
