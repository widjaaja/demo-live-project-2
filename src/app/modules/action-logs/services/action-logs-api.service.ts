import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../shared/services/Api/http-api.service';

@Injectable({
  providedIn: 'root'
})
export class ActionLogsApiService {
  apiUrl = 'actionlogs/';

  constructor(public httpApiService: HttpApiService) { }

  async addLog(logItem) {
    const url = `${this.apiUrl}Create`;
    return await this.httpApiService.postData(url, logItem);
  }
}
