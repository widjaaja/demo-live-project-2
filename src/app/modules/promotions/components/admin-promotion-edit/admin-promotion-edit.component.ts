import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PromotionsService } from '../../promotions.service';
import { PromotionCodes } from '../../model/promotion';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-admin-promotion-edit',
  templateUrl: './admin-promotion-edit.component.html',
  styleUrls: ['./admin-promotion-edit.component.css']
})
export class AdminPromotionEditComponent implements OnInit {
  public promotionCode = '';
  promotionEditForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  promoCodeObj: PromotionCodes;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private promotionsService: PromotionsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.promotionCode = routeParams.promotionId;
      this.getPromotionDetail(this.promotionCode);
    });
    this.promotionEditForm = this.formBuilder.group({

      code: ['', Validators.required],
      endDate: ['', Validators.required],
      qualification: ['', Validators.required],
      qualificationThreshold: ['', Validators.required],
      startDate: ['', Validators.required],
      value: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  async getPromotionDetail(promotionCode) {
    let userId = localStorage.getItem('userId');
    this.promoCodeObj = await this.promotionsService.getPromotionByCode(promotionCode, userId);
    //{ year: 2018, month: 3, day: 28 }
    const year: number = new Date(this.promoCodeObj.startDate).getFullYear();
    const month: number = new Date(this.promoCodeObj.startDate).getMonth() + 1;
    const day: number = new Date(this.promoCodeObj.startDate).getDate();

    const endyear: number = new Date(this.promoCodeObj.endDate).getFullYear();
    const endmonth: number = new Date(this.promoCodeObj.endDate).getMonth() + 1;
    const endday: number = new Date(this.promoCodeObj.endDate).getDate();

    this.promotionEditForm.patchValue({
      code: this.promoCodeObj.code,
      qualification: this.promoCodeObj.qualification,

      endDate: { 'year': endyear, 'month': endmonth, 'day': endday },
      qualificationThreshold: this.promoCodeObj.qualificationThreshold,
      startDate: { 'year': year, 'month': month, 'day': day },
      value: this.promoCodeObj.value,
      type: this.promoCodeObj.type,
    });
    this.contentLoaded = true;
  }

  get f() { return this.promotionEditForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (this.promotionEditForm.invalid) {
      return;
    }
    let promoObj = new PromotionCodes();
    promoObj.code = this.promotionEditForm.value['code'];
    promoObj.qualification = this.promotionEditForm.value['qualification'];
    promoObj.qualificationThreshold = this.promotionEditForm.value['qualificationThreshold'];
    promoObj.startDate = this.promotionEditForm.value['startDate'];
    promoObj.endDate = this.promotionEditForm.value['endDate'];
    promoObj.value = this.promotionEditForm.value['value'];
    promoObj.type = this.promotionEditForm.value['type'];
    let userId = localStorage.getItem('userId');
    promoObj.userID = userId;


    promoObj.startDate = promoObj.startDate['year'] + '-' + promoObj.startDate['month'] + '-' + promoObj.startDate['day'];
    promoObj.endDate = promoObj.endDate['year'] + '-' + promoObj.endDate['month'] + '-' + promoObj.endDate['day'];
    let result = await this.promotionsService.updatePromo(promoObj);
    console.log(result);
    if (result['body']['isSuccess'] === true) {
      this.router.navigateByUrl('/admin/promotions');
      this.sharedService.showMessage({ 'type': 'success', 'message': 'Promotion Code updated Successfully!' });
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': result['body']['errorMessage'] });
    }
  }
}
