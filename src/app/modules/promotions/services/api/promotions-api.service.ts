import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../../shared/services/Api/http-api.service';
import { PromotionCodes } from '../../model/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionsApiService {
  apiUrl = 'promotion/';
  constructor(private httpApiService: HttpApiService) { }

  /**
   *
   * @returns products
   * Method to retrieve products data from backend and pass on to products service
  */
  async getAllPromotionCodes(userId): Promise<PromotionCodes> {
    const url = `${this.apiUrl}Get?UserId=${userId}`;
    let promotions: PromotionCodes;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          promotions = <PromotionCodes>data['promotionCodes'];
        }
      });
    return promotions;
  }

  async getPromotionByCode(promoCode, userId): Promise<PromotionCodes> {
    const url = `${this.apiUrl}GetbyCode?PromotionCode=${promoCode}&UserID=${userId}`;
    let promotions: PromotionCodes;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          promotions = <PromotionCodes>data;
        }
      });
    return promotions;
  }

  async addPromo(promo) {
    const url = `${this.apiUrl}Create`;
    return await this.httpApiService.postData(url, promo);
  }

  async updatePromo(promo) {
    const url = `${this.apiUrl}Update`;
    return await this.httpApiService.putData(url, promo);
  }

  async deletePromo(promo, userId) {
    const url = `${this.apiUrl}Delete?Code=${promo}&UserID=${userId}`;
    return await this.httpApiService.delete(url);
  }  
}
