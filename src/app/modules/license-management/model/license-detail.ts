export class LicenseDetail {
  public licenseId: number;
  public customerId: number;
  public active: number;
  public evaluation: number;
  public productCode: string;
  public licenseKey: string;
  public autoRenew: number;
  public maintenanceServer: string;
  public maintenanceDomain: string;
  public maintenanceExpiryDate: string;
  public loggingServer: string;
  public loggingDomain: string;
  public loggingExpiryDate: string;
  public schedulerServer: string;
  public schedulerDomain: string;
  public schedulerExpiryDate: string;
  public analysisServer: string;
  public analysisDomain: string;
  public analysisExpiryDate: string;
  public server: string;
  public domain: string;
  public expiryDate: string;
}

export class LicenseDetails {
  public licenseDetails: LicenseDetail[];
  public totalCount: number;
  public responseId: string;
  public errorMessage: string;
  public isSuccess: boolean;
  public errorCode: number;

}

export class RenewLicenseObj {
  public userID: string;
  public licenseID: number;
  public referredByURL: string;
}

export class SingleLicenseDetail {
  public errorMessage: string;
  public licenseId: number;
  public userID: string;
  public customerId: number;
  public active: number;
  public evaluation: number;
  public productCode: string;
  public notes: string;
  public licenseKey: string;
  public autoRenew: number;
  public maintenanceServer: string;
  public maintenanceDomain: string;
  public maintenanceExpiryDate: string;
  public loggingServer: string;
  public loggingDomain: string;
  public loggingExpiryDate: string;
  public schedulerServer: string;
  public schedulerDomain: string;
  public schedulerExpiryDate: string;
  public analysisServer: string;
  public analysisDomain: string;
  public analysisExpiryDate: string;
}


export class LicenseServerDetail {
  public licenseId: number;
  public serverName: number;
  public lastUpdated: string;
  public sqlServerEdition: string;
  public active: boolean;
  public description: number;
  public userID: string;
  public recID  : string;

}

export class LicenseServerDetails {
  public licenseServerDetail: LicenseServerDetail[];
  public totalCount: number;
  public responseId: string;
  public errorMessage: string;
  public isSuccess: boolean;
  public errorCode: number;

}

export class SingleLicenseServerDetails {
  public licenseServerDetails: LicenseServerDetail[];
  public totalCount: number;
  public responseId: string;
  public errorMessage: string;
  public isSuccess: boolean;
  public errorCode: number;

}


