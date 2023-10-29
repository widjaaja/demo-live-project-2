import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router, Event } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { UserBasket } from '../../../user-account/models/user';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../../customers/services/customer.service';
import { CustomersList } from '../../../customers/models/customer';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  public product: Product;
  //public products: Product;
  public contentLoaded = false;
  public productCode = '';
  closeResult: string;
  addCartForm: UntypedFormGroup;
  submitted = false;
  userRole = '';
  customers: CustomersList;
  hasCustomers = false;
  customerId = '';
  userName = '';
  userId = '';
  includeCount = 0;
  constructor(private productService: ProductsService, private route: ActivatedRoute, private metaService: Meta, private titleService: Title, private router: Router, private modalService: NgbModal, private formBuilder: UntypedFormBuilder, private customerService: CustomerService, public sharedService: SharedService) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(routeParams => {
      this.productCode = routeParams.productsku;
      this.getProductDetail(this.productCode);
    });
    this.addCartForm = this.formBuilder.group({
      serverName: ['', Validators.required],
      domainName: ['', Validators.required],
      userId: ['', Validators.required],
      clusterName: [''],
      });

  }

  async getProductDetail(productCode) {
    let userId = localStorage.getItem('userId');
    this.product = await this.productService.getProductDetail(productCode, userId);
    //this.products = await this.productService.getAllProducts();
    let prodName = 'SQL Mantra Tools - ' + this.product.description;
    this.titleService.setTitle(prodName);
    this.metaService.updateTag(
      { name: 'description', content: this.product.shortDescription }
    );
    if (this.product.maintenanceIncluded == 1) {
      this.includeCount++;
    }
    if (this.product.schedulerIncluded == 1) {
      this.includeCount++;
    }
    if (this.product.analysisIncluded == 1) {
      this.includeCount++;
    }
    if (this.product.loggingIncluded == 1) {
      this.includeCount++;
    }
    this.contentLoaded = true;
  }

  async getMyCustomers() {
    let userId = localStorage.getItem('userId');
    this.customers = await this.customerService.getAllUserCustomers(userId);
    this.hasCustomers = true;
  }

  RequestTrial() {
    window.location.href = window.location.origin + '/free-trial/' + this.product.productCode;
  }


  open(content) {
    if (localStorage.getItem('loggedIn') == 'TRUE') {
      this.userRole = localStorage.getItem('user_role');
      if (this.userRole == 'ADMIN' || this.userRole == 'PARTNER') {
        this.getMyCustomers();
      } else {

        this.userId = localStorage.getItem('userId');
        this.userName = localStorage.getItem('name');
        this.customerId = localStorage.getItem('customerId');
        this.addCartForm.patchValue({
          userId: this.userId,
        });  
      }

      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.addCartForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (this.addCartForm.invalid) {
      return;
    }
    let userBasket: UserBasket = new UserBasket();
    userBasket.productCode = this.product.productCode;
    userBasket.serverName = this.addCartForm.value['serverName'];
    userBasket.domainName = this.addCartForm.value['domainName'];
    userBasket.clusterName = this.addCartForm.value['clusterName'];
    let userId = localStorage.getItem('userId');
    let referrerurl = localStorage.getItem('referrerUrl');
    userBasket.referredByURL = referrerurl;
    userBasket.userID = userId;
    let customerId = this.customerId;
    if (this.hasCustomers) {
      customerId = this.addCartForm.value['userId'];
    }
    userBasket.customerID = customerId;
    let response = await this.productService.addItemtoCart(userBasket);
    console.log(response);
    if (response['body']['isSuccess'] == true) {
      window.location.reload();
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': response['body']['errorMessage'] });

    }

  }
}
