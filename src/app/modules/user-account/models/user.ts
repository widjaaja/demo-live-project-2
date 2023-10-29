import { Product } from '../../products/models/products';

export class User {
  public id: string;
  public productCode: string;
  public description: string;
  public licensePeriod: string;
  public maintenanceIncluded: string;
  public loggingIncluded: string;
  public analysisIncluded: string;
  public schedulerIncluded: string;
  public currency: string;
  public listPrice: string;
  public unitPriceExVat: string;
  public enabled: string;
  public payOnline: string;
  public evaluationOnline: string;
  public licenseType: string;
}

export class PasswordResetRequest {
  public errorCode: number;
  public errorMessage: string;
  public isSuccess: boolean;
  public isVerificationCodeUsed: number;
  public responseId: string;
  public userId: string;
  public verificationCode: string;
}

export class AuthenticateUser {
  public userName: string;
  public password = '';
  public rememberMe: boolean;
}


export class JWTToken {
  public accessToken: JWTAccessToken;
  public refreshToken: string;
}

export class JWTAccessToken {
  expiresIn: string;
  token: string;
}

export class UserBasket {
  userID: string;
  customerID: string;
  productCode: string;
  serverName: string;
  clusterName: string;
  domainName: string;
  referredByURL: string;
}

export class BasketItems {
  clusterName: string;
  customerName: string;
  discountamount: string;
  domainName: string;
  lineNo: number;
  listPrice: number;
  productCode: string;
  serverName: string;
  totalPrice: number;
  unitPrice: number;
  userId: string;
  vatamount: number;
  currency: string;
  description: string;
}

export class BasketProduct {
  Product: Product;
  basketItem: BasketItems;
}

export class BasketTotal {
  totalPriceExVAT: string;
  totalDiscountAmount: string;
  totalVATAmount: string;
  totalSales: string;
  errorMessage: string;
  isSuccess: boolean;
  errorCode: number;
  currency: string;
  responseId: string;
}


