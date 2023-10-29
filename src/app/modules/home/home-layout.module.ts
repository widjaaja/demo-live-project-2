import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BecomeAPartnerComponent } from './pages/become-a-partner/become-a-partner.component';
//import { FreeTrialPageComponent } from './pages/free-trial-page/free-trial-page.component';
//import { MaintenancePageComponent } from './pages/maintenance-page/maintenance-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CookiePolicyPageComponent } from './pages/cookie-policy-page/cookie-policy-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsOfUsePageComponent } from './pages/terms-of-use-page/terms-of-use-page.component';
import { EndUserAgreementPageComponent } from './pages/end-user-agreement-page/end-user-agreement-page.component';
@NgModule({
  declarations: [
  FeaturedProductsComponent,
  BlogPostsComponent,
  WhatWeDoComponent,
  SliderComponent,
  AboutPageComponent,
  TermsConditionsComponent,
  PrivacyPolicyComponent,
  ContactUsComponent,
  BecomeAPartnerComponent,
  //FreeTrialPageComponent,
  //MaintenancePageComponent,
  NotFoundPageComponent,
  CookiePolicyPageComponent,
  PrivacyPolicyPageComponent,
  TermsOfUsePageComponent,
  EndUserAgreementPageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,
  ],
  exports: [
  ]
})
export class RepositoryLayoutModule { }
