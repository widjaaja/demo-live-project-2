export class Product {
  public id: string;
  public userID: string;
  public productCode: string;
  public description: string;
  public shortDescription: string;
  public licensePeriod: string;
  public maintenanceIncluded: number;
  public loggingIncluded: number;
  public analysisIncluded: number;
  public schedulerIncluded: number;
  public currency: string;
  public listPrice: number;
  public unitPriceExVat: number;
  public unitPriceExVAT: number;
  public enabled: number;
  public payOnline: number;
  public featureProduct: number;
  public evaluationOnline: number;
  public licenseType: string;
  public serverEdition: string;
}

export class PaymentGatewayRequest {
  public paymentGatewayFlow: PaymentGatewayRedirectionResponse;
  public mandateId: string;
  public isExistingCustomer: boolean;
  public totalAmount: string;
}

export class PaymentGatewayRedirectionResponse {
  public confirmation_url: string;
  public created_at: string;
  public description: string;
  public id: string;
  public redirect_url: string;
  public links: PaymentLink;
  public scheme: string;
  public session_token: string;
  public success_redirect_url: string;
}


export class PaymentLink {
  public creditor: string;
  public customer: string;
  public customer_bank_account: string;
  public mandate: string;
}

export class MailData {
  public toName: string;
  public toAddress: string;
  public subject: string;
  public body: string;
}

export class ContactFormFields {
  public name: string;
  public email: string;
  public subject: string;
  public company: string;
  public phone: string;
  public message: string;
}
