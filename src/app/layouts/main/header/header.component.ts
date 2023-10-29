import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../modules/products/services/products.service';
import { Product } from '../../../modules/products/models/products';
import { UserAccountService } from '../../../modules/user-account/services/user-account.service';
import { Event, NavigationStart, NavigationEnd, Router } from '@angular/router';
import { BasketItems, BasketTotal, BasketProduct } from '../../../modules/user-account/models/user';
import { HeaderService } from './header.service';
import { SetupScreenService } from '../../../modules/setup-screen/services/setup-screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public basketCount = 0;
  public basketLoaded = false;
  public products: Product;
  public basketItems: BasketItems;
  public basketTotal: BasketTotal;
  public basketProducts: BasketProduct;
  public userName = '';
  public userloggedin = false;
  constructor(private productsService: ProductsService,
    private accountService: UserAccountService,
    private router: Router,
    public headerService: HeaderService,
    public setupScreenService: SetupScreenService) {

  }

  ngOnInit(): void {
    this.getBasketCount();
    this.getAllProducts();
  }



  async getBasketCount() {
    let userloggedIn = localStorage.getItem('loggedIn');
    if (userloggedIn) {
      this.userloggedin = true;
      this.userName = localStorage.getItem('name');
      let userId = localStorage.getItem('userId');
      this.basketItems = await this.productsService.getBasketItems(userId);
      this.basketCount = await this.productsService.getBasketItemsCount(userId);
      
      this.basketTotal = await this.productsService.getBasketTotal(userId);
    }
    this.basketLoaded = true;
  }

  async getAllProducts() {
    this.products = await this.productsService.getAllProducts();
  }

  UserLogout() {
    this.accountService.UserLogout('USER_LOGOUT');
  }

  userUpdateProfile() {
    let userRole = localStorage.getItem('user_role');
    if (userRole == 'ADMIN') {
      this.router.navigateByUrl('/admin/update-profile');
    } else {
      this.router.navigateByUrl('/user/update-profile');
    }
  }

  freeTrial() {
    this.router.navigateByUrl('/maintenance-page');
  }

  removeHover(productUrl, productId = null) {
    productUrl = '/' + productUrl;
    if (productId) {
      productUrl = productUrl + '/' + productId;
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([productUrl]);
  }

}
