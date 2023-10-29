import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../products/services/products.service';
import { Product } from '../../../products/models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../customers/services/customer.service';
import { CustomersList } from '../../../customers/models/customer';
import { UserBasket } from '../../../user-account/models/user';
import { SharedService } from '../../../../shared/services/shared.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-free-trial-page',
  templateUrl: './free-trial-page.component.html',
  styleUrls: ['./free-trial-page.component.css']
})
export class FreeTrialPageComponent implements OnInit {
  freeTrialForm: UntypedFormGroup;
  submitted = false;
  selectedProduct: Product;
  selectProductCode = '';
  products: Product;
  userRole = '';
  customers: CustomersList;
  hasCustomers = false;
  customerId = '';
  userName = '';
  userId = '';
  contentLoaded = false;
  includeCount = 0;
  closeResult: string;

  public productCode = '';
  constructor(private formBuilder: UntypedFormBuilder, private productService: ProductsService, private route: ActivatedRoute, private router: Router, private customerService: CustomerService, private sharedService: SharedService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.productCode = routeParams.productsku;
      this.getProductDetail(this.productCode);
    });
    this.freeTrialForm = this.formBuilder.group({
      userId: ['', Validators.required],
      serverName: ['', Validators.required],
      domainName: ['', Validators.required],
      clusterName: [''],
    });

  }

  async getMyCustomers() {
    let userId = localStorage.getItem('userId');
    this.customers = await this.customerService.getAllUserCustomers(userId);
    this.hasCustomers = true;
  }


  async getProductDetail(productCode) {
    if (typeof productCode != 'undefined' || productCode != null) {
      let userId = localStorage.getItem('userId');
      this.selectedProduct = await this.productService.getProductDetail(productCode, userId);
      if (this.selectedProduct.productCode == null) {
        this.router.navigateByUrl('/home');
      }
    }
    if (localStorage.getItem('loggedIn') == 'TRUE') {
      this.userRole = localStorage.getItem('user_role');
      if (this.userRole == 'ADMIN' || this.userRole == 'PARTNER') {
        this.getMyCustomers();
      } else {

        this.userId = localStorage.getItem('userId');
        this.userName = localStorage.getItem('name');
        this.customerId = localStorage.getItem('customerId');
        this.freeTrialForm.patchValue({
          userId: this.userId,
        });
      }
      this.contentLoaded = true;
      if (this.selectedProduct.maintenanceIncluded == 1) {
        this.includeCount++;
      }
      if (this.selectedProduct.schedulerIncluded == 1) {
        this.includeCount++;
      }
      if (this.selectedProduct.analysisIncluded == 1) {
        this.includeCount++;
      }
      if (this.selectedProduct.loggingIncluded == 1) {
        this.includeCount++;
      }
    } else {
      this.router.navigateByUrl('/login');

    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.freeTrialForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (this.freeTrialForm.invalid) {
      return;
    }

    let userBasket: UserBasket = new UserBasket();
    userBasket.productCode = this.productCode;
    userBasket.serverName = this.freeTrialForm.value['serverName'];
    userBasket.domainName = this.freeTrialForm.value['domainName'];
    userBasket.clusterName = this.freeTrialForm.value['clusterName'];
    let userId = localStorage.getItem('userId');
    userBasket.userID = userId;
    let customerId = localStorage.getItem('customerId');
    if (this.hasCustomers) {
      customerId = this.freeTrialForm.value['userId'];
    }
    userBasket.customerID = customerId;
    let result = await this.productService.requestEvaluationLicense(userBasket);
    console.log(result);
    if (result['status'] == 200) {
      this.router.navigateByUrl('/product/' + this.productCode);
      if (result['body']['errorCode'] == 1)
        this.sharedService.showMessage({ 'type': 'success', 'message': 'License requested Successfully! Download the license from the dashboard.' });
      else
        this.sharedService.showMessage({ 'type': 'success', 'message': 'License requested Successfully!' });
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': result['error'] });
    }
  }

  open(content) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

}
