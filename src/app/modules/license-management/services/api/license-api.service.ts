import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../../shared/services/Api/http-api.service';
import { LicenseDetail, LicenseServerDetails, LicenseDetails, SingleLicenseDetail, SingleLicenseServerDetails } from '../../model/license-detail';
@Injectable({
  providedIn: 'root'
})
export class LicenseApiService {
  apiUrl = 'license/';
  constructor(private httpApiService: HttpApiService) { }

  /**
   *
   * @returns products
   * Method to retrieve products data from backend and pass on to products service
  */
  async getCustomerLicenseDetail(userid, customerRecId): Promise<LicenseDetails> {
    const url = `${this.apiUrl}GetDetails?UserID=${userid}&CustomerRecID=${customerRecId}`;
    let licenseDetails: LicenseDetails;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          licenseDetails = data as LicenseDetails;
        }
      });
    return licenseDetails;
  }


  async getLicenseDetailById(userid, licenseKey): Promise<SingleLicenseDetail> {
    const url = `${this.apiUrl}GetLicenseDetail?UserID=${userid}&LicenseKey=${licenseKey}`;
    let licenseDetail: SingleLicenseDetail;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          licenseDetail = data as SingleLicenseDetail;
        }
      });
    return licenseDetail;
  }


  async getLicenseServerDetail(userid, licenseId): Promise<LicenseServerDetails> {
    const url = `${this.apiUrl}GetServerDetails?UserID=${userid}&LicenseKey=${licenseId}`;
    let licenseServerDetails: LicenseServerDetails;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          licenseServerDetails = data as LicenseServerDetails;
        }
      });
    return licenseServerDetails;
  }

  async getLicenseServerDetailById(userid, licenseServerRecId): Promise<SingleLicenseServerDetails> {
    const url = `${this.apiUrl}GetSingleServerDetail?UserID=${userid}&RecID=${licenseServerRecId}`;
    let licenseServerDetails: SingleLicenseServerDetails;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          licenseServerDetails = data as SingleLicenseServerDetails;
        }
      });
    return licenseServerDetails;
  }


  async generateLicense(userid, licenseId): Promise<LicenseServerDetails> {
    const url = `${this.apiUrl}Generate?UserID=${userid}&LicenseID=${licenseId}`;
    let licenseServerDetail: LicenseServerDetails;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          licenseServerDetail = data as LicenseServerDetails;
        }
      });
    return licenseServerDetail;
  }

  async updateLicense(licenseObj) {
    const url = `${this.apiUrl}Update`;
    return await this.httpApiService.putData(url, licenseObj);
  }

  async updateLicenseServer(licenseServerObj) {
    const url = `${this.apiUrl}UpdateLicenseServer`;
    return await this.httpApiService.putData(url, licenseServerObj);
  }

  async renewLicense(licenseServerObj) {
    const url = `${this.apiUrl}RenewLicense`;
    return await this.httpApiService.putData(url, licenseServerObj);
  }
}
