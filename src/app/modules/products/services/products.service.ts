import { Injectable } from '@angular/core';
import { ProductsApiService } from '../services/api/products-api.service';
import { PaymentGatewayRedirectionResponse, PaymentGatewayRequest, Product } from '../models/products';
import { BasketItems, BasketTotal } from '../../user-account/models/user';
import { CustomerService } from '../../customers/services/customer.service';
import { Customer } from '../../customers/models/customer';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product;
  product: Product;
  basketItems: BasketItems;
  basketTotal: BasketTotal;
  constructor(private productsApiService: ProductsApiService, public customerService: CustomerService) { }

  /**
*
* Method to fetch themesettings from api and set form data
*/
  async getAllProducts() {
    await this.productsApiService.getAllProducts().then((data: Product) => {
      this.products = data;
    });
    return this.products;
  }

  async getProductDetail(productCode, userId) {
    if (!userId) {
      userId = '';
    }
    await this.productsApiService.getProductDetail(productCode, userId).then((data: Product) => {
      this.product = data;
    });
    return this.product;
  }

  async getFeaturedProducts() {
    await this.productsApiService.getFeaturedProducts().then((data: Product) => {
      this.products = data;
    });
    return this.products;
  }

  async getBasketItemsCount(userId) {
    let count = 0;
    await this.productsApiService.getBasketItemCount(userId)
      .then((data) => {
        count = data;
      });
    return count;
  }

  async getBasketItems(userId) {
    await this.productsApiService.getBasketItems(userId)
      .then((data: BasketItems) => {
        this.basketItems = data;
      });
    return this.basketItems;
  }

  async getBasketTotal(userId) {
    await this.productsApiService.calculateBasketItems(userId)
      .then((data: BasketTotal) => {
        this.basketTotal = data;
      });
    return this.basketTotal;
  }

  async getBasketTotalWithPromo(userId, promocode) {
    await this.productsApiService.calculateBasketItemsWithPromo(userId, promocode)
      .then((data: BasketTotal) => {
        this.basketTotal = data;
      });
    return this.basketTotal;
  }


  async addItemtoCart(cartitem) {
    return await this.productsApiService.addItemtoCart(cartitem);
  }

  async requestEvaluationLicense(product) {
    return await this.productsApiService.requestEvaluationLicense(product);
  }

  async addProduct(product) {
    return await this.productsApiService.addProduct(product);
  }

  async updateProduct(product) {
    return await this.productsApiService.updateProduct(product);
  }

  async removeItemFromCart(userId, lineItem) {
    await this.productsApiService.removeItemFromCart(userId, lineItem);
  }

  async removeAllItemFromCart(userId) {
    await this.productsApiService.removeAllItemFromCart(userId);
  }

  async checkoutCart(userId, promo) {
    return await this.productsApiService.checkoutCart(userId, promo);
  }

  async checkoutOnline() {
    let userId = localStorage.getItem('userId');
    let promo = localStorage.getItem('promo');
    let paymentGatewayResponse: PaymentGatewayRequest;
    paymentGatewayResponse = await this.checkoutCart(userId, promo);
    console.log(paymentGatewayResponse);
    localStorage.setItem('amount', paymentGatewayResponse.totalAmount);
    //let customerRecId = localStorage.getItem('customerRecId');
    //let customerObj: Customer = await this.customerService.getCustomerDetail(customerRecId, userId);

    //const postalCode = customerObj.postCode;
    //const phoneNumber = customerObj.contactPhoneNo;
    //const name = customerObj.contactName;
    //const email = customerObj.contactEMail;
    //const address = customerObj.address1;
    //const companyName = customerObj.name;
    //paymentGatewayResponse = await this.productsApiService.getPaymentRedirection(postalCode,
    //  phoneNumber, name, email, address, companyName);
    if (paymentGatewayResponse.mandateId && paymentGatewayResponse.isExistingCustomer) {
      localStorage.setItem('paymentMandate', paymentGatewayResponse.mandateId);
      await this.productsApiService.takingPayment(paymentGatewayResponse.mandateId, paymentGatewayResponse.totalAmount, userId, promo);
      window.location.href = window.location.origin + '/pay/confirm?status=success';
      console.log(paymentGatewayResponse);
    } else if (paymentGatewayResponse.paymentGatewayFlow.session_token) {
      localStorage.setItem('paymentSessionToken', paymentGatewayResponse.paymentGatewayFlow.session_token);
      if (paymentGatewayResponse.paymentGatewayFlow.redirect_url) {
        window.location.href = paymentGatewayResponse.paymentGatewayFlow.redirect_url;
      }
    }

  }

  async completeredirectPayment(requestId) {
    let paymentGatewayResponse: PaymentGatewayRedirectionResponse;
    let promo = localStorage.getItem('promo');
    let userId = localStorage.getItem('userId');
    let sessionToken = localStorage.getItem('paymentSessionToken');
    let cartAmount = localStorage.getItem('amount');
    // const cartAmount = 200;
    paymentGatewayResponse = await this.productsApiService.completeRedirectSuccess(sessionToken, requestId);
    if (paymentGatewayResponse.links.mandate) {
      localStorage.setItem('paymentMandate', paymentGatewayResponse.links.mandate);
      paymentGatewayResponse = await this.productsApiService.takingPayment(paymentGatewayResponse.links.mandate, cartAmount, userId, promo);
      console.log(paymentGatewayResponse);
    }
  }

  sendMail(mailData) {
    this.productsApiService.sendMail(mailData);
  }
}
