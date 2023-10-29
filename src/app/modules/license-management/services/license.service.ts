import { Injectable } from '@angular/core';
import { LicenseApiService } from '../services/api/license-api.service';
import { LicenseServerDetails, LicenseDetails, LicenseDetail, SingleLicenseDetail, SingleLicenseServerDetails } from '../model/license-detail';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {
  licenseServerDetails: LicenseServerDetails;
  singleLicenseServerDetails: SingleLicenseServerDetails;
  licenseDetails: LicenseDetails;
  licenseDetail: SingleLicenseDetail;
  constructor(private licenseApiService: LicenseApiService, private router: Router, private sharedService: SharedService) { }

    /**
  *
  * Method to fetch themesettings from api and set form data
  */
  async getCustomerLicenseDetail(userid, customerId) {
    await this.licenseApiService.getCustomerLicenseDetail(userid, customerId).then((data: LicenseDetails) => {
      this.licenseDetails = data;
    });
    return this.licenseDetails;
  }

  async getLicenseDetailById(userid, licenseKey) {
    await this.licenseApiService.getLicenseDetailById(userid, licenseKey).then((data: SingleLicenseDetail) => {
      this.licenseDetail = data;
    });
    return this.licenseDetail;
  }

  async getLicenseServerDetail(userid, licenseId) {
    await this.licenseApiService.getLicenseServerDetail(userid, licenseId).then((data: LicenseServerDetails) => {
      this.licenseServerDetails = data;
    });
    return this.licenseServerDetails;
  }

  async getLicenseServerDetailById(userid, licenseServerRecId) {
    await this.licenseApiService.getLicenseServerDetailById(userid, licenseServerRecId).then((data: SingleLicenseServerDetails) => {
      this.singleLicenseServerDetails = data;
    });
    return this.singleLicenseServerDetails;
  }

  async generateLicense(userid, licenseId) {
    let dataReponse;
    await this.licenseApiService.generateLicense(userid, licenseId).then((data) => {
      dataReponse = data;
    });
    return dataReponse;
    //return this.licenseServerDetail;
  }

  async updateLicense(licenseObj) {
    return await this.licenseApiService.updateLicense(licenseObj);
  }

  async updateLicenseServer(licenseServerObj) {
    return await this.licenseApiService.updateLicenseServer(licenseServerObj);
  }

  async renewLicense(renewLicenseObj) {
    return await this.licenseApiService.renewLicense(renewLicenseObj);
  }
}
