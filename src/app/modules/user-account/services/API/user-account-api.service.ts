import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../../shared/services/Api/http-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserAccountApiService {
  apiUrl = 'user/';
  constructor(private httpApiService: HttpApiService) { }

  /**
   *
   * @param data - json data of form fields
   * @returns status of update
   * Method to update themesettings from backend and fetch response of success or failure
   */
  public async validateLogin(data: string) {
    const url = `${this.apiUrl}login`;
    return await this.httpApiService.postData(url, data);
  }

}
