export class Customer {
  public password: string;
  public address1: string;
  public address2: string;
  public address3: string;
  public address4: string;
  public adminUser: number;
  public contactEMail: string;
  public contactName: string;
  public contactPhoneNo: string;
  public country: string;
  public customerId: string;
  public discount: string;
  public enabled: number;
  public evaluationOnline: number;
  public marketingConsent: number;
  public name: string;
  public onAccount: number;
  public partner: number;
  public postCode: string;
  public referralFeePercent: string;
  public renewalDiscountPercent: string;
  public type: string;
  public userId: string;
  public url: string;
  public recID: string;
  public CustomerUserID: string;
}

export class CustomersList {
  public myCustomers: Customer;
  public totalCount: string;
}

export class PartnersList {
  public partnerLists: Partner
}

export class Partner {
  public customerID: number;
  public name: string;
}

export class CustomerVerificationEmail {
  public userId: string;
}

export class CustomerPwdReset {
  public userID: string;
  public password: string;
}
