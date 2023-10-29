import { Component, OnInit } from '@angular/core';

import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Customer, CustomerVerificationEmail } from '../../../customers/models/customer';
import { CustomerService } from '../../../customers/services/customer.service';
import { MetaService } from '../../../../shared/services/meta.service';
import { GlobalsService } from '../../../../globals.service';
import { ConfirmPasswordValidator } from '../../../customers/services/confirm-password.validator'; 

import { Router } from '@angular/router';
import { EmailService } from '../../../../shared/services/email.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm: UntypedFormGroup;
  submitted = false;
  registerSuccess = false;
  constructor(public customerService: CustomerService, private formBuilder: UntypedFormBuilder, public metaService: MetaService, private globalsService: GlobalsService, private router: Router, private emailService: EmailService) { }

  ngOnInit(): void {
    if (localStorage.getItem('loggedIn') == 'TRUE') {
      this.router.navigate(['home']);
    }
    this.metaService.setTitle(this.globalsService.registerPageTitle);
    this.metaService.updateMeta(this.globalsService.keywords, this.globalsService.registerPageMetaKeyword);
    this.metaService.updateMeta(this.globalsService.description, this.globalsService.registerPageMetaDescription);
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      acceptTerms: [false, Validators.requiredTrue]
    },
      {
        validator: ConfirmPasswordValidator("password", "confirm_password")
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    let customer: Customer = new Customer();
    customer.contactName = this.registerForm.value['name'];
    customer.name = this.registerForm.value['company'];
    customer.contactPhoneNo = this.registerForm.value['phone'];
    customer.password = this.registerForm.value['password'];
    //customer.country = 'USA';

    customer.contactEMail = customer.userId = this.registerForm.value['email'];
    let result = await this.customerService.registerCustomer(customer);
    if (result == true) {
      this.registerSuccess = true;
    }
  }
}
