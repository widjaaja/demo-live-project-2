import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PromotionsService } from '../../promotions.service';
import { PromotionCodes } from '../../model/promotion';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-admin-promotion-view',
  templateUrl: './admin-promotion-view.component.html',
  styleUrls: ['./admin-promotion-view.component.css']
})
export class AdminPromotionViewComponent implements OnInit {
  public promotionCode = '';
  promotionViewForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  promoCodeObj: PromotionCodes;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private promotionsService: PromotionsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.promotionCode = routeParams.promotionId;
      this.getPromotionDetail(this.promotionCode);
    });
    this.promotionViewForm = this.formBuilder.group({

      code: [{ value: '', disabled: true }],
      endDate: [{ value: '', disabled: true }],
      qualification: [{ value: '', disabled: true }],
      qualificationThreshold: [{ value: '', disabled: true }],
      startDate: [{ value: '', disabled: true }],
      value: [{ value: '', disabled: true }],
      type: [{ value: '', disabled: true }],
    });
  }

  async getPromotionDetail(promotionCode) {
    let userId = localStorage.getItem('userId');
    this.promoCodeObj = await this.promotionsService.getPromotionByCode(promotionCode, userId);
    const year: number = new Date(this.promoCodeObj.startDate).getFullYear();
    const month: number = new Date(this.promoCodeObj.startDate).getMonth() + 1;
    const day: number = new Date(this.promoCodeObj.startDate).getDate();

    const endyear: number = new Date(this.promoCodeObj.endDate).getFullYear();
    const endmonth: number = new Date(this.promoCodeObj.endDate).getMonth() + 1;
    const endday: number = new Date(this.promoCodeObj.endDate).getDate();
    this.promotionViewForm.patchValue({
      code: this.promoCodeObj.code,
      qualification: this.promoCodeObj.qualification,
      endDate: endyear + '-' + endmonth + '-' + endday,
      qualificationThreshold: this.promoCodeObj.qualificationThreshold,
      startDate: year + '-' + month + '-' + day,
      value: this.promoCodeObj.value,
      type: this.promoCodeObj.type,
    });
    this.contentLoaded = true;
  }

  get f() { return this.promotionViewForm.controls; }

}
