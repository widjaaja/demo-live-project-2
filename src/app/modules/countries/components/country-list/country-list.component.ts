import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country, CountriesList } from '../../models/countries';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country;
  countryLists: CountriesList;
  contentLoaded = false;
  constructor(private countryService: CountriesService, private router: Router, public sharedService: SharedService) { }

  ngOnInit(): void {
    this.getallCountries();
  }

  async getallCountries() {
    this.countryLists = await this.countryService.getAllCountries();
    this.countries = this.countryLists.countryLists;
    this.contentLoaded = true;
  }

  async delete(item) {
    let userId = localStorage.getItem('userId');
    if (confirm('Are you sure to delete country: ' + item.name + '?')) {
      let result = await this.countryService.deleteCountry(item.code, userId);
      if (result['isSuccess'] == true) {
        this.sharedService.showMessage({ 'type': 'success', 'message': 'Country ' + item.name + ' deleted Successfully!' });
        this.router.navigateByUrl('/admin/countries');
      } else {
        this.sharedService.showMessage({ 'type': 'danger', 'message': result['errorMessage'] });
      }
    } else {
      this.router.navigateByUrl('/admin/countries');
    }
  }

}
