export class Country {
  public id: string;
  public code: string;
  public name: string;
  public active: boolean;
  public enabledForPaymentGateway1: string;
  public enabledForPaymentGateway2: string;
  public applyVat: boolean;
  public userId: string;
}

export class CountriesList {
  public countryLists: Country;
}
