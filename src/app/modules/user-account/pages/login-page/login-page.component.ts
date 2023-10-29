import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UserAccountService } from '../../services/user-account.service';
import { AuthenticateUser } from '../../models/user';
import { GlobalsService } from '../../../../globals.service';
import { MetaService } from '../../../../shared/services/meta.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: UntypedFormGroup;
  submitted = false;
  constructor(private metaService: MetaService, private globalsService: GlobalsService, private formBuilder: UntypedFormBuilder, public userAccountService: UserAccountService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('loggedIn') == 'TRUE') {
      this.router.navigate(['home']);
    }
    this.metaService.setTitle(this.globalsService.loginPageTitle);
    this.metaService.updateMeta(this.globalsService.keywords, this.globalsService.loginPageMetaKeyword);
    this.metaService.updateMeta(this.globalsService.description, this.globalsService.loginPageMetaDescription);
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value['email']);
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let authUser: AuthenticateUser = new AuthenticateUser();
    authUser.password = this.loginForm.value['password'];
    authUser.userName = this.loginForm.value['email'];
    this.userAccountService.validateLogin(authUser);
  }

}
