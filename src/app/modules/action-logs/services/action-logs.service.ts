import { Injectable } from '@angular/core';
import { ActionLogsApiService } from './action-logs-api.service';
import { ActionLog } from '../model/actionLog';

@Injectable({
  providedIn: 'root'
})
export class ActionLogsService {
  actionLogItem: ActionLog;
  constructor(protected actionLogsApiService: ActionLogsApiService) { }

  async addLog(actionId) {
    this.actionLogItem = new ActionLog();
    this.actionLogItem.actionId = actionId;
    this.actionLogItem.actionByUserId = localStorage.getItem('userId');
    this.actionLogItem.ipAddress = '';
    this.actionLogItem.recordDump = '';
    this.actionLogItem.referer = '';
    this.actionLogItem.requestDump = '';
    this.actionLogItem.resourceId = '';
    this.actionLogItem.sessionId = '';
    this.actionLogItem.userAgent = window.navigator.userAgent;
    this.actionLogItem.userType = '';
    let result: any;
    return await this.actionLogsApiService.addLog(this.actionLogItem);
  }
}
