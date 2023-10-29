import { Injectable } from '@angular/core';
import { UserAccountApiService } from 'src/app/modules/user-account/services/API/user-account-api.service';
import { AuthenticateUser, JWTToken, User } from '../models/user';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';
import { ActionLogsService } from '../../action-logs/services/action-logs.service';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  public isAlignment = false;
  public errorMessage = 'Error in saving';
  public customValidationClass = 'd-none';
  public contentLoaded = false;
  public username: string;
  public password: string;
  public usernameValidFlag = false;
  public passwordValidFlag = false;
  public ValidationError = false;
  public ValidationErrorMessage = '';

  public isKeepSignedIn = true;

  private userLoggedIn = new Subject<boolean>();


  constructor(
    private userAccountApiService: UserAccountApiService,
    private sharedService: SharedService,
    private router: Router,
    private actionLogsService: ActionLogsService
  ) {
    this.userLoggedIn.next(false);

  }

  /**
  *
  * @author Ravi
  *  method to validate user login form and redirect on success
  */
  async validateLogin(user) {
    const stringData = JSON.stringify(user);
    await this.userAccountApiService.validateLogin(stringData).then(data => {
      if (data['status'] != 200) {
        this.sharedService.showMessage({ 'type': 'danger', 'message': data['error'] });
      } else {
        this.setUserLoggedIn(true);

        localStorage.setItem('loggedIn', 'TRUE');
        localStorage.setItem('contactEMail', data['body']['contactEMail']);
        localStorage.setItem('userId', data['body']['userId']);
        localStorage.setItem('customerId', data['body']['customerId']);
        localStorage.setItem('name', data['body']['name']);
        localStorage.setItem('customerRecId', data['body']['userId']);
        this.actionLogsService.addLog('USER_LOGIN');
        console.log(data);
        if (data['body']['adminUser'] === 1) {
          localStorage.setItem('user_role', 'ADMIN');
          window.location.href = window.location.origin + '/admin/dashboard';
        } else {
          if (data['body']['type'] === 'Partner') {
            localStorage.setItem('user_role', 'PARTNER');
          } else {
            localStorage.setItem('user_role', 'CUSTOMER');
          }
          window.location.href = window.location.origin + '/user/dashboard';
        }
      }
    });
  }

  /**
  *
  * @author Ravi
  *  method to clear user session on logout and redirect to login page
  */
  async UserLogout(logoutType: string) {
    await this.actionLogsService.addLog(logoutType);
    localStorage.clear();
    window.location.href = window.location.origin + '/login';

  }

  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn.next(userLoggedIn);
  }

  getUserLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }
}
