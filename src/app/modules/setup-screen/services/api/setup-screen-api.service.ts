import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../../shared/services/Api/http-api.service';
import { SetupScreen } from '../../model/setup-screen';

@Injectable({
  providedIn: 'root'
})
export class SetupScreenApiService {
  apiUrl = 'setup/';
  constructor(private httpApiService: HttpApiService) { }

  /**
   *
   * @returns products
   * Method to retrieve products data from backend and pass on to products service
  */
  async getSetupDetail(): Promise<SetupScreen> {
    const url = `${this.apiUrl}Get`;
    let setupScreen: SetupScreen;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          setupScreen = <SetupScreen>data;
        }
      });
    return setupScreen;
  }

  async updateSetup(setupObj) {
    const url = `${this.apiUrl}UpdateSetup`;
    return await this.httpApiService.putData(url, setupObj);
  }

  async downloadBrochure() {
    const url = `${this.apiUrl}download/brochure`;
    await this.httpApiService.getasyncData(url);
  }

  async downloadSetup() {
    const url = `${this.apiUrl}download/product`;
    await this.httpApiService.getasyncData(url);
  }

  async donwloadManual() {
    const url = `${this.apiUrl}download/usermanual`;
    await this.httpApiService.getasyncData(url);
  }
  
}
