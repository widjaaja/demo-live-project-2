import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent implements OnInit {
  productAddForm: UntypedFormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: UntypedFormBuilder, private productService: ProductsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.productAddForm = this.formBuilder.group({
      userID: ['', Validators.required],
      productCode: ['', Validators.required],
      description: ['', Validators.required],
      licensePeriod: ['', Validators.required],
      maintenanceIncluded: [''],
      loggingIncluded: [''],
      analysisIncluded: [''],
      schedulerIncluded: [''],
      currency: ['', Validators.required],
      listPrice: ['', Validators.required],
      unitPriceExVAT: ['', Validators.required],
      enabled: [''],
      featureProduct: [''],
      payOnline: [''],
      evaluationOnline: [''],
      licenseType: [''],
      shortDescription: ['', Validators.required],
      serverEdition: [''],
    });

    let userId = localStorage.getItem('userId');
    this.productAddForm.patchValue({
      userID: userId,
    });
  }

  get f() { return this.productAddForm.controls; }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productAddForm.invalid) {
      console.log(this.productAddForm.invalid);
      return;
    }

    let productObj = new Product();
    productObj.userID = this.productAddForm.value['userID'];
    productObj.description = this.productAddForm.value['description'];
    productObj.productCode = this.productAddForm.value['productCode'];
    productObj.shortDescription = this.productAddForm.value['shortDescription'];

    productObj.maintenanceIncluded = (this.productAddForm.value['maintenanceIncluded']) ? 1 : 0;
    productObj.schedulerIncluded = (this.productAddForm.value['schedulerIncluded']) ? 1 : 0;
    productObj.analysisIncluded = (this.productAddForm.value['analysisIncluded']) ? 1 : 0;
    productObj.loggingIncluded = (this.productAddForm.value['loggingIncluded']) ? 1 : 0;
    productObj.listPrice = this.productAddForm.value['listPrice'];
    productObj.unitPriceExVat = this.productAddForm.value['unitPriceExVAT'];
    productObj.currency = this.productAddForm.value['currency'];
    productObj.payOnline = (this.productAddForm.value['payOnline']) ? 1 : 0;
    productObj.licensePeriod = this.productAddForm.value['licensePeriod'];
    productObj.enabled = (this.productAddForm.value['enabled']) ? 1 : 0;
    productObj.evaluationOnline = (this.productAddForm.value['evaluationOnline']) ? 1 : 0;
    productObj.serverEdition = this.productAddForm.value['serverEdition'];
    productObj.featureProduct = (this.productAddForm.value['featureProduct']) ? 1 : 0;
    const result = await this.productService.addProduct(productObj);
    console.log(result);
    if (result['body']['isSuccess'] === true) {
      this.router.navigateByUrl('/admin/products');
      this.sharedService.showMessage({ 'type': 'success', 'message': 'Product added Successfully!' });
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': result['body']['errorMessage'] });
    }
  }
}
