import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../../shared/services/Api/http-api.service';
import { PaymentGatewayRedirectionResponse, Product } from '../../models/products';
import { BasketItems, BasketTotal } from '../../../user-account/models/user';
@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  apiUrl = 'Product/';
  paymentGatewayUrl = 'PaymentGateway/';
  constructor(private httpApiService: HttpApiService) { }

  /**
   *
   * @returns products
   * Method to retrieve products data from backend and pass on to products service
  */
  async getAllProducts(): Promise<Product> {
    const url = `${this.apiUrl}GetAll`;
    let products: Product;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          products = <Product>data;
        }
      });
    return products;
  }

  async getFeaturedProducts(): Promise<Product> {
    const url = `${this.apiUrl}GetAllFeatured`;
    let products: Product;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          products = <Product>data;
        }
      });
    return products;
  }

  async getProductDetail(productCode, userId): Promise<Product> {
    let url = `${this.apiUrl}Get?ProductCode=${productCode}`;
    if (userId != '') {
      url = `${this.apiUrl}Get?ProductCode=${productCode}&UserID=${userId}`;
    }
    let product: Product;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          product = <Product>data;
        }
      });
    return product;
  }

  async addItemtoCart(cartItem) {
    const url = `basket/Add`;
    let products: Product;
    console.log(url);
    console.log(cartItem);
    return await this.httpApiService.postData(url, cartItem);
  }

  async requestEvaluationLicense(product) {
    const url = `license/EvaluationLicenseRequest`;
    return await this.httpApiService.putData(url, product);
  }



  async addProduct(product) {
    const url = `${this.apiUrl}Create`;
    return await this.httpApiService.postData(url, product);
  }

  async updateProduct(product) {
    const url = `${this.apiUrl}Update`;
    return await this.httpApiService.putData(url, product);
  }

  async checkoutCart(userId, promo) {
    const url = `sales/CheckoutConfirmation?UserID=${userId}&PromotionCode=${promo}`;
    let response;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          response = data;
        }
      });
    return response;
  }


  async removeItemFromCart(userId, LineItem) {
    const url = `basket/Delete?UserID=${userId}&LineNo=${LineItem}`;
    let response: any;
    await this.httpApiService.delete(url)
      .then(data => {
        response = data;
      });
    return response;
  }

  async removeAllItemFromCart(userId) {
    const url = `basket/CleanBasket?UserID=${userId}`;
    let response: any;
    await this.httpApiService.delete(url)
      .then(data => {
        response = data;
      });
    return response;
  }

  async getBasketItemCount(userId) {
    const url = `basket/GetAllCount?UserId=${userId}`;
    let count = 0;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          count = data['count'];
        }
      });
    return count;
  }

  async getBasketItems(userId): Promise<BasketItems> {
    const url = `basket/GetAll?UserId=${userId}`;
    let basketitems: BasketItems;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          basketitems = <BasketItems>data;
        }
      });
    return basketitems;
  }

  async calculateBasketItems(userId): Promise<BasketTotal> {
    const url = `basket/CalculateBasket?UserID=${userId}`;
    let baskettotal: BasketTotal;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          baskettotal = <BasketTotal>data;
        }
      });
    return baskettotal;
  }

  async calculateBasketItemsWithPromo(userId, promoCode): Promise<BasketTotal> {
    const url = `basket/CalculateBasket?UserID=${userId}&PromotionCode=${promoCode}`;
    let baskettotal: BasketTotal;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          baskettotal = <BasketTotal>data;
        }
      });
    return baskettotal;
  }



  async sendMail(maildata) {
    const url = `email/Send`;
    let products: Product;
    console.log(url);
    console.log(maildata);
    await this.httpApiService.postData(url, maildata)
      .then(data => {
        if (data !== null) {
          products = data as Product;
        }
      });
    return products;
  }

  async getPaymentRedirection(postalCode, phoneNumber, name, email, address, companyName): Promise<PaymentGatewayRedirectionResponse> {
    const url = `${this.paymentGatewayUrl}PaymentRedirection?PostalCode=${postalCode}&PhoneNumber=${phoneNumber}&Name=${name}&Email=${email}&Address=${address}&CompanyName=${companyName}`;
    let paymentGatewayRedirectionResponse: PaymentGatewayRedirectionResponse;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          paymentGatewayRedirectionResponse = data as PaymentGatewayRedirectionResponse;
        }
      });
    return paymentGatewayRedirectionResponse;
  }

  async completeRedirectSuccess(sessionToken, requestId): Promise<PaymentGatewayRedirectionResponse> {
    const url = `${this.paymentGatewayUrl}CompleteRedirectSuccess?SessionToken=${sessionToken}&RequestId=${requestId}`;
    let paymentGatewayRedirectionResponse: PaymentGatewayRedirectionResponse;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          paymentGatewayRedirectionResponse = data as PaymentGatewayRedirectionResponse;
        }
      });
    return paymentGatewayRedirectionResponse;
  }

  async takingPayment(mandateId, amount, userID, code): Promise<PaymentGatewayRedirectionResponse> {
    const url = `${this.paymentGatewayUrl}TakingPayment?MandateId=${mandateId}&Amount=${amount}&UserID=${userID}&Code=${code}`;
    let paymentGatewayRedirectionResponse: PaymentGatewayRedirectionResponse;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          paymentGatewayRedirectionResponse = data as PaymentGatewayRedirectionResponse;
        }
      });
    return paymentGatewayRedirectionResponse;
  }
}
