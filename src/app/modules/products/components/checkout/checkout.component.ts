import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { BasketItems, BasketTotal } from '../../../user-account/models/user';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public basketCount = 0;
  public basketLoaded = false;
  public basketItems: BasketItems;
  public basketTotal: BasketTotal;
  checkoutForm: UntypedFormGroup;
  submitted = false;
  submitting = false;
  sucessCheckout = false;
  sucessCheckoutManual = false;
  showOnlineCheckout = false;
  constructor(private productsService: ProductsService, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {

    let checkoutsuccess = localStorage.getItem('successCheckout');
    let successCode = localStorage.getItem('successCode');

    localStorage.removeItem('successCheckout');
    if (checkoutsuccess == 'TRUE') {
      this.sucessCheckout = true;
      if (successCode == '10') {
        this.sucessCheckoutManual = true;
        //this.sucessCheckout = false;
      }
    }
    this.getBasketCount();

  }

  async getBasketCount() {
    let userloggedIn = localStorage.getItem('loggedIn');
    if (userloggedIn) {
      let userId = localStorage.getItem('userId');
      this.basketItems = await this.productsService.getBasketItems(userId);
      this.basketCount = await this.productsService.getBasketItemsCount(userId);

      let promoCode = localStorage.getItem('promo');
      if (promoCode) {
        this.basketTotal = await this.productsService.getBasketTotalWithPromo(userId, promoCode);
      } else {
        this.basketTotal = await this.productsService.getBasketTotal(userId);
      }
      localStorage.setItem('successCode', this.basketTotal.responseId);
      if (Number(this.basketTotal.responseId) === 1) {
        this.showOnlineCheckout = true;
      } else {
        this.showOnlineCheckout = false;
      }
      console.log(Number(this.basketTotal.responseId));
    } else {
      window.location.href = window.location.origin + '/login';
    }

    this.basketLoaded = true;
  }

  async placeOrder() {
    this.submitted = true;
    this.submitting = true;
    const userId = localStorage.getItem('userId');
    const promo = localStorage.getItem('promo');
    let response = await this.productsService.checkoutCart(userId, promo);
    if (response['isSuccess'] === true) {
      localStorage.removeItem('promo');
      localStorage.setItem('successCheckout', 'TRUE');
      window.location.reload();
    }
  }

  async placeOnlineOrder() {
    this.submitted = true;
    this.submitting = true;
    let response = await this.productsService.checkoutOnline();
    // if (response['isSuccess'] === true) {
    localStorage.removeItem('promo');
    localStorage.setItem('successCheckout', 'TRUE');
    //window.location.reload();
    // }
  }
}
