import { Component, OnInit } from '@angular/core';
import { BasketItems, BasketTotal, BasketProduct } from '../../../user-account/models/user';
import { ProductsService } from '../../services/products.service';
import { PromotionsService } from '../../../promotions/promotions.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public basketCount = 0;
  public basketLoaded = false;
  public basketItems: BasketItems;
  public basketTotal: BasketTotal;
  public basketProducts: BasketProduct;
  public userName = '';
  public userloggedin = false;
  public promoCode = '';
  hasPromoError = false;
  promosuccessMsg = false;
  promoErrorMsg = '';
  constructor(private productsService: ProductsService, private promotionsService: PromotionsService, private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.getBasketCount();
  }

  async getBasketCount() {
    let userloggedIn = localStorage.getItem('loggedIn');
    if (userloggedIn) {
      this.userloggedin = true;
      this.userName = localStorage.getItem('name');
      let userId = localStorage.getItem('userId');
      this.basketItems = await this.productsService.getBasketItems(userId);
      this.basketCount = await this.productsService.getBasketItemsCount(userId);

      let promoCode = localStorage.getItem('promo');
      if (promoCode) {
        this.basketTotal = await this.productsService.getBasketTotalWithPromo(userId, promoCode);

        if (this.basketTotal['error']) {
          this.sharedService.showMessage({ 'type': 'danger', 'message': this.basketTotal['error'] });
          this.hasPromoError = true;
          this.promoErrorMsg = this.basketTotal.errorMessage;
        } else {
          this.promoCode = promoCode;
          this.promosuccessMsg = true;
          this.hasPromoError = false;
        }
      } else {
        this.basketTotal = await this.productsService.getBasketTotal(userId);
      }
      //this.basketTotal = await this.productsService.getBasketTotal(contactEMail);
    } else {
      window.location.href = window.location.origin + '/page-404';
    }
    if (this.basketCount == 0) {
      window.location.href = window.location.origin;
    }
    this.basketLoaded = true;
  }


  deleteItem(basketitem: BasketItems) {
    let userId = localStorage.getItem('userId');
    this.productsService.removeItemFromCart(userId, basketitem.lineNo);
    this.sharedService.showMessage({ 'type': 'success', 'message': 'Item removed from cart successfully!' });
    window.location.href = window.location.origin + '/cart';


  }

  deleteAllItem() {
    let userId = localStorage.getItem('userId');
    this.productsService.removeAllItemFromCart(userId);
    this.sharedService.showMessage({ 'type': 'success', 'message': 'All items are removed from cart successfully!' });
    window.location.href = window.location.origin + '/cart';

  }

  //added by ravi for applying promo code
  async applyPromyPromoCode() {
    if (this.promoCode) {
      //let userId = localStorage.getItem('userId');
      //let response = await this.promotionsService.getPromotionByCode(this.promoCode, userId);
      //if(typeof response['isSuccess'] != 'undefined' && response['isSuccess'] == true)
      //{  console.log('in');
      let userId = localStorage.getItem('userId');

      let basketTotal: BasketTotal = await this.productsService.getBasketTotalWithPromo(userId, this.promoCode);
      console.log(this.basketTotal);

      if (basketTotal.responseId === '0') {
        this.hasPromoError = true;
        this.promoErrorMsg = basketTotal.errorMessage;
      } else {
        if (basketTotal['error']) {
          this.sharedService.showMessage({ 'type': 'danger', 'message': basketTotal['error'] });
          this.hasPromoError = true;
          this.promoErrorMsg = basketTotal.errorMessage;
        }
        else {
          this.basketTotal = basketTotal;
          this.promosuccessMsg = true;
          localStorage.setItem('promo', this.promoCode);
          this.hasPromoError = false;
        }
      }
      //} else {
      //  this.hasPromoError = true;
      //  this.promoErrorMsg = response['error'];
      //}
    }
  }

  continueShopping() {
    this.router.navigateByUrl('/compare-products');
  }

  async removePromo() {
    localStorage.removeItem('promo');
    this.promoCode = '';
    this.promosuccessMsg = false;
    let userId = localStorage.getItem('userId');
    this.basketTotal = await this.productsService.getBasketTotal(userId);

  }
}
