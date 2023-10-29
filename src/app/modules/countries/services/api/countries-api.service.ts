import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../../shared/services/Api/http-api.service';
import { Country, CountriesList } from '../../models/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  apiUrl = 'Country/';
  constructor(private httpApiService: HttpApiService) { }

  /**
   *
   * @returns countries
   * Method to retrieve products data from backend and pass on to products service
  */
  async getAllCountries(): Promise<CountriesList> {
    const url = `${this.apiUrl}GetAll`;
    let countries: CountriesList;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          countries = <CountriesList>data;
        }
      });
    return countries;
  }

  /**
   *
   * @returns countries
   * Method to retrieve products data from backend and pass on to products service
   */

  async getAllActiveCountries(): Promise<CountriesList> {
    const url = `${this.apiUrl}GetAllActive`;
    let countries: CountriesList;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          countries = data as CountriesList;
        }
      });
    return countries;
  }

  

  async getCountryDetail(countryCode, userId): Promise<Country> {
    const url = `${this.apiUrl}Get?Code=${countryCode}&UserId=${userId}`;
    let countries: Country;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          countries = <Country>data;
        }
      });
    return countries;
  }

  async addCountry(countryData) {
    const url = `${this.apiUrl}Create`;
    return await this.httpApiService.postData(url, countryData);
  }

  async updateCountry(countryData) {
    const url = `${this.apiUrl}UpdateCode`;
    return await this.httpApiService.putData(url, countryData);
  }

  async deleteCountry(countryCode, userId) {
    const url = `${this.apiUrl}Delete?Code=${countryCode}&UserID=${userId}`;
    return await this.httpApiService.delete(url);
  }

}
